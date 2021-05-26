import React from 'react'

const Book = ({ image, title, author }) => {

	return (
		<article className="book" >
			<img src={image} alt="" />
			<h1>{title}</h1>
			<h4 >{author}</h4>
		</article>
	)
}
export default Book
