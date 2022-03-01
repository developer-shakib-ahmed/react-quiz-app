import classes from '../styles/Form.module.css';

export default function Form({ children }) {
  return <form className={classes.form}>{children}</form>;
}
