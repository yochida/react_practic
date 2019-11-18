import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import commentReducer from './CommentReducer';
const store = createStore(commentReducer);

ReactDOM.render(<App />, document.getElementById('root'));