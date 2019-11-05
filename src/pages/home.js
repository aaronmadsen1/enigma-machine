import React, { Component, useState } from "react"
import EnigmaEncryptModal from "../modals/enigma-encrypt-modal"
import EnigmaDecryptModal from "../modals/enigma-decrypt-modal"

const Home = props => {
  return (
    <div className="modal-prop-includer">
      <EnigmaEncryptModal
        handleEncryptModalToggle={props.handleEncryptModalToggle}
        handleDecryptModalToggle={props.handleDecryptModalToggle}
        isEncryptOpen={props.isEncryptOpen}
      />
      <EnigmaDecryptModal
        handleDecryptModalToggle={props.handleDecryptModalToggle}
        handleEncryptModalToggle={props.handleEncryptModalToggle}
        isDecryptOpen={props.isDecryptOpen}
      />

      <div className="home-page-container">hi</div>
    </div>
  )
}

export default Home
