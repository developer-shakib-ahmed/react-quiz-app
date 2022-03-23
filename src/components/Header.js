import { Link } from 'react-router-dom';
import logoPng from '../assets/img/logo.png';
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/Header.module.css';
import Button from './Button';
import Wrap from './Wrap';

export default function Header() {
  const { currentUser, logout } = useAuth();
  return (
    <header>
      <Wrap className={classes.headerWrap}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logoPng} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul>
            {currentUser && (
              <>
                <li>
                  <Button text={`Profile: ${currentUser.displayName}`} className="" />
                </li>
                <li>
                  <Button click={logout} text="Logout" className="btn-orange" />
                </li>
              </>
            )}

            {!currentUser && (
              <>
                <li>
                  <Link to="login">
                    <Button text="Login" className="btn-orange" />
                  </Link>
                </li>
                <li>
                  <Link to="signup">
                    <Button text="Signup" className="btn-green" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Wrap>
    </header>
  );
}

// currentUser = {providerId, proactiveRefresh, reloadUserInfo, reloadListener, uid, auth, stsTokenManager, accessToken, displayName, email, emailVerified, phoneNumber, photoURL, isAnonymous, tenantId, providerData, metadata}
