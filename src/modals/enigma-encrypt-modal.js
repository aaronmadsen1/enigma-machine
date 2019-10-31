import React, { Component, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactModal from "react-modal"

const EnigmaEncryptModal = props => {
  return (
    <ReactModal
      onRequestClose={() => {
        props.handleModalClose()
      }}
      isOpen={props.isOpen}
    >
      <h1>I'm in a modal</h1>
      {/* <button>onClick={setIsShowing(!isShowing)}</button> */}
    </ReactModal>
  )
}

export default EnigmaEncryptModal
