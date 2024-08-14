import React from 'react';
import '../css/video.css';

function Video() {
  return (
    <section className="video-section">
      <h2>Favorite Videos</h2>
      <div className="video">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/sample-video-url" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="Video"
        ></iframe>
      </div>
    </section>
  );
}

export default Video;
