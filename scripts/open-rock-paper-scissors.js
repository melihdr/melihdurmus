html = `
        <div class="title">
        Rock Paper Scissors Game
        </div>
        <div class="move-buttons-div">
        <button onclick="playGame('rock');" class="move-buttons">[Rock]</button>
        <button onclick="playGame('paper');" class="move-buttons">[Paper]</button>
        <button onclick="playGame('scissors');" class="move-buttons">[Scissors]</button>
        </div>
        <div>
        <div>
          <p class="js-moves display-moves"></p>
          <p class="js-result display-result"></p>
          <p class="js-score display-score"></p>
        </div>
        <div class="reset-score-button-div">
          <button onclick="resetScore();" class="reset-score-button reset-score-button">[Reset Score]</button>
        </div>
        </div>
      `

const buttonElement = document.querySelector('.js-first-element-button');

const divElement = document.querySelector('.display-project-page');

buttonElement.addEventListener('click', () => {
  divElement.innerHTML = html;
});

