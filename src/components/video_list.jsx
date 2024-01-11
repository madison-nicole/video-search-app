import React from 'react';
import VideoListItem from './video_list_item';

function VideoList(props) {
  // eslint-disable-next-line no-unused-vars
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />;
  });
}

export default VideoList;
