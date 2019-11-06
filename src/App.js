import React, { useState } from "react"
// import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles/main.scss"
import Home from "./pages/home"
// import History from "./pages/history"
import Function from "./pages/function"
import NavBar from "./components/nav-bar"

const App = () => {
  const [isEncryptOpen, setIsEncryptOpen] = useState(true)
  const [isDecryptOpen, setIsDecryptOpen] = useState(false)

  const handleEncryptModalToggle = e => {
    // e.preventDefault()
    setIsEncryptOpen(!isEncryptOpen)
    // console.log(isEncryptOpen)
  }

  const handleDecryptModalToggle = e => {
    // e.preventDefault()
    setIsDecryptOpen(!isDecryptOpen)
    // console.log(isDecryptOpen)
  }

  return (
    <div className="App">
      <Router>
        <div className="app-nav-bar-wrapper">
          <NavBar
            handleEncryptModalToggle={handleEncryptModalToggle}
            handleDecryptModalToggle={handleDecryptModalToggle}
          />
        </div>
        <div className="page-wrapper">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  handleEncryptModalToggle={handleEncryptModalToggle}
                  isEncryptOpen={isEncryptOpen}
                  handleDecryptModalToggle={handleDecryptModalToggle}
                  isDecryptOpen={isDecryptOpen}
                />
              )}
            />
            <Route
              path="/function"
              render={props => (
                <Function
                  {...props}
                  handleEncryptModalToggle={handleEncryptModalToggle}
                  isEncryptOpen={isEncryptOpen}
                  handleDecryptModalToggle={handleDecryptModalToggle}
                  isDecryptOpen={isDecryptOpen}
                />
              )}
            />
            {/* <Route
              path="/history"
              render={props => (
                <History
                  {...props}
                  handleEncryptModalToggle={handleEncryptModalToggle}
                  isEncryptOpen={isEncryptOpen}
                  handleDecryptModalToggle={handleDecryptModalToggle}
                  isDecryptOpen={isDecryptOpen}
                />
              )}
            /> */}
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
