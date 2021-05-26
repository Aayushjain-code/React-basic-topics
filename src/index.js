import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function BookList() {
  return (
    <section>
      <Person />
      <Message />
    </section>
  )
}

const Person = () => <h2>John Doe</h2>;

const Message = () => {
  return <p>This is a Message</p>
}


ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
