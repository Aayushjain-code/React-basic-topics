import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}


const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
}


const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />


const Title = () => <h1>This is the Title</h1>;

function Author() {
  return <h4 style={{ color: "red", fontSize: "0.75rem", marginTop: "0.25rem" }}>John Doe</h4>
}



ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
