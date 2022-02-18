import logo from './logo.svg';
import React from 'react';
import './App.css';

function DisplayImage() {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}
function Greet(props) {
  return (
    <p>
      Welcome {props.name}...
    </p>
  )
}

function App(props) {

  return (
    <div>
      <DisplayImage />
      <Greet name={props.name} />
    </div>


  );
}



export default App;
