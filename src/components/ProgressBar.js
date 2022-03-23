import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ prev, next, percentage, submit }) {
  return (
    <div className={classes.progressBar}>
      <Button click={prev} disabled={percentage === 0} text="Back" className="btn-orange" />

      <div className={classes.bar}>
        <div className={classes.tooltip} style={{ left: `${percentage}%` }}>
          {percentage}% Complete
        </div>
        <div className={classes.progress}>
          <span className={classes.indecator} style={{ width: `${percentage}%` }} />
        </div>
      </div>

      {percentage >= 100 ? (
        <Button click={submit} text="Submit Answer" className="btn-orange" />
      ) : (
        <Button click={next} text="Next Question" className="btn-green" />
      )}
    </div>
  );
}
