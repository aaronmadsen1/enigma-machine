import React, { Component, useState } from "react"
import EnigmaEncryptModal from "../modals/enigma-encrypt-modal"
import EnigmaDecryptModal from "../modals/enigma-decrypt-modal"
import HowEnigmaWorks from "../images/howEnigmaWorks1.jpg"

const Function = props => {
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
      <div className="function-page-container">
        <div className="content-wrapper">
          <div className="function-welcome-header">
            How does the Enigma Machine work?
          </div>
          <div className="function-welcome-sub-header">
            <div className="sub-header-picture">
              <img src={HowEnigmaWorks} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Function
