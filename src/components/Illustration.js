import illustrationPng from '../assets/img/logo512.png';
import classes from '../styles/Illustration.module.css';

export default function Illustration({ title, video, img }) {
  return (
    <div className={classes.illustration}>
      <div className={classes.inner}>
        {title && <h3>{title}</h3>}
        {video ? (
          <iframe
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img src={img || illustrationPng} alt="illustration" />
        )}
      </div>
    </div>
  );
}
