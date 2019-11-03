import React, { Component, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactModal from "react-modal"

const EnigmaDecryptModal = props => {
  return (
    <ReactModal
      onRequestClose={() => {
        props.handleDecryptModalToggle()
      }}
      isOpen={props.isDecryptOpen}
    >
      <h1>I'm the Decpypt modal</h1>
      <button onClick={props.handleDecryptModalToggle}>close</button>
    </ReactModal>
  )
}

export default EnigmaDecryptModal
