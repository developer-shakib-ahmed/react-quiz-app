import classess from '../styles/EntryTitle.module.css';

export default function EntryTitle({ text }) {
  return <h2 className={classess.entryTitle}>{text}</h2>;
}
