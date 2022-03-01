import classes from '../styles/Wrap.module.css';

export default function SiteWrap({ className, children }) {
  return <div className={`${classes.wrap} ${className}`}>{children}</div>;
}
