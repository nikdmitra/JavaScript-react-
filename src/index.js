import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SamuraiAPP from './App';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <SamuraiAPP />, document.getElementById('root')
  );
}

renderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

