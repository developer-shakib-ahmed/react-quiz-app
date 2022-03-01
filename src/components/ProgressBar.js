import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar() {
  return (
    <div className={classes.progressBar}>
      <Button text="Back" className="btn-orange" />

      <div className={classes.bar}>
        <div className={classes.tooltip}>100% Complete</div>
        <div className={classes.progress}>
          <span className={classes.indecator} />
        </div>
      </div>

      <Button text="Next Question" className="btn-green" />
    </div>
  );
}
