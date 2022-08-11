import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line
import Clock from './Clock';
// eslint-disable-next-line
import Toggle from './Toggle';
// eslint-disable-next-line
import Comment from './Comment';
// eslint-disable-next-line
import LoginControl from './Login';
// eslint-disable-next-line
import Page from './WarningBanner';
// eslint-disable-next-line
import NumberList from './ListOfNumbers';
// eslint-disable-next-line
import NameForm from './NameForm';
// eslint-disable-next-line
import EssayForm from './EssayForm';
// eslint-disable-next-line
import FlavorForm from './FlavorForm';
// eslint-disable-next-line
import Reservation from './Reservation';
// eslint-disable-next-line
import Calculator from './Temperature';
// eslint-disable-next-line
import SignUpDialog from './SignUpDialog';

// eslint-disable-next-line
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

// eslint-disable-next-line
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
