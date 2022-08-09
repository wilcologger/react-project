import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './App';
import reportWebVitals from './reportWebVitals';
import Toggle from './Toggle';
import Comment from './Comment';
import LoginControl from './Login';
import Page from './WarningBanner';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comment date={comment.date} text={comment.text} author={comment.author} />
    <Clock />
    <Toggle />
    <LoginControl />
    <Page />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
