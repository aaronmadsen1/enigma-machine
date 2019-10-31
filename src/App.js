import React from "react"
// import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles/main.scss"
import Home from "./pages/home"
import History from "./pages/history"
import NavBar from "./components/nav-bar"
// import Icons from "./helpers/icons"

function App() {
  // Icons()
  return (
    <div className="App">
      <Router>
        <div className="app-nav-bar-wrapper">
          <NavBar />
        </div>
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
