import Checkbox from './Checkbox';

export default function QuizAnswer({ className, checked, label, disabled }) {
  return (
    <div className={className}>
      <Checkbox checked={checked} label={label} disabled={disabled} />
    </div>
  );
}
