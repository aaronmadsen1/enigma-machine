import React, { Component, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactModal from "react-modal"
import axios from "axios"
import beginEncryption from "../helpers/enigma"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icons from "../helpers/icons"

const EnigmaEncryptModal = props => {
  Icons()
  const [messageId, setMessageId] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [encryptedMessage, setEncryptedMessage] = useState("")

  const [customStyles] = useState({
    content: {
      top: "8%",
      bottom: "5%",
      left: "5%",
      right: "5%",
      marginRight: "0%",
      transform: "translate(0%, 0%)"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.64)"
      // boxShadow: "5px 5px 8px 4px rgba(0, 0, 0, 0.84)"
    }
  })

  const getMessage = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://enigma-machine-backend.herokuapp.com/message/${messageId}`
      )
      .then(response => {
        console.log("Got Message", response)
        setUserMessage(response.data.encryption)
      })
      .catch(error => {
        console.log("Error Getting Message", error)
      })
  }

  const deleteMessage = () => {
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/https://enigma-machine-backend.herokuapp.com/message/${messageId}`
      )
      .then(response => {
        console.log("Message Deleted", response)
        setMessageId("")
        setUserMessage("")
      })
      .catch(error => {
        console.log("Error Deleting Message", error)
      })
  }

  const handleMessageEncrypt = e => {
    setEncryptedMessage(beginEncryption(userMessage, true))
  }

  // useEffect(() => {
  //   setEncryptedMessage(beginEncryption("Fuck you dude!", true))
  //   console.log(encryptedMessage)
  // }, [encryptedMessage])

  console.log(messageId)

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => {
        props.handleEncryptModalToggle()
      }}
      isOpen={props.isEncryptOpen}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">Enigma Encryption</div>
          <div className="close-icon">
            <a
              className="close-modal-button"
              onClick={props.handleEncryptModalToggle}
            >
              <FontAwesomeIcon icon="times" />
            </a>
          </div>
        </div>
        <div className="modal-body-wrapper">
          <div className="enigma-settings-container">
            these are the settings
          </div>

          <div className="modal-text-fields">
            <textarea
              className="text-field"
              type="text"
              placeholder={"Enter a message up to 1,000 characters to encrypt"}
              onChange={e => setUserMessage(e.target.value)}
            ></textarea>
            <a className="text-submit-button" onClick={handleMessageEncrypt}>
              Encrypt Message
            </a>
            <a className="text-submit-button" onClick={getMessage}>
              Get Message
            </a>
            <a className="text-submit-button" onClick={deleteMessage}>
              Delete Message
            </a>
            <input
              type="text"
              placeholder="message ID"
              value={messageId}
              onChange={e => setMessageId(e.target.value)}
            />

            <textarea
              className="text-field"
              type="text"
              placeholder={"Encrypted / decrypted message will appear here"}
              value={encryptedMessage}
            ></textarea>
            <a className="text-submit-button">Submit to Cloud</a>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

export default EnigmaEncryptModal
