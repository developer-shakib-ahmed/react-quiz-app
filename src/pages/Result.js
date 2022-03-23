import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import QuizAnalysis from '../components/QuizAnalysis';
import QuizResult from '../components/QuizResult';
import useAnswerQuery from '../hooks/useAnswerQuery';

export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const qna = state;

  const { loading, error, data } = useAnswerQuery(id);

  const calcScore = () => {
    let score = 0;

    data.forEach((answer, index1) => {
      const correctIndex = [];
      const checkedIndex = [];

      answer.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);

        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          // eslint-disable-next-line no-param-reassign
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score += 5;
      }
    });

    return score;
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}

      {error && <h2>There was an error!!</h2>}

      {data && data.length > 0 && (
        <>
          <QuizResult score={calcScore()} noq={qna.length} id={id} />
          <QuizAnalysis answers={data} />
        </>
      )}
    </>
  );
}
