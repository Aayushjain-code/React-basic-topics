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
//created a simple list
const names = ['john', 'peter', 'susan'];
//mapping the object in h1
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>
});
console.log(newNames);


function BookList() {
  return (
    <section className="bookList">
      {/* {names} */}
      {newNames}
    </section>
  )
}

const Book = (props) => {
  // console.log(props);
  const { image, title, author } = props;
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
