import classes from '../styles/Button.module.css';

export default function Button({ text, className, type, disabled, click }) {
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

  return (
    <button
      onClick={click}
      disabled={disabled}
      type={type}
      className={`${classes.btn} ${btnColors}`}
    >
      {text}
    </button>
  );
}
