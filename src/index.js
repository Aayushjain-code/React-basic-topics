import React from 'react';
import ReactDOM from 'react-dom';
//css
import './index.css';
//setup vars
const author = "John Doe";
const title = "I love You to the moon and Backssss!"
const image = "https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg";



function BookList() {
  return (
    <section className="bookList">
      <Book job="developer" />
      <Book title="randome title" number={22} />

    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={image} />

      <h1>{title}</h1>

      <h4 >{author}</h4>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>

    </article>
  )
}


ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
