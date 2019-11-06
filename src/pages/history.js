import React, { Component, useState } from "react"
import EnigmaEncryptModal from "../modals/enigma-encrypt-modal"
import EnigmaDecryptModal from "../modals/enigma-decrypt-modal"

const History = props => {
  return (
    <div className="history-page-wrapper">
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
      History Page
    </div>
  )
}

export default History
