import EntryTitle from '../components/EntryTitle';
import Illustration from '../components/Illustration';
import SignUpForm from '../components/SignUpForm';
import classes from '../styles/Signup.module.css';

export default function Signup() {
  return (
    <>
      <EntryTitle text="Create an Account" />

      <div className={classes.formWrap}>
        <Illustration />
        <SignUpForm />
      </div>
    </>
  );
}
