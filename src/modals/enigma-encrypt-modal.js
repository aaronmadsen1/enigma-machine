import React, { Component, useState, useEffect, useRef } from "react"
import Select from "react-select"
import { Link } from "react-router-dom"
import ReactModal from "react-modal"
import axios from "axios"
import beginEncryption from "../helpers/enigma"
import beginEncryption2 from "../helpers/enigma2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icons from "../helpers/icons"

const EnigmaEncryptModal = props => {
  Icons()
  const [returnedId, setReturnedId] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [encryptedMessage, setEncryptedMessage] = useState("")
  const [encryptedMessageLog, setEncryptedMessageLog] = useState("")

  const [rotorA_position, setRotorA_position] = useState("")
  const [rotorB_position, setRotorB_position] = useState("")
  const [rotorC_position, setRotorC_position] = useState("")
  const [plugboard_initialSetting, setPlugboard_initialSetting] = useState(4)
  const [rotorA_initialSettings, setRotorA_initialSettings] = useState("")
  const [rotorB_initialSettings, setRotorB_initialSettings] = useState("")
  const [rotorC_initialSettings, setRotorC_initialSettings] = useState("")
  const [reflector_initialSetting, setReflector_initialSetting] = useState(8)

  const [numListForRotorSetting, setNumListForRotorSetting] = useState([
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
    { value: 21, label: 21 },
    { value: 22, label: 22 },
    { value: 23, label: 23 },
    { value: 24, label: 24 },
    { value: 25, label: 25 },
    { value: 26, label: 26 },
    { value: 27, label: 27 },
    { value: 28, label: 28 },
    { value: 29, label: 29 },
    { value: 30, label: 30 },
    { value: 31, label: 31 },
    { value: 32, label: 32 },
    { value: 33, label: 33 },
    { value: 34, label: 34 },
    { value: 35, label: 35 },
    { value: 36, label: 36 },
    { value: 37, label: 37 },
    { value: 38, label: 38 },
    { value: 39, label: 39 },
    { value: 40, label: 40 },
    { value: 41, label: 41 },
    { value: 42, label: 42 },
    { value: 43, label: 43 },
    { value: 44, label: 44 },
    { value: 45, label: 45 },
    { value: 46, label: 46 },
    { value: 47, label: 47 },
    { value: 48, label: 48 },
    { value: 49, label: 49 },
    { value: 50, label: 50 },
    { value: 51, label: 51 },
    { value: 52, label: 52 },
    { value: 53, label: 53 },
    { value: 54, label: 54 },
    { value: 55, label: 55 },
    { value: 56, label: 56 },
    { value: 57, label: 57 },
    { value: 58, label: 58 },
    { value: 59, label: 59 },
    { value: 60, label: 60 },
    { value: 61, label: 61 },
    { value: 62, label: 62 },
    { value: 63, label: 63 },
    { value: 64, label: 64 },
    { value: 65, label: 65 },
    { value: 66, label: 66 }
  ])
  const [numListForRotorPosition, setNumListForRotorPosition] = useState([
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 }
  ])

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

  // * * * * * * * * * * API CALLS * * * * * * * * * *

  const returnSubmittedMessageId = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://enigma-machine-backend.herokuapp.com/messages"
      )
      .then(response => {
        console.log(
          "Got All Messages",
          response.data.filter(
            message => message.encryption == encryptedMessageLog
          )[0].id
        )
        setReturnedId(
          response.data.filter(
            message => message.encryption == encryptedMessageLog
          )[0].id
        )
        console.log(returnedId)
      })
      .catch(error => {
        console.log("Error Getting All Messages", error)
      })
  }

  const postMessage = () => {
    if (encryptedMessage === "") {
      return console.log("Please encrypt message before submitting")
    }
    console.log(encryptedMessage)
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://enigma-machine-backend.herokuapp.com/message",
        {
          encryption: encryptedMessage
        }
      )
      .then(response => {
        console.log("Message Posted", response)
        setEncryptedMessageLog(encryptedMessage)
        // setEncryptedMessage(
        //   `Success! Your encrypted message is now stored on the cloud and can be retrieved with the id`
        // )
      })
      .catch(error => {
        console.log("Error Posting Message", error)
      })
  }
  // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ API CALLS ^ ^ ^ ^ ^ ^ ^ ^ ^ ^

  const handleMessageEncrypt = e => {
    setEncryptedMessage(
      beginEncryption2(
        userMessage,
        true,
        rotorA_position,
        rotorB_position,
        rotorC_position,
        plugboard_initialSetting,
        rotorA_initialSettings,
        rotorB_initialSettings,
        rotorC_initialSettings,
        reflector_initialSetting
      )
    )
  }

  useEffect(() => {
    returnSubmittedMessageId()
    setEncryptedMessage("")
    setUserMessage("")
  }, [encryptedMessageLog])

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => {
        // setEncryptModalOpen(false)
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
        <div className="modal-body-App">
          <div className="enigma-settings-container">
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * Rotor Settings * * * * * * * * * * * * * * * * */}
            <div className="rotor-settings-wrapper">
              <div className="rotor-settings-header">
                Initial Rotor Settings
              </div>
              <div className="rotor-settings">
                {/* * * * * * * * * * * * * * * * * * * * * * * * * * Rotor Position * * * * * * * * * * * * * * * * */}
                <div className="rotor-dropdowns-with-title">
                  Rotor Position
                  <div className="rotor-dropdowns">
                    <div className="rotor">
                      <div className="rotor-header">Rotor A</div>
                      <div className="dropdown-list">
                        <Select
                          // value={selectedOption}
                          options={numListForRotorPosition}
                          onChange={e => setRotorA_position(e.value)}
                        />
                      </div>
                    </div>

                    <div className="rotor">
                      <div className="rotor-header">Rotor B</div>
                      <div className="dropdown-list">
                        <Select
                          // value={selectedOption}
                          options={numListForRotorPosition}
                          onChange={e => setRotorB_position(e.value)}
                        />
                      </div>
                    </div>

                    <div className="rotor">
                      <div className="rotor-header">Rotor C</div>
                      <div className="dropdown-list">
                        <Select
                          // value={selectedOption}
                          options={numListForRotorPosition}
                          onChange={e => setRotorC_position(e.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* * * * * * * * * * * * * * * * * * * * * * * * * * Rotor Index * * * * * * * * * * * * * * * * */}
                <div className="rotor-dropdowns-with-title">
                  Rotor Start Index
                  <div className="rotor-dropdowns">
                    <div className="rotor">
                      <div className="rotor-header">Rotor A</div>
                      <div className="dropdown-list">
                        <Select
                          // value={selectedOption}
                          options={numListForRotorSetting}
                          onChange={e => setRotorA_initialSettings(e.value)}
                        />
                      </div>
                    </div>

                    <div className="rotor">
                      <div className="rotor-header">Rotor B</div>
                      <div className="dropdown-list">
                        <Select
                          // value={selectedOption}
                          options={numListForRotorSetting}
                          onChange={e => setRotorB_initialSettings(e.value)}
                        />
                      </div>
                    </div>

                    <div className="rotor">
                      <div className="rotor-header">Rotor C</div>
                      <div className="dropdown-list">
                        <Select
                          // value={selectedOption}
                          options={numListForRotorSetting}
                          onChange={e => setRotorC_initialSettings(e.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* **************************************** */}
              </div>
            </div>
            {/* ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Rotor Settings ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ */}
          </div>
          <div className="modal-text-fields">
            <div className="modal-text-field">
              <div className="char-count">
                Characters remaining: {1000 - userMessage.length}
              </div>
              <textarea
                className="text-field"
                type="text"
                value={userMessage}
                placeholder={"Enter a message up to 1,000 characters"}
                onChange={e => setUserMessage(e.target.value)}
              ></textarea>
              <div className="text-field-sub-buttons">
                <a
                  className="text-submit-button"
                  onClick={handleMessageEncrypt}
                >
                  Encrypt Message
                </a>
                <textarea
                  className="id-field"
                  type="text"
                  placeholder={"id#"}
                  value={returnedId}
                ></textarea>
              </div>
            </div>
            <div className="modal-text-field">
              <textarea
                className="text-field"
                type="text"
                placeholder={"Encrypted message will appear here"}
                value={encryptedMessage}
              ></textarea>
              <div className="text-field-sub-buttons">
                <a className="text-submit-button" onClick={postMessage}>
                  Submit Encrtypted Message to Cloud
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

export default EnigmaEncryptModal
