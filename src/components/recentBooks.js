import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from './card'
import './recentBooks.styles.css'

const RecentBooks = () => {
  const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=96692540&shelf=read&sort=date_read&per_page=60&key=${process.env.REACT_APP_API_KEY}`
  const [data, isLoading] = useFetch(url, [])

  return (
    <div className="booksContainer">
      {isLoading && <p className="loading">Loading books from Goodreads...</p>}
      <ul>
        {!isLoading && data.map((book, index) => <Card book={book.book} rating={book.rating} key={index} />)}
      </ul>
    </div>
  )
}

export default RecentBooks
