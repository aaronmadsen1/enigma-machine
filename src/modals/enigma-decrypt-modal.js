import React, { Component, useState, useEffect } from "react"
import Select from "react-select"
import { Link } from "react-router-dom"
import ReactModal from "react-modal"
import axios from "axios"
// import beginEncryption from "../helpers/enigma"
import beginEncryption2 from "../helpers/enigma2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icons from "../helpers/icons"

const EnigmaDecryptModal = props => {
  Icons()
  const [messageId, setMessageId] = useState("")
  const [encryptedMessage, setEncryptedMessage] = useState("")
  const [decryptedMessage, setDecryptedMessage] = useState("")

  const [showRotorADropdown, setShowRotorADropdown] = useState(false)
  const [showRotorBDropdown, setShowRotorBDropdown] = useState(false)
  const [showRotorCDropdown, setShowRotorCDropdown] = useState(false)

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

  const [modalCustomStyles] = useState({
    content: {
      top: "5%",
      bottom: "5%",
      left: "5%",
      right: "5%",
      marginRight: "0%",
      transform: "translate(0%, 0%)",
      backgroundColor: "rgba(45, 45, 45)",
      boxShadow: "inset 0px 0px 300px 100px rgba(0, 0, 0, .5)"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.64)"
      // boxShadow: "5px 5px 8px 4px rgba(0, 0, 0, 0.84)"
    }
  })

  const dropdownCustomStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: "1px solid gray",
      // color: "white",
      color: "rgb(205, 225, 227)",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected
        ? "rgba(0,0,0,.7)"
        : "rgba(100, 100, 100)",
      boxShadow: state.isSelected
        ? "white"
        : "2px 2px 4px 2px rgba(0, 0, 0, 0.44)"
    }),
    control: provided => ({
      ...provided,
      // backgroundColor: "rgba(100, 100, 100)",
      width: "100px",
      border: "none",
      boxShadow: "1.5px 1.5px 4px 1px rgba(0, 0, 0, 0.64)",
      boxShadow: "inset 0px 0px 28px 16px rgba(0, 0, 0, 1)"
    }),
    placeholder: provided => ({
      ...provided,
      color: "rgb(205, 225, 227)",
      fontSize: ".7em"
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: "rgb(205, 225, 227)"
    }),
    singleValue: provided => ({
      ...provided,
      color: "rgb(205, 225, 227)"
    })
    // option: provided => ({
    //   ...provided,
    //   color: "white"
    // })
  }

  // * * * * * * * * * * API CALLS * * * * * * * * * *
  const getMessage = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://enigma-machine-backend.herokuapp.com/message/${messageId}`
      )
      .then(response => {
        console.log("Got Message", response)
        setEncryptedMessage(response.data.encryption)
        setDecryptedMessage("")
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
        setEncryptedMessage("")
        setDecryptedMessage("")
      })
      .catch(error => {
        console.log("Error Deleting Message", error)
      })
  }
  // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ API CALLS ^ ^ ^ ^ ^ ^ ^ ^ ^ ^

  const handleMessageDecrypt = e => {
    setDecryptedMessage(
      beginEncryption2(
        encryptedMessage,
        false,
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

  return (
    <ReactModal
      style={modalCustomStyles}
      onRequestClose={() => {
        props.handleDecryptModalToggle()
      }}
      isOpen={props.isDecryptOpen}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">Enigma Decryption</div>
          <div className="close-icon">
            <a
              className="close-modal-button"
              onClick={props.handleDecryptModalToggle}
            >
              <FontAwesomeIcon icon="times" />
            </a>
          </div>
        </div>
        <div className="modal-body-wrapper">
          <div className="enigma-settings-container">
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * Rotor Settings * * * * * * * * * * * * * * * * */}
            <div className="rotor-settings-wrapper">
              <div className="rotor-settings-header">
                Initial Rotor Settings
              </div>
              <div className="rotor-settings">
                {/* * * * * * * * * * * * * * * * * * * * * * * * * * Rotor Position * * * * * * * * * * * * * * * * */}
                <div className="rotor-dropdowns-with-title">
                  <div className="rotor-title">Rotor Position</div>
                  <div className="rotor-dropdowns">
                    <div className="rotor">
                      <div className="rotor-header">Rotor A</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
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
                          styles={dropdownCustomStyles}
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
                          styles={dropdownCustomStyles}
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
                  <div className="rotor-title">Rotor Start Index</div>
                  <div className="rotor-dropdowns">
                    <div className="rotor">
                      <div className="rotor-header">Rotor A</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
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
                          styles={dropdownCustomStyles}
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
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={numListForRotorSetting}
                          onChange={e => setRotorC_initialSettings(e.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-text-fields">
            <div className="modal-text-field">
              <textarea
                className="text-field"
                type="text"
                placeholder='Enter message ID and click "Get Encrypted Message"'
                value={encryptedMessage}
              ></textarea>
              <div className="text-field-sub-buttons">
                <textarea
                  className="id-field"
                  type="text"
                  placeholder="Enter ID"
                  value={messageId}
                  onChange={e => setMessageId(e.target.value)}
                />
                <a className="text-submit-button" onClick={getMessage}>
                  Get Encrypted Message
                </a>
                <a
                  className="text-submit-button"
                  onClick={handleMessageDecrypt}
                >
                  Decrypt Message
                </a>
              </div>
            </div>
            <div className="modal-text-field">
              <textarea
                className="text-field"
                type="text"
                placeholder="Decrypted message will appear here"
                value={decryptedMessage}
              ></textarea>
              <div className="text-field-sub-buttons">
                <a className="text-submit-button" onClick={deleteMessage}>
                  Delete Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

export default EnigmaDecryptModal
