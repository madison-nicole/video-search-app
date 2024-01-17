import React from 'react';
import VideoListItem from './video_list_item';

function VideoList({ onVideoSelect, videos }) {
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />;
  });
  return (
    <>
      {videoItems};
    </>
  );
}

export default VideoList;
