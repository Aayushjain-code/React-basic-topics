import React from 'react';
import ReactDOM from 'react-dom';


//css
import './index.css';
//setup vars

//converted different objects into single one for "proper list"
const books = [
  {
    id: 1,
    author: "John Doe",
    title: "I love You to the moon and Backssss!",
    image: "https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",

  },
  {
    id: 2,
    author: "Ammaya helli",
    title: "mobiles are awesome",
    image: "https://m.media-amazon.com/images/I/51aIDYrc84L._AC_SY200_.jpg",

  },
];


function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            {...book}
          ></Book>
        )
      })}
    </section>
  )
}

const Book = ({ image, title, author }) => {

  //attribute,eventHandler
  //onClick,onMouseHover


  return (
    <article className="book" onMouseOver={() => {
      console.log(author);
    }}>
      <img src={image} alt="" />

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
