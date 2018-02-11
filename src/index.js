import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
//create component, should make some html

const YOUTUBE_API_KEY = 'AIzaSyDhuROJa0X-ayqVc-ndYWQCb1CWR9C_dIY';

YTSearch({key: YOUTUBE_API_KEY, term: 'beach thong'}, function(response){
  console.log(response);
});

const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));