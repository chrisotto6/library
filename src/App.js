import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Navigation, RecentBooks, ToReadBooks, HighlyRated } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <RecentBooks />} />
          <Route path="/to-read" exact component={() => <ToReadBooks />} />
          <Route path="/highly-rated" exact component={() => <HighlyRated />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
