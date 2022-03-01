import classes from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <div className={classes.wrap}>{children}</div>
      </main>

      <Footer />
    </>
  );
}
