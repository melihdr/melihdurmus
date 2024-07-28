let html3 = `        

<div class="morse-title-container">
  <div class="morse-title">
    Morse Code Translator
  </div>
</div>

<div class="mors-photo-container">
  <img class="mors-photo-image" src="morse_code.png">
</div>

<div>
  <div class="mors-input-container">
    <input type="text" class="mors-input-text-js mors-input-text" placeholder="Enter the text">
  </div>
<div class="mors-radio-buttons-container">
  <input type="radio" id="english" name="options">
  <label for="english">Morse Code -> English</label>
  <input type="radio" id="mors" name="options">
  <label for="mors">English -> Morse Code</label>
</div>
<div class="mors-convert-container">
  <button onclick="morseClickedButton()" class="mors-convert-button">[Convert]</button>
</div>
<div class="mors-output-text-container">
  <div class="mors-output-text mors-output-text-js"></div>
</div>
</div>
`

document.querySelector('.js-third-element-button').addEventListener(('click'), () => {
  document.querySelector('.display-project-page').innerHTML = html3
})