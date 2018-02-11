import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
//create component, should make some html

const YOUTUBE_API_KEY = 'AIzaSyDhuROJa0X-ayqVc-ndYWQCb1CWR9C_dIY';

const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));