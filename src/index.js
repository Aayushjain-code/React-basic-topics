import React from 'react';
import ReactDOM from 'react-dom';


//css
import './index.css';
//setup vars

//converted different objects into single one for "proper list"
const books = [
  {
    author: "John Doe",
    title: "I love You to the moon and Backssss!",
    image: "https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",

  },
  {
    author: "Ammaya helli",
    title: "mobiles are awesome",
    image: "https://m.media-amazon.com/images/I/51aIDYrc84L._AC_SY200_.jpg",

  },
];


function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        {/* console.log(book);
        const { image, author, title } = book; */}

        return (
          <Book book={book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { image, title, author } = props.book;
  return (
    <article className="book">
      <img src={image} />
      <h1>{title}</h1>
      <h4 >{author}</h4>

    </article>
  )
}


ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
