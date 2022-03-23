import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import EntryTitle from '../components/EntryTitle';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import ProgressBar from '../components/ProgressBar';
import { useAuth } from '../contexts/AuthContext';
import useQuizQuery from '../hooks/useQuizQuery';
import classes from '../styles/Quiz.module.css';

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      // eslint-disable-next-line no-case-declarations
      if (action.value) {
        action.value.forEach((questions) => {
          questions.options.forEach((option) => {
            // eslint-disable-next-line no-param-reassign
            option.checked = false;
          });
        });
      }
      return action.value;

    case 'answers':
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);

      questions[action.questionID].options[action.optionIndex].checked = action.value;

      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { loading, error, data } = useQuizQuery(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  const { currentUser } = useAuth();

  const handleCheckbox = (e, index) => {
    dispatch({
      type: 'answers',
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const percentage = data.length > 0 ? ((currentQuestion + 1) / data.length) * 100 : 0;

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion((prevState) => prevState + 1);
    } else {
      console.log('Quiz Finished!');
    }
  };

  const handleSubmit = async () => {
    const db = getDatabase();
    const dataRef = ref(db, `result/${currentUser.uid}/${id}`);

    try {
      await set(dataRef, {
        [id]: qna,
      });

      navigate(`/result/${id}`, { state: qna });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: data,
    });
  }, [data]);

  return (
    <>
      <EntryTitle text="Quiz" />

      <div className={classes.formWrap}>
        <Illustration title={state.videoTitle} video={id} />

        <Form>
          {loading && <h3>Loading...</h3>}

          {!loading && error && <h3>There was an Error!</h3>}

          {!loading && !error && qna && qna.length > 0 && (
            <>
              <h3 className={classes.qnTitle}>{qna[currentQuestion].title}</h3>

              {qna[currentQuestion].options.map((option, index) => (
                <Checkbox
                  label={option.title}
                  // eslint-disable-next-line react/jsx-boolean-value
                  checked={option.checked}
                  onChange={(e) => handleCheckbox(e, index)}
                  key={index}
                />
              ))}
            </>
          )}
        </Form>
      </div>

      <ProgressBar
        prev={handlePrev}
        next={handleNext}
        percentage={Math.round(percentage)}
        submit={handleSubmit}
      />
    </>
  );
}
