const beginEncryption2 = (
  userCharMessage,
  encrypting,
  rotorA_position,
  rotorB_position,
  rotorC_position,
  plugboard_initialSetting,
  rotorA_initialSettings,
  rotorB_initialSettings,
  rotorC_initialSettings,
  reflector_initialSetting
) => {
  const numbersList = [
    0,
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
    65
  ]

  const alphabetList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    ";",
    ":",
    '"',
    "'",
    "[",
    "]",
    "{",
    "}",
    "|",
    "!",
    "@",
    "#",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    " ",
    "~"
  ]

  const plugboardList = [
    23,
    26,
    18,
    24,
    11,
    63,
    21,
    28,
    43,
    6,
    45,
    50,
    42,
    51,
    14,
    25,
    56,
    65,
    32,
    33,
    30,
    10,
    61,
    27,
    62,
    49,
    52,
    64,
    39,
    7,
    2,
    37,
    54,
    13,
    59,
    60,
    15,
    36,
    58,
    34,
    5,
    31,
    9,
    38,
    12,
    17,
    55,
    53,
    44,
    40,
    48,
    1,
    22,
    8,
    46,
    0,
    35,
    3,
    19,
    47,
    4,
    57,
    16,
    20,
    29,
    41
  ]

  const reflectorList = [
    47,
    38,
    53,
    35,
    8,
    19,
    57,
    26,
    60,
    20,
    18,
    22,
    37,
    15,
    36,
    17,
    61,
    32,
    50,
    11,
    28,
    62,
    52,
    4,
    14,
    9,
    1,
    63,
    45,
    49,
    7,
    64,
    23,
    55,
    30,
    6,
    58,
    46,
    42,
    27,
    16,
    12,
    2,
    25,
    51,
    43,
    33,
    31,
    5,
    48,
    34,
    65,
    41,
    40,
    24,
    54,
    56,
    3,
    59,
    21,
    13,
    39,
    44,
    0,
    29,
    10
  ]

  const rotorsIn = [
    [
      0,
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
      65
    ],
    [
      0,
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
      65
    ],
    [
      0,
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
      65
    ]
  ]

  const rotorsOut = [
    [
      25,
      35,
      49,
      32,
      6,
      56,
      16,
      54,
      65,
      3,
      30,
      14,
      64,
      17,
      23,
      24,
      42,
      22,
      10,
      20,
      7,
      19,
      2,
      15,
      51,
      12,
      45,
      48,
      4,
      57,
      47,
      27,
      13,
      0,
      59,
      44,
      9,
      18,
      50,
      31,
      39,
      8,
      26,
      37,
      55,
      21,
      62,
      60,
      53,
      29,
      38,
      1,
      58,
      46,
      63,
      40,
      52,
      33,
      5,
      43,
      36,
      34,
      28,
      11,
      61,
      41
    ],
    [
      15,
      11,
      55,
      49,
      26,
      19,
      13,
      32,
      30,
      52,
      54,
      58,
      8,
      10,
      41,
      3,
      6,
      64,
      40,
      39,
      17,
      62,
      5,
      33,
      42,
      34,
      7,
      36,
      18,
      48,
      1,
      37,
      57,
      38,
      20,
      51,
      16,
      56,
      60,
      61,
      28,
      45,
      14,
      44,
      46,
      43,
      0,
      65,
      25,
      47,
      12,
      29,
      27,
      23,
      31,
      24,
      63,
      50,
      53,
      21,
      4,
      2,
      22,
      59,
      35,
      9
    ],
    [
      42,
      60,
      39,
      62,
      52,
      40,
      7,
      23,
      36,
      22,
      58,
      41,
      54,
      50,
      32,
      57,
      44,
      21,
      9,
      26,
      48,
      13,
      33,
      45,
      6,
      8,
      16,
      17,
      10,
      1,
      15,
      59,
      63,
      24,
      46,
      55,
      25,
      2,
      19,
      56,
      51,
      18,
      61,
      34,
      28,
      65,
      11,
      20,
      14,
      53,
      37,
      47,
      35,
      49,
      27,
      0,
      29,
      30,
      43,
      38,
      12,
      4,
      64,
      3,
      5,
      31
    ]
  ]

  // inFirstRotor   = rotorsIn[a]
  // outFirstRotor  = rotorsOut[a]
  // inSecondRotor  = rotorsIn[b]
  // outSecondRotor = rotorsOut[b]
  // inThirdRotor   = rotorsIn[c]
  // outThirdRotor  = rotorsOut[c]

  // choose number between 0 and 65 for each of the 5 settings

  // const rotorA_position = 1
  // const rotorB_position = 3
  // const rotorC_position = 2
  // const plugboard_initialSetting = 45
  // const rotorA_initialSettings = 34
  // const rotorB_initialSettings = 61
  // const rotorC_initialSettings = 37
  // const reflector_initialSetting = 16

  const a = rotorA_position - 1
  const b = rotorB_position - 1
  const c = rotorC_position - 1

  for (let plug = 0; plug < plugboard_initialSetting; plug++) {
    plugboardList.unshift(plugboardList.pop())
  }
  for (let rotor1 = 0; rotor1 < rotorA_initialSettings; rotor1++) {
    rotorsIn[a].unshift(rotorsIn[a].pop())
    rotorsOut[a].unshift(rotorsOut[a].pop())
  }
  for (let rotor2 = 0; rotor2 < rotorB_initialSettings; rotor2++) {
    rotorsIn[b].unshift(rotorsIn[b].pop())
    rotorsOut[b].unshift(rotorsOut[b].pop())
  }
  for (let rotor3 = 0; rotor3 < rotorC_initialSettings; rotor3++) {
    rotorsIn[c].unshift(rotorsIn[c].pop())
    rotorsOut[c].unshift(rotorsOut[c].pop())
  }
  for (let reflect = 0; reflect < reflector_initialSetting; reflect++) {
    reflectorList.unshift(reflectorList.pop())
  }
  let testing = encrypting
  const encryptedMessage = []
  let secondRotorIncrementer = 1
  let thirdRotorIncrementer = 1
  const numericMessage = []
  const encryptedNumList = []

  const convertCharToNum = userCharMessage => {
    let numericMessage = []
    let messageUpper = userCharMessage.toUpperCase()
    for (let i = 0; i < userCharMessage.length; i++) {
      numericMessage.push(numbersList[alphabetList.indexOf(messageUpper[i])])
    }
    plugboard(numericMessage)
    // console.log(numericMessage)
  }

  const plugboard = numericMessage => {
    for (let num in numericMessage) {
      firstRotor_beforeReflector(
        plugboardList[numbersList.indexOf(numericMessage[num])]
      )
      // console.log(plugboardList[numbersList.indexOf(num)])
    }
  }

  const firstRotor_beforeReflector = plugboardExit => {
    let entryNum = rotorsIn[a][plugboardExit]
    let exitIndex = rotorsOut[a].indexOf(entryNum)
    secondRotor_beforeReflector(exitIndex)
  }
  const secondRotor_beforeReflector = firstRotorExit => {
    let entryNum = rotorsIn[b][firstRotorExit]
    let exitIndex = rotorsOut[b].indexOf(entryNum)
    thirdRotor_beforeReflector(exitIndex)
  }
  const thirdRotor_beforeReflector = secondRotorExit => {
    let entryNum = rotorsIn[c][secondRotorExit]
    let exitIndex = rotorsOut[c].indexOf(entryNum)
    reflector(exitIndex)
  }

  const reflector = thirdRotorExit => {
    if (testing) {
      thirdRotor_afterReflector(
        reflectorList[numbersList.indexOf(thirdRotorExit)]
      )
    } else if (!testing) {
      thirdRotor_afterReflector(
        numbersList[reflectorList.indexOf(thirdRotorExit)]
      )
    }
  }

  const thirdRotor_afterReflector = reflectorExit => {
    let entryNum = rotorsOut[c][reflectorExit]
    let exitIndex = rotorsIn[c].indexOf(entryNum)
    secondRotor_afterReflector(exitIndex)
  }
  const secondRotor_afterReflector = thirdRotorExit => {
    let entryNum = rotorsOut[b][thirdRotorExit]
    let exitIndex = rotorsIn[b].indexOf(entryNum)
    firstRotor_afterReflector(exitIndex)
  }
  const firstRotor_afterReflector = secondRotorExit => {
    let entryNum = rotorsOut[a][secondRotorExit]
    let exitIndex = rotorsIn[a].indexOf(entryNum)
    plugboardReturn(exitIndex)
  }

  const plugboardReturn = firstRotorExit => {
    convertNumtoChar(numbersList[plugboardList.indexOf(firstRotorExit)])
  }

  const convertNumtoChar = plugboardReturnExit => {
    encryptedMessage.push(
      alphabetList[numbersList.indexOf(plugboardReturnExit)]
    )

    rotorsIn[a].unshift(rotorsIn[a].pop())
    rotorsOut[a].unshift(rotorsOut[a].pop())
    secondRotorIncrementer += 1
    if (secondRotorIncrementer == 66) {
      rotorsIn[b].unshift(rotorsIn[b].pop())
      rotorsOut[b].unshift(rotorsOut[b].pop())
      secondRotorIncrementer = 1
      thirdRotorIncrementer += 1
    }
    if (thirdRotorIncrementer == 4356) {
      rotorsIn[c].unshift(rotorsIn[c].pop())
      rotorsOut[c].unshift(rotorsOut[c].pop())
      thirdRotorIncrementer = 1
    }
  }

  convertCharToNum(userCharMessage)

  const testFunk = encryptedMessage => {
    const message = encryptedMessage
      .join("")
      .toLowerCase()
      .replace(/(^|[.!?]\s+)([a-z])/g, function(m, $1, $2) {
        return $1 + $2.toUpperCase()
      })
    return message
  }
  return testFunk(encryptedMessage)
  // console.log(testFunk(encryptedMessage))
}

// beginEncryption(`
// That"s cool
// `, true)

// beginEncryption(`
// <us?ue*qxqa`
// , false)

export default beginEncryption2
