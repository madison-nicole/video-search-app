import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setVideos } from '../actions';
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function YouTube(props) {
  const dispatch = useDispatch();

  const search = (text) => {
    youtubeSearch(text).then((videos) => {
      dispatch(setVideos(videos));
    });
  };

  // create a new debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(search, 500), []);

  return (
    <div id="video-section">
      <SearchBar onSearchChange={debouncedSearch} />
      <VideoList />
      <VideoDetail />
    </div>
  );
}

export default YouTube;
