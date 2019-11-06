import React from "react"
import { Link } from "react-router-dom"
import EnigmaLogo from "../images/enigmaLogo.png"

const NavBar = props => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-title-wrapper">
        <img src={EnigmaLogo} />
      </div>
      <div className="nav-links-wrapper">
        <div>
          <Link className="nav-link-button" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="nav-link-button" to="/function">
            How it Works
          </Link>
        </div>
        {/* <div>
          <Link className="nav-link-button" to="/history">
            History
          </Link>
        </div> */}
        <div>
          <Link
            className="nav-link-button"
            onClick={props.handleEncryptModalToggle}
          >
            Encrypt
          </Link>
        </div>
        <div>
          <Link
            className="nav-link-button"
            onClick={props.handleDecryptModalToggle}
          >
            Decrypt
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
