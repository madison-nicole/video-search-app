import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectVideo } from '../actions';

function VideoListItem(props) {
  const dispatch = useDispatch();
  const imgUrl = props?.video?.snippet?.thumbnails?.default?.url;
  // added optional chaining

  return (
    <li onClick={() => dispatch(selectVideo(props.video))}>
      <img alt="video" src={imgUrl} />
      <div>{props?.video?.snippet?.title}</div>
    </li>
  );
}

// shorthand for passing in an object w/ the methods you want connected to the store
export default connect(null, { selectVideo })(VideoListItem);
