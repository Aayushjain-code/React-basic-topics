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
//const can be declared out
const author = "John Doe";

const Book = () => {
  //const can be declared in
  const title = "I love You to the moon and Backssss!"

  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
      <h1>{title}</h1>
      <h4 >{author.toUpperCase()}</h4>
      {/* jsx me object pass krna padta hai to return something */}
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}


ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
