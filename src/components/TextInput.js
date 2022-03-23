import classes from '../styles/TextInput.module.css';

export default function TextInput({ label, placeholder, type, value, onChange, required }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes.fieldWrap}>
      {label}
      <input
        required={required}
        placeholder={placeholder}
        className={classes.field}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
