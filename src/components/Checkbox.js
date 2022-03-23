import classes from '../styles/Checkbox.module.css';

export default function Checkbox({ label, onChange, checked, required, className, disabled }) {
  return (
    <label className={classes.fieldWrap}>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className={className}
        required={required}
        disabled={disabled}
      />
      {label}
    </label>
  );
}
