import classes from '../styles/QuizAnalysis.module.css';
import EntryTitle from './EntryTitle';
import QuizAnswer from './QuizAnswer';

export default function QuizAnalysis() {
  return (
    <>
      <EntryTitle text="Quiz Analysis" />

      <div className={classes.quizAnalysis}>
        <div className={classes.quizDescriptions}>
          <h3>Pick three of your favorite Star Wars Films</h3>
          <p>
            <b>Details:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, natus
            blanditiis eum animi doloremque sit odio! Libero nobis assumenda voluptatem quas omnis
            voluptates dolores, facere magni ullam cumque, doloremque nemo.
          </p>
        </div>

        <div className={classes.quizAnswers}>
          <QuizAnswer className={classes.right} />
          <QuizAnswer className={classes.wrong} />
          <QuizAnswer className={classes.right} />
          <QuizAnswer className={classes.wrong} />
        </div>
      </div>
    </>
  );
}
