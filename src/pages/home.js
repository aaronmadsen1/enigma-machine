import React, { Component, useState } from "react"
import EnigmaEncryptModal from "../modals/enigma-encrypt-modal"
import EnigmaDecryptModal from "../modals/enigma-decrypt-modal"

const Home = props => {
  return (
    <div className="home-page-wrapper">
      <EnigmaEncryptModal
        handleEncryptModalToggle={props.handleEncryptModalToggle}
        isEncryptOpen={props.isEncryptOpen}
      />
      <EnigmaDecryptModal
        handleDecryptModalToggle={props.handleDecryptModalToggle}
        isDecryptOpen={props.isDecryptOpen}
      />
      Home Page
    </div>
  )
}

export default Home
