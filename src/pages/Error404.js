import { Link } from 'react-router-dom';
import EntryTitle from '../components/EntryTitle';
import Illustration from '../components/Illustration';
import btnClass from '../styles/Button.module.css';
import classess from '../styles/Error404.module.css';

export default function Login() {
  return (
    <>
      <EntryTitle text="Error 404" />

      <div className={classess.error404}>
        <div className={classess.error}>
          <h2>Not Found 404!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sed. Neque eos
            perspiciatis fuga deserunt debitis quisquam ad dolores temporibus, voluptates in ut nemo
            accusantium voluptate hic quibusdam aperiam vel!
          </p>

          <br />
          <p>
            <Link className={`${btnClass.btn} ${btnClass.btnOrange}`} to="/">
              Back to Home
            </Link>
          </p>
        </div>
        <Illustration />
      </div>
    </>
  );
}
