import React, { Component, useState } from "react"
import EnigmaEncryptModal from "../modals/enigma-encrypt-modal"
import EnigmaDecryptModal from "../modals/enigma-decrypt-modal"

import EnigmaMachine1 from "../images/enigmaMachine1.png"

const Home = props => {
  return (
    <div className="modal-prop-includer">
      <div>
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
      </div>
      <div className="home-page-container">
        <div className="content-wrapper">
          <div className="home-welcome-header">
            <div className="home-welcome-header-text">
              Welcome to the Enigma Encryption Simulator
            </div>
          </div>
          <div className="home-welcome-sub-header">
            <div className="sub-header-text">
              <div className="inner-container">
                The best way to learn something is to do it.
              </div>
              <div className="inner-container">
                Here, you can encrypt, and submit messages to the cloud by
                setting your own initial Enigma Machine settings. You can later
                retrieve the message, using the message ID provided upon
                submission, and decrypt it.
              </div>
              <div className="inner-container">
                Just be sure to write down, or take a picture or screenshot of
                the settings or your message will remain gibberish forever. Only
                the excrypted message is saved when you submit it to the cloud,
                the settings are not.
              </div>
            </div>
            <div className="sub-header-picture">
              <img src={EnigmaMachine1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
