import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css';


//importing custom
//not a default exported function therefore using { }
import { data } from './Books';
//default exported function
import Book from "./Book"


function BookList() {
  return (
    <section className="bookList">
      {data.map((book) => {
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




ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
