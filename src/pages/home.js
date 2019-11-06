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
            Welcome to the Enigma Encryption Simulator
          </div>
          <div className="home-welcome-sub-header">
            <div className="sub-header-text">
              <div className="inner-container">
                Here you can not only learn about the history of the Enigma
                Machine and how it works, but you can encrypt messages by
                setting your own initial machine settings that can be retrieved
                later.
              </div>
              <div className="inner-container">
                Just be sure to write down, or take a picture or screenshot of
                the settings or the message will be lost forever. Only the
                excrypted message is saved when you submit it to the cloud, the
                settings are not.
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
