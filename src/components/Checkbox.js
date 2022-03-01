import classes from '../styles/Checkbox.module.css';

export default function Checkbox({ label, checked }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes.fieldWrap}>
      <input checked={checked} className={classes.field} type="checkbox" />
      {label}
    </label>
  );
}
