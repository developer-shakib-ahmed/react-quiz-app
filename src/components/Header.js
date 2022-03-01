import logoPng from '../assets/img/logo.png';
import classes from '../styles/Header.module.css';
import Button from './Button';
import Wrap from './Wrap';

export default function Header() {
  return (
    <header>
      <Wrap className={classes.headerWrap}>
        <div className={classes.logo}>
          <a href="index.html">
            <img src={logoPng} alt="logo" />
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <Button text="Login" className="btn-orange" />
            </li>
            <li>
              <Button text="Signup" className="btn-green" />
            </li>
          </ul>
        </nav>
      </Wrap>
    </header>
  );
}
