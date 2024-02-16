import React from 'react';
import { useSelector } from 'react-redux';

function VideoDetail() {
  const video = useSelector((reduxState) => reduxState.video?.selected);

  if (!video) {
    return <div />;
  }

  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="youtube detail" />
      </div>
      <div className="details">
        <div className="detail-title">{video.snippet.title}</div>
        <div className="detail-text">{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
