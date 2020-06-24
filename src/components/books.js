import React, { useState, useEffect } from 'react'
import xml2js from 'xml2js'
import Card from './card'
import './books.styles.css'

const Books = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=96692540&shelf=read&sort=date_read&per_page=200&key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.text())
      .then((response) => {
        xml2js.parseString(response, (err, res) => {
          if (err) console.log(err)
          setBooks(res.GoodreadsResponse.reviews[0].review)
          setIsLoading(false)
        })
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className='booksContainer'>
      {isLoading && (
        <p style={{ color: 'black' }}>Loading books from Goodreads...</p>
      )}
      <ul>
        {!isLoading &&
          books.map((book, index) => (
            <Card book={book.book[0]} rating={book.rating[0]} key={index} />
          ))}
      </ul>
    </div>
  )
}

export default Books
