import Checkbox from './Checkbox';

export default function QuizAnswer({ className }) {
  return (
    <div className={className}>
      <Checkbox checked label="Your option 1" />
    </div>
  );
}
