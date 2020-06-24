import React from 'react'
import Books from './components/books'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Goodreads Books</header>
      <p>
        These are all of my recently read books on Goodreads. Most recent at the
        top, along with ratings and links out to the Goodreads book's page. This
        application was made using the Goodreads API.
      </p>
      <Books />
    </div>
  )
}

export default App
