import Checkbox from '../components/Checkbox';
import EntryTitle from '../components/EntryTitle';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import ProgressBar from '../components/ProgressBar';
import classes from '../styles/Quiz.module.css';

export default function Quiz() {
  return (
    <>
      <EntryTitle text="Quiz" />

      <div className={classes.formWrap}>
        <Illustration />

        <Form action="">
          <h3 className="qn-title">Pick three of your favorite Star Wars Films</h3>

          <Checkbox label="Your option 1" />
          <Checkbox label="Your option 2" />
          <Checkbox label="Your option 3" />
          <Checkbox label="Your option 4" />
          <Checkbox label="Your option 5" />
        </Form>
      </div>

      <ProgressBar />
    </>
  );
}
