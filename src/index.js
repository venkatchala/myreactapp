import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShowTime from './ShowTime';
import reportWebVitals from './reportWebVitals';


function showTime() {
  ReactDOM.render(
    <ShowTime />,
    document.getElementById('root')
  );
}
setInterval(showTime, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
