import classes from '../styles/LessionCard.module.css';

export default function LessionCard({ img, title, score, qn }) {
  return (
    <div className={classes.card}>
      <a href="quiz.html">
        <div className="video">
          <img src={img} alt="" />
          <h2>{title}</h2>
        </div>

        <div className={classes.meta}>
          <span className="count">{qn} Questions</span>
          <span className="score">Score: {score}</span>
        </div>
      </a>
    </div>
  );
}
