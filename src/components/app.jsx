import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import youtubeSearch from '../services/youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

// import our new SearchBar component
import SearchBar from './search_bar';

function App(props) {
  // term to search for
  const [searchTerm, setSearchTerm] = useState('');

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  function search(text) {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  }

  // create a new debounced search function
  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div id="video-section">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      <VideoDetail video={selectedVideo} />
    </div>
  );
}

export default App;
