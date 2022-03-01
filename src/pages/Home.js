import placeholderImg from '../assets/img/placeholder-image.png';
import EntryTitle from '../components/EntryTitle';
import LessionCard from '../components/LessionCard';
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <EntryTitle text="Quiz Lessons" />

      <div className={classes.lessons}>
        <LessionCard
          img={placeholderImg}
          title="#1 React Hooks Bangla - React useState hook bangla"
          score="N/A"
          qn="10"
        />
      </div>
    </>
  );
}
