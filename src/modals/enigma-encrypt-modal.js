import React, { Component, useState, useEffect, useRef } from "react"
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
  // const [encryptModalOpen, setEncryptModalOpen] = useState(true)

  const [showRotorADropdown, setShowRotorADropdown] = useState(false)
  const [showRotorBDropdown, setShowRotorBDropdown] = useState(false)
  const [showRotorCDropdown, setShowRotorCDropdown] = useState(false)

  const [rotorA_position, setRotorA_position] = useState(1)
  const [rotorB_position, setRotorB_position] = useState(2)
  const [rotorC_position, setRotorC_position] = useState(3)
  const [plugboard_initialSetting, setPlugboard_initialSetting] = useState(4)
  const [rotorA_initialSettings, setRotorA_initialSettings] = useState(5)
  const [rotorB_initialSettings, setRotorB_initialSettings] = useState(6)
  const [rotorC_initialSettings, setRotorC_initialSettings] = useState(7)
  const [reflector_initialSetting, setReflector_initialSetting] = useState(8)

  const numListForRotorSetting = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66
  ]

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

  const handleRotorASetting = rotorASetting => {
    setRotorA_initialSettings(rotorASetting)
    handleRotorASettingsDropdown()
  }
  const handleRotorBSetting = rotorBSetting => {
    setRotorB_initialSettings(rotorBSetting)
    handleRotorBSettingsDropdown()
  }
  const handleRotorCSetting = rotorCSetting => {
    setRotorC_initialSettings(rotorCSetting)
    handleRotorCSettingsDropdown()
  }

  const handleRotorASettingsDropdown = () => {
    if (showRotorADropdown === false) {
      setShowRotorADropdown(true)
      setShowRotorBDropdown(false)
      setShowRotorCDropdown(false)
    } else {
      setShowRotorADropdown(false)
    }
  }
  const handleRotorBSettingsDropdown = () => {
    if (showRotorBDropdown === false) {
      setShowRotorADropdown(false)
      setShowRotorBDropdown(true)
      setShowRotorCDropdown(false)
    } else {
      setShowRotorBDropdown(false)
    }
  }
  const handleRotorCSettingsDropdown = () => {
    if (showRotorCDropdown === false) {
      setShowRotorADropdown(false)
      setShowRotorBDropdown(false)
      setShowRotorCDropdown(true)
    } else {
      setShowRotorCDropdown(false)
    }
  }

  // const closeAllDropdowns = e => {
  //   // if ()

  //   setShowRotorADropdown(false)
  //   setShowRotorBDropdown(false)
  //   setShowRotorCDropdown(false)
  // }

  useEffect(() => {
    returnSubmittedMessageId()
    setEncryptedMessage("")
    setUserMessage("")
  }, [encryptedMessageLog])

  // const node = useRef()
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick)
  //   }
  // }, [])

  // const handleClick = e => {
  //   if (encryptModalOpen === false) {
  //     console.log("false", encryptModalOpen)
  //   } else {
  //     if (node.current.contains(e.target)) {
  //       return
  //     }
  //     console.log("true", encryptModalOpen)
  //     setShowRotorADropdown(false)
  //     setShowRotorBDropdown(false)
  //     setShowRotorCDropdown(false)
  //   }
  // }

  // useEffect(() => {
  //   setEncryptModalOpen(true)
  // }, [])

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
            <div
              // ref={node}
              className="rotor-settings-wrapper"
            >
              <div className="rotor-settings-header">
                Initial Rotor Settings
              </div>
              <div className="rotor">
                <div className="rotor-header">Rotor A</div>
                <div className="dropdown-list">
                  {showRotorADropdown ? (
                    <div className="show-my-list">
                      {numListForRotorSetting.map(item => (
                        // <a> {item}</a>
                        <button onClick={e => handleRotorASetting(item)}>
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div
                      onClick={handleRotorASettingsDropdown}
                      className="hide-my-list"
                    >
                      {rotorA_initialSettings}
                    </div>
                  )}

                  <button
                    className="dropdown-arrow"
                    onClick={handleRotorASettingsDropdown}
                  >
                    <FontAwesomeIcon icon="sort-down"></FontAwesomeIcon>{" "}
                  </button>
                </div>
              </div>
              <div className="rotor">
                <div className="rotor-header">Rotor B</div>

                <div className="dropdown-list">
                  {showRotorBDropdown ? (
                    <div className="show-my-list">
                      {numListForRotorSetting.map(item => (
                        // <a> {item}</a>
                        <button onClick={e => handleRotorBSetting(item)}>
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div
                      onClick={handleRotorBSettingsDropdown}
                      className="hide-my-list"
                    >
                      {rotorB_initialSettings}
                    </div>
                  )}

                  <button
                    className="dropdown-arrow"
                    onClick={handleRotorBSettingsDropdown}
                  >
                    <FontAwesomeIcon icon="sort-down"></FontAwesomeIcon>{" "}
                  </button>
                </div>
              </div>
              <div className="rotor">
                <div className="rotor-header">Rotor C</div>

                <div className="dropdown-list">
                  {showRotorCDropdown ? (
                    <div className="show-my-list">
                      {numListForRotorSetting.map(item => (
                        // <a> {item}</a>
                        <button onClick={e => handleRotorCSetting(item)}>
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div
                      onClick={handleRotorCSettingsDropdown}
                      className="hide-my-list"
                    >
                      {rotorC_initialSettings}
                    </div>
                  )}

                  <button
                    className="dropdown-arrow"
                    onClick={handleRotorCSettingsDropdown}
                  >
                    <FontAwesomeIcon icon="sort-down"></FontAwesomeIcon>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Rotor Settings ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ */}
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
