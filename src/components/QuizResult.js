import { Link } from 'react-router-dom';
// import useFetchRequest from '../hooks/useFetchRequest';
import classess from '../styles/QuizResult.module.css';
import Button from './Button';
import EntryTitle from './EntryTitle';
import Illustration from './Illustration';

export default function Result({ score, noq }) {
  // const { loading, error, result } = useFetchRequest(
  //   `https://api.pexels.com/v1/search?query=people&per_page=1`,
  //   'GET',
  //   {
  //     Accept: 'application/json',
  //     Authorization: process.env.REACT_APP_PEXELS_API_KEY,
  //   }
  // );

  // eslint-disable-next-line no-unused-expressions
  // !loading && !error && console.log(result);
  return (
    <>
      <EntryTitle text="Quiz Result" />

      <div className={classess.quizResult}>
        <div className={classess.result}>
          <div className={classess.inner}>
            <h1>
              <span>Your score is</span>
              {score} out of {noq * 5}
            </h1>
            <Link to="/">
              <Button className="btn-orange" text="Retack" />
            </Link>
          </div>
        </div>

        <Illustration />
      </div>
    </>
  );
}
