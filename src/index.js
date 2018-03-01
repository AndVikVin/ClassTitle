import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostList from './postList'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'));
registerServiceWorker();
