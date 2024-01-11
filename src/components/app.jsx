import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

// import our new SearchBar component
import SearchBar from './search_bar';

const [videos, setVideos] = useState([]);
const [selectedVideo, setSelected] = useState(null);

// create a new debounced search function
const debouncedSearch = useCallback(debounce(search, 500), []);

// render it after SearchBar
  <VideoDetail video={selectedVideo} />;

youtubeSearch('pixar').then((result) => {
  setVideos(result);
  setSelected(result[0]);
  console.log(result);
});

const search = (text) => {
  youtubeSearch(text).then((result) => {
    setVideos(result);
    setSelected(result[0]);
  });
};

useEffect(() => {
  search('pixar');
}, []);

function App(props) {
  return (
    <div id="video-section">
      <SearchBar />
      <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      <VideoDetail onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
    </div>
  );
}

export default App;
