import EntryTitle from '../components/EntryTitle';
import LessionCard from '../components/LessionCard';
import LessionQuery from '../hooks/LessionQuery';
import classes from '../styles/Home.module.css';

export default function Home() {
  const { loading, error, data } = LessionQuery();

  return (
    <>
      <EntryTitle text="Quiz Lessons" />

      {loading && data.length <= 0 && <h3>Loading...</h3>}

      {!loading && error && <h3>There was an Error!</h3>}

      <div className={classes.lessons}>
        {data.length > 0 &&
          data.map((item) => (
            <LessionCard
              key={item.youtubeID}
              img={`https://img.youtube.com/vi/${item.youtubeID}/maxresdefault.jpg`}
              title={item.title}
              score={item.noq * 5}
              qn={item.noq}
              link={`/quiz/${item.youtubeID}`}
            />
          ))}
      </div>
    </>
  );
}
