import React, { useState, useEffect } from 'react'
import xml2js from 'xml2js'
import Card from './card'
import './recentBooks.styles.css'

const ToReadBooks = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const parser = xml2js.Parser({ explicitArray: false })
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=96692540&shelf=to-read&sort=avg_rating&per_page=100&key=${process.env.REACT_APP_API_KEY}`,
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
  }, [])
  return (
    <div className="booksContainer">
      {isLoading && <p className="loading">Loading books from Goodreads...</p>}
      <ul>
        {!isLoading &&
          books.map((book, index) => <Card book={book.book} rating={book.book.average_rating} key={index} />)}
      </ul>
    </div>
  )
}

export default ToReadBooks
