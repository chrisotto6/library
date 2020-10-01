import React from 'react'
import useFetch from '../hooks/useFetch'

const Stats = (props) => {
  const { year } = props

  const url = `https://cotto-cors.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=96692540&shelf=read&sort=date_read&read_at=${year}&per_page=200&${process.env.REACT_APP_API_KEY}`
  const [data, isLoading] = useFetch(url, [])
  const totalBooks = data.length
  let totalPages = 0
  let longestBook = ''
  let longestPages = 0
  let shortestBook = ''
  let shortestPages = 1000

  // eslint-disable-next-line
  data.map((book) => {
    totalPages += book.book.num_pages
    if (longestPages < book.book.num_pages) {
      longestBook = book.book.title_without_series
      longestPages = book.book.num_pages
    }
    if (shortestPages > book.book.num_pages) {
      shortestBook = book.book.title_without_series
      shortestPages = book.book.num_pages
    }
  })

  const averagePages = totalPages / totalBooks

  return (
    <div className="statsContainer" data-year={year}>
      <h2>{year}</h2>
      {isLoading && <p className="loading">Loading data from Goodreads...</p>}

      {!isLoading && (
        <table class="table">
          <tbody>
            <tr>
              <td>Total Books</td>
              <td>{totalBooks}</td>
            </tr>
            <tr>
              <td>Total Pages</td>
              <td>{totalPages}</td>
            </tr>
            <tr>
              <td>Average Pages</td>
              <td>{averagePages}</td>
            </tr>
            <tr>
              <td>Shortest Book</td>
              <td>
                {shortestBook}: {shortestPages} pages
              </td>
            </tr>
            <tr>
              <td>Longest Book</td>
              <td>
                {longestBook}: {longestPages} pages
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Stats
