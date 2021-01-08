import React from 'react'
import './stats.styles.css'

const PreviousYearStats = (props) => {
  const {
    year,
    totalBooks,
    totalPages,
    longestBook,
    longestPages,
    shortestBook,
    shortestPages,
    averagePages,
  } = props

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="statsContainer" data-year={year}>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
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
            <td>{numberWithCommas(totalPages)} pages</td>
          </tr>
          <tr>
            <td>Average Pages</td>
            <td>{averagePages} pages</td>
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
    </div>
  )
}

export default PreviousYearStats
