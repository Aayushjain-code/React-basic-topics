import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Greeting() {
  return <h4>This is Aayush</h4>
}

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById('root')
);
