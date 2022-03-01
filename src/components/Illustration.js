import illustrationPng from '../assets/img/logo512.png';
import classes from '../styles/Illustration.module.css';

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={illustrationPng} alt="illustration" />
    </div>
  );
}
