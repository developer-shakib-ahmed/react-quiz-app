import EntryTitle from '../components/EntryTitle';
import Illustration from '../components/Illustration';
import LoginForm from '../components/LoginForm';
import classes from '../styles/Login.module.css';

export default function Login() {
  return (
    <>
      <EntryTitle text="Login" />

      <div className={classes.formWrap}>
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
