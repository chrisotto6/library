import React from 'react'
import useFetch from '../hooks/useFetch'

const Stats = (props) => {
  const { year } = props

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const url = `https://cotto-cors.herokuapp.com/https://www.goodreads.com/review/list?v=2&id=96692540&shelf=read&sort=date_read&read_at=${year}&per_page=200&key=${process.env.REACT_APP_API_KEY}`
  const [data, isLoading] = useFetch(url, [])
  const totalBooks = data.length
  let longestBook = ''
  let shortestBook = ''
  let totalPages = 0
  let longestPages = 0
  let shortestPages = 1000

  // eslint-disable-next-line
  data.map((book) => {
    totalPages += Number(book.book.num_pages)
    if (longestPages < book.book.num_pages) {
      longestBook = book.book.title
      longestPages = Number(book.book.num_pages)
    }
    if (shortestPages > book.book.num_pages) {
      shortestBook = book.book.title
      shortestPages = Number(book.book.num_pages)
    }
  })

  const averagePages = totalPages / totalBooks

  return (
    <div className="statsContainer" data-year={year}>
      {isLoading && <p className="loading">Loading data from Goodreads...</p>}

      {!isLoading && (
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">{year}</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Books</td>
              <td>{totalBooks}</td>
            </tr>
            <tr>
              <td>Total Pages</td>
              <td>{numberWithCommas(totalPages)}</td>
            </tr>
            <tr>
              <td>Average Pages</td>
              <td>{Math.floor(averagePages)}</td>
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
