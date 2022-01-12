import React from 'react'
import { Stats, PreviousYearStats } from '../components'

const RecentBooks = () => {
  return (
    <>
      <Stats year="2022" />
      <PreviousYearStats
        year="2021"
        totalBooks="221"
        totalPages="52699"
        longestBook="Oathbringer"
        longestPages="1248"
        shortestBook="Cable and Deadpool #17"
        shortestPages="20"
        averagePages="238"
      />
      <PreviousYearStats
        year="2020"
        totalBooks="219"
        totalPages="57171"
        longestBook="Harry Potter and the Order of the Phoenix"
        longestPages="870"
        shortestBook="Raised by Wolves #1"
        shortestPages="9"
        averagePages="261"
      />
      <PreviousYearStats
        year="2019"
        totalBooks="70"
        totalPages="15479"
        longestBook="American Gods"
        longestPages="674"
        shortestBook="Deadpool Kills Deadpool"
        shortestPages="1"
        averagePages="221"
      />
    </>
  )
}

export default RecentBooks
