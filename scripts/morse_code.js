const english_to_morse = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
                          'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
                          'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
                          'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
                          'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
                          'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
                          'y': '-.--', 'z': '--..', '1': '.----',
                          '2': '..---', '3': '...--', '4': '....-', '5': '.....',
                          '6': '-....', '7': '--...', '8': '---..', '9': '----.',
                          '0': '-----', ' ':' ', '|':'|', "":"" 
}

const morse_to_english = {}

for (const [key, value] of Object.entries(english_to_morse)) {
  morse_to_english[value] = key;
}

const englishLetters = []

for (const [key, value] of Object.entries(english_to_morse)) {
  englishLetters.push(`${key}`)
}


const morseLetters = []

for (const [key, value] of Object.entries(morse_to_english)) {
  morseLetters.push(`${key}`)
}


function morseClickedButton() {

  try {

    let morse = ""
    let english = ""

    const morseInputValue = document.querySelector(".mors-input-text-js").value

    let cleanedValue = morseInputValue.replace(/[.,!?;:(){}[\]'"-]/g, '');

    cleanedValue = cleanedValue.toLowerCase()

    cleanedValueLetters = []

    for (i=0; i<cleanedValue.length; i++) {
      cleanedValueLetters.push(cleanedValue[i])
    }

    const morseSelectedRadio = document.querySelector('input[type="radio"]:checked')

    if (morseSelectedRadio.id === "mors") {
      for (i = 0; i < cleanedValueLetters.length; i++) {
        for (j = 0; j < englishLetters.length; j++) {
          if (cleanedValueLetters[i] === englishLetters[j]) {
            if (cleanedValueLetters[i] !== " ") {
              morse += english_to_morse[cleanedValueLetters[i]] + " "
            } else {
              morse += "|"
            }
          }
        }
      }

      console.log(morse)

      document.querySelector(".mors-output-text-js").innerHTML = morse


    } else if (morseSelectedRadio.id === "english") {
      
      const morseWords = morseInputValue.split("|")

      for (i = 0; i < morseWords.length; i++) {
        let morseLetters = morseWords[i].split(" ")
        for (j=0; j < morseLetters.length; j++) {
          let morseLetter = morse_to_english[morseLetters[j]]
          english += morseLetter
        }
        english += " "
      }

      console.log(english)

      document.querySelector(".mors-output-text-js").innerHTML = english
      document.querySelector(".mors-input-text-js").value = ""

    }


    


  } catch (error) {
    document.querySelector(".mors-output-text-js").innerHTML = "Please choose a valid option"
  }



}