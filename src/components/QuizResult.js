import classess from '../styles/QuizResult.module.css';
import EntryTitle from './EntryTitle';
import Illustration from './Illustration';

export default function Result() {
  return (
    <>
      <EntryTitle text="Quiz Result" />

      <div className={classess.quizResult}>
        <div className={classess.result}>
          <h1>
            <span>Your score is</span>15 out of 20
          </h1>
        </div>

        <Illustration />
      </div>
    </>
  );
}
