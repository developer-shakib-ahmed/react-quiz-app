import classes from '../styles/Form.module.css';

export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  );
}
