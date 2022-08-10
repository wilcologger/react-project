import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';
import Toggle from './Toggle';
import Comment from './Comment';
import LoginControl from './Login';
import Page from './WarningBanner';
import NumberList from './ListOfNumbers';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Temperature';
import SignUpDialog from './SignUpDialog';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Comment date={comment.date} text={comment.text} author={comment.author} />
    <br/>
    <Clock />
    <br/>
    <Toggle />
    <br/>
    <LoginControl />
    <br/>
    <Page />
    <br/>
    <NumberList numbers={numbers} />
    <br/>
    <NameForm />
    <br/>
    <EssayForm />
    <br/>
    <FlavorForm />
    <br/>
    <Reservation />
    <br />
    <Calculator />
    <br />
    <SignUpDialog />
    <br /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
