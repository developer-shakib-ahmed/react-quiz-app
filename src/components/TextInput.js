import classes from '../styles/TextInput.module.css';

export default function TextInput({ placeholder, label, type }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes.fieldWrap}>
      {label}
      <input className={classes.field} type={type} placeholder={placeholder} />
    </label>
  );
}
