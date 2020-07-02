import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navigation, RecentBooks } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <RecentBooks />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
