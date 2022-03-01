import classes from '../styles/Button.module.css';

export default function Button({ text, className }) {
  let btnColors;

  switch (className) {
    case 'btn-green':
      btnColors = classes.btnGreen;
      break;

    case 'btn-orange':
      btnColors = classes.btnOrange;
      break;

    default:
      btnColors = classes.btnDefault;
      break;
  }

  return <button className={`${classes.btn} ${btnColors}`}>{text}</button>;
}
