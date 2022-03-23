import classes from '../styles/QuizAnalysis.module.css';
import EntryTitle from './EntryTitle';
import QuizAnswer from './QuizAnswer';

export default function QuizAnalysis({ answers }) {
  return (
    <>
      <EntryTitle text="Quiz Analysis" />

      {answers.map((answer, index1) => (
        <div className={classes.quizAnalysis} key={index1}>
          <div className={classes.quizDescriptions}>
            <h3>{answer.title}</h3>
            <p>
              <b>Details:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, natus
              blanditiis eum animi doloremque sit odio! Libero nobis assumenda voluptatem quas omnis
              voluptates dolores, facere magni ullam cumque, doloremque nemo.
            </p>
          </div>

          <div className={classes.quizAnswers}>
            {answer.options.map((option, index2) => (
              <QuizAnswer
                // eslint-disable-next-line no-nested-ternary
                className={option.correct ? classes.right : option.checked ? classes.wrong : null}
                label={option.title}
                checked={option.checked}
                disabled
                key={index2}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
