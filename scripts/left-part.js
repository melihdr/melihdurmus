function clickedTheYesAnswer() {

  const answerYesElement = document.querySelector('.js-yes-part');
  const yesHasClass = answerYesElement.classList.contains('clicked-yes-button');
  
  if (yesHasClass) {
    answerYesElement.classList.remove('clicked-yes-button');
  } else {
    answerYesElement.classList.add('clicked-yes-button');
  }

}

function clickedTheNoAnswer() {

  const answerNoElement = document.querySelector('.js-no-part');
  const noHasClass = answerNoElement.classList.contains('clicked-no-button')

  if (noHasClass) {
    answerNoElement.classList.remove('clicked-no-button');
  } else {
    answerNoElement.classList.add('clicked-no-button');
  }

}

document.querySelector('.js-first-element-button').addEventListener(('click'), () => {
  playMusic();
});

document.querySelector('.js-second-element-button').addEventListener(('click'), () => {
  playMusic();
})

function playMusic() {
  let audio = new Audio("click-sound.mp3");
  audio.play();
}

