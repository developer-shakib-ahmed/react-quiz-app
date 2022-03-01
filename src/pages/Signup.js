import Button from '../components/Button';
import EntryTitle from '../components/EntryTitle';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../styles/Signup.module.css';

export default function Signup() {
  return (
    <>
      <EntryTitle text="Create an Account" />

      <div className={classes.formWrap}>
        <Illustration />

        <Form action="">
          <TextInput placeholder="Enter your name" />

          <TextInput placeholder="Enter your email" />

          <TextInput type="password" placeholder="Enter your password" />

          <TextInput type="password" placeholder="Enter your confirm password" />

          <p>
            <Button text="Submit Now" className="btn-orange" />
          </p>

          <p>
            Already have an account? <a href="login.html">Login</a> now.
          </p>
        </Form>
      </div>
    </>
  );
}
