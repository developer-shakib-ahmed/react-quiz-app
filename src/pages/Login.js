import Button from '../components/Button';
import EntryTitle from '../components/EntryTitle';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../styles/Login.module.css';

export default function Login() {
  return (
    <>
      <EntryTitle text="Login" />

      <div className={classes.formWrap}>
        <Illustration />

        <Form action="">
          <TextInput placeholder="Enter your email" />
          <TextInput placeholder="Enter your password" />
          <p>
            <Button text="Login" className="btn-orange" />
          </p>
          <p>
            Dont have an account? <a href="signup.html">Signup</a> now.
          </p>
        </Form>
      </div>
    </>
  );
}
