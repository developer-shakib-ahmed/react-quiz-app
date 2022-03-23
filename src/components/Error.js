import classes from '../styles/Error.module.css';

export default function Error({ text, type }) {
  return (
    <p className={classes.error} data-type={type}>
      {text}
    </p>
  );
}
