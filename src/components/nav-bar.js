import React from "react"
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-title-wrapper">Enigma Machine</div>
      <div className="nav-links-wrapper">
        <div>
          <Link className="nav-link-button" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="nav-link-button" to="/history">
            History
          </Link>
        </div>
        <div>
          <Link className="nav-link-button" to="/history">
            History
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
