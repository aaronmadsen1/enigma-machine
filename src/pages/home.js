import React, { Component, useState } from "react"
import EnigmaEncryptModal from "../modals/enigma-encrypt-modal"

const Home = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModalToggle = e => {
    // e.preventDefault()
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  const handleModalClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="home-page-wrapper">
      <EnigmaEncryptModal
        handleModalToggle={() => handleModalClose} // ?????????
        isOpen={isOpen}
      />
      <button onClick={handleModalToggle}> Im a button</button>
      Hello from Home!
    </div>
  )
}

export default Home
