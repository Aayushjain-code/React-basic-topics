import React from 'react';
import ReactDOM from 'react-dom';
//css
import './index.css';
//setup vars

const firstBook = {
  author: "John Doe",
  title: "I love You to the moon and Backssss!",
  image: "https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",

};

const SecondBook = {
  author: "Ammaya helli",
  title: "mobiles are awesome",
  image: "https://m.media-amazon.com/images/I/51aIDYrc84L._AC_SY200_.jpg",

};
// const author = "John Doe";
// const title = "I love You to the moon and Backssss!"
// const image = "https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL.__AC_SX300_SY300_QL70_FMwebp_.jpg";



function BookList() {
  return (
    <section className="bookList">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis quos dolores omnis excepturi nisi aliquam sed! Itaque, quae quos?</p>
      </Book>
      <Book
        image={SecondBook.image}
        title={SecondBook.title}
        author={SecondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  // console.log(props);
  const { image, title, author, children } = props;
  //destructurning means we just break an object into its small components to to call
  //them easily  { image, title, author:{} }

  return (
    <article className="book">
      <img src={image} />

      <h1>{title}</h1>

      <h4 >{author}</h4>
      {children}

      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}

    </article>
  )
}


ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
