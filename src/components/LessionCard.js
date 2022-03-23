import { Link } from 'react-router-dom';
import classes from '../styles/LessionCard.module.css';

export default function LessionCard({ img, title, score, qn, link }) {
  return (
    <div className={classes.card}>
      <Link to={link} state={{ videoTitle: title }}>
        <div className="video">
          <img src={img} alt={title} />
          <h2>{title}</h2>
        </div>

        <div className={classes.meta}>
          <span className="count">Questions: {qn}</span>
          <span className="score">Points: {score}</span>
        </div>
      </Link>
    </div>
  );
}
