import React, { useState, useEffect } from 'react'
import xml2js from 'xml2js'
import Card from './card'
import './books.styles.css'

const Books = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const parser = xml2js.Parser({ explicitArray: false })

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=96692540&shelf=read&sort=date_read&per_page=60&key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.text())
      .then((response) => {
        parser.parseString(response, (err, res) => {
          if (err) console.log(err)
          setBooks(res.GoodreadsResponse.reviews.review)
          setIsLoading(false)
        })
      })
      .catch((error) => console.log(error))
  }, [parser])
  return (
    <div className='booksContainer'>
      {isLoading && <p className='loading'>Loading books from Goodreads...</p>}
      <ul>
        {!isLoading && console.log(books)}
        {!isLoading &&
          books.map((book, index) => (
            <Card book={book.book} rating={book.rating} key={index} />
          ))}
      </ul>
    </div>
  )
}

export default Books
