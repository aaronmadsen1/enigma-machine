import React, { Component, useState, useEffect, useRef } from "react"
import Select from "react-select"
import { Link } from "react-router-dom"
import ReactModal from "react-modal"
import axios from "axios"
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
  const [rotorA_initialSettings, setRotorA_initialSettings] = useState("")
  const [rotorB_initialSettings, setRotorB_initialSettings] = useState("")
  const [rotorC_initialSettings, setRotorC_initialSettings] = useState("")
  const [reflector_initialSetting, setReflector_initialSetting] = useState(0)

  const [plugboard_initialSetting, setPlugboard_initialSetting] = useState(0)
  const [plugboardLetter_1a, setPlugboardLetter_1a] = useState("")
  const [plugboardLetter_2a, setPlugboardLetter_2a] = useState("")
  const [plugboardLetter_1b, setPlugboardLetter_1b] = useState("")
  const [plugboardLetter_2b, setPlugboardLetter_2b] = useState("")
  const [plugboardLetter_3a, setPlugboardLetter_3a] = useState("")
  const [plugboardLetter_3b, setPlugboardLetter_3b] = useState("")
  const [plugboardLetter_4a, setPlugboardLetter_4a] = useState("")
  const [plugboardLetter_4b, setPlugboardLetter_4b] = useState("")
  const [plugboardLetter_5a, setPlugboardLetter_5a] = useState("")
  const [plugboardLetter_5b, setPlugboardLetter_5b] = useState("")
  const [plugboardLetter_6a, setPlugboardLetter_6a] = useState("")
  const [plugboardLetter_6b, setPlugboardLetter_6b] = useState("")
  const [plugboardLetter_7a, setPlugboardLetter_7a] = useState("")
  const [plugboardLetter_7b, setPlugboardLetter_7b] = useState("")
  const [plugboardLetter_8a, setPlugboardLetter_8a] = useState("")
  const [plugboardLetter_8b, setPlugboardLetter_8b] = useState("")
  const [plugboardLetter_9a, setPlugboardLetter_9a] = useState("")
  const [plugboardLetter_9b, setPlugboardLetter_9b] = useState("")
  const [plugboardLetter_10a, setPlugboardLetter_10a] = useState("")
  const [plugboardLetter_10b, setPlugboardLetter_10b] = useState("")

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

  const [
    alphatbetListforPlugboardSettings,
    setAlphatbetListforPlugboardSettings
  ] = useState([
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "F", label: "F" },
    { value: "G", label: "G" },
    { value: "H", label: "H" },
    { value: "I", label: "I" },
    { value: "J", label: "J" },
    { value: "K", label: "K" },
    { value: "L", label: "L" },
    { value: "M", label: "M" },
    { value: "N", label: "N" },
    { value: "O", label: "O" },
    { value: "P", label: "P" },
    { value: "Q", label: "Q" },
    { value: "R", label: "R" },
    { value: "S", label: "S" },
    { value: "T", label: "T" },
    { value: "U", label: "U" },
    { value: "V", label: "V" },
    { value: "W", label: "W" },
    { value: "X", label: "X" },
    { value: "Y", label: "Y" },
    { value: "Z", label: "Z" }
  ])

  const [numListForRotorPosition, setNumListForRotorPosition] = useState([
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 }
  ])

  const bkgImg = require("../images/darkWood.jpg")

  const [modalCustomStyles] = useState({
    content: {
      top: "5%",
      bottom: "3%",
      left: "2%",
      right: "2%",
      marginRight: "0%",
      transform: "translate(0%, 0%)",
      // backgroundColor: "rgba(45, 45, 45)",
      backgroundImage: "url(" + bkgImg + ")",
      boxShadow: "inset 0px 0px 300px 100px rgba(0, 0, 0, .7)"
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
      width: "85px",
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
      color: "rgb(205, 225, 227)",
      display: "inherit !important"
    })
  }

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
        // alert(
        //   "Stormy weather somewhere maybe.. But we're having trouble retrieving your message. Please wait a sec and try again."
        // )
        // alert("Error Getting All Messages", error)
      })
  }

  const postMessage = () => {
    if (encryptedMessage === "") {
      return alert("Please encrypt message before submitting")
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
        alert(
          "SUCCESS! Now don't forget to write down the settings and the Message ID#"
        )
        setEncryptedMessageLog(encryptedMessage)
        // setEncryptedMessage(
        //   `Success! Your encrypted message is now stored on the cloud and can be retrieved with the id`
        // )
      })
      .catch(error => {
        console.log("Error Posting Message", error)
        alert("Error Posting Message", error)
      })
  }
  // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ API CALLS ^ ^ ^ ^ ^ ^ ^ ^ ^ ^

  const plugboardSwap = [
    plugboardLetter_1a,
    plugboardLetter_1b,
    plugboardLetter_2a,
    plugboardLetter_2b,
    plugboardLetter_3a,
    plugboardLetter_3b,
    plugboardLetter_4a,
    plugboardLetter_4b,
    plugboardLetter_5a,
    plugboardLetter_5b,
    plugboardLetter_6a,
    plugboardLetter_6b,
    plugboardLetter_7a,
    plugboardLetter_7b,
    plugboardLetter_8a,
    plugboardLetter_8b,
    plugboardLetter_9a,
    plugboardLetter_9b,
    plugboardLetter_10a,
    plugboardLetter_10b
  ]

  const handleMessageEncrypt = e => {
    if (
      rotorA_position === "" ||
      rotorB_position === "" ||
      rotorC_position === "" ||
      rotorA_initialSettings === "" ||
      rotorB_initialSettings === "" ||
      rotorC_initialSettings === "" ||
      plugboardLetter_1a === "" ||
      plugboardLetter_1b === "" ||
      plugboardLetter_2a === "" ||
      plugboardLetter_2b === "" ||
      plugboardLetter_3a === "" ||
      plugboardLetter_3b === "" ||
      plugboardLetter_4a === "" ||
      plugboardLetter_4b === "" ||
      plugboardLetter_5a === "" ||
      plugboardLetter_5b === "" ||
      plugboardLetter_6a === "" ||
      plugboardLetter_6b === "" ||
      plugboardLetter_7a === "" ||
      plugboardLetter_7b === "" ||
      plugboardLetter_8a === "" ||
      plugboardLetter_8b === "" ||
      plugboardLetter_9a === "" ||
      plugboardLetter_9b === "" ||
      plugboardLetter_1a === "" ||
      plugboardLetter_1b === ""
    ) {
      alert("Please choose all initial settings before encrypting")
    } else {
      if (userMessage === "") {
        alert("It appears there is no message to encrypt")
      } else {
        setEncryptedMessage(
          beginEncryption2(
            userMessage,
            true,
            rotorA_position,
            rotorB_position,
            rotorC_position,
            plugboardSwap,
            plugboard_initialSetting,
            rotorA_initialSettings,
            rotorB_initialSettings,
            rotorC_initialSettings,
            reflector_initialSetting
          )
        )
      }
    }
  }

  const handleFilterPlugboardList = value => {
    let i = 0
    for (let i = 0; i < alphatbetListforPlugboardSettings.length; i++) {
      if (alphatbetListforPlugboardSettings[i].value == value) {
        return alphatbetListforPlugboardSettings.splice(i, 1)
      }
    }
  }

  const handleFilterRotorPositionList = value => {
    let i = 0
    for (let i = 0; i < numListForRotorPosition.length; i++) {
      if (numListForRotorPosition[i].value == value) {
        return numListForRotorPosition.splice(i, 1)
      }
    }
  }

  const handleModalSwitch = () => {
    props.handleEncryptModalToggle()
    props.handleDecryptModalToggle()
  }

  useEffect(() => {
    returnSubmittedMessageId()
    setEncryptedMessage("")
    setUserMessage("")
  }, [encryptedMessageLog])

  return (
    <ReactModal
      style={modalCustomStyles}
      onRequestClose={() => {
        // setEncryptModalOpen(false)
        props.handleEncryptModalToggle()
      }}
      isOpen={props.isEncryptOpen}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            Enigma Encryption
            <div className="link-to-other-modal">
              <Link className="nav-link-button" onClick={handleModalSwitch}>
                Decryption Module
              </Link>
            </div>
          </div>
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
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * Plugboard Settings * * * * * * * * * * * * * * * * */}
            <div className="rotor-settings-wrapper">
              <div className="rotor-settings-header initial-plugboard-settings-title">
                Initial Plugboard Settings
              </div>
              <div className="rotor-settings">
                {/* * * * * * * * * * * * * * * * * * * * * * * * * * Plugboard Choices * * * * * * * * * * * * * * * * */}
                <div className="rotor-dropdowns-with-title">
                  <div className="plugboard-dropdowns">
                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 1</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={plugboardLetter_1a}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_1a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_1a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_1b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_1b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 2</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_2a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_2a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_2b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_2b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 3</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_3a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_3a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_3b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_3b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 4</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_4a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_4a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_4b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_4b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 5</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_5a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_5a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_5b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_5b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 6</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_6a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_6a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_6b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_6b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 7</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_7a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_7a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_7b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_7b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 8</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_8a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_8a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_8b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_8b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 9</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_9a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_9a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_9b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_9b
                          )}
                        />
                      </div>
                    </div>

                    <div className="plug-pair">
                      <div className="plug-pair-header">Wire 10</div>
                      <div className="dropdown-list">
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_10a(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_10a
                          )}
                        />
                        <div className="double-arrow-icon">
                          <FontAwesomeIcon icon="arrows-alt-v" />
                        </div>
                        <Select
                          styles={dropdownCustomStyles}
                          // value={selectedOption}
                          options={alphatbetListforPlugboardSettings}
                          onChange={e => setPlugboardLetter_10b(e.value)}
                          onClick={handleFilterPlugboardList(
                            plugboardLetter_10b
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* **************************************** */}
              </div>
            </div>
            {/* ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ Plugboard Settings ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ */}

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
                          onClick={handleFilterRotorPositionList(
                            rotorA_position
                          )}
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
                          onClick={handleFilterRotorPositionList(
                            rotorB_position
                          )}
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
                          onClick={handleFilterRotorPositionList(
                            rotorC_position
                          )}
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
                  placeholder={"Message ID#"}
                  value={returnedId}
                ></textarea>
              </div>
            </div>
            <div className="modal-text-field added-padding-top">
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
