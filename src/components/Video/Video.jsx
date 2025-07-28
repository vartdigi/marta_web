import './Video.css'; // pokud budeš mít vlastní CSS

export const Video = () => {
  return (
    <section className="videos-section">
      <div className="videos-wrapper">
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/COL8SuTmpj8"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/PgxO3QGwbm4"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
