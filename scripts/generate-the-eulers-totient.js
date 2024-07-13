let html2 = `
    <div class="function-title">
      Euler's Totient Function
    </div>

    <div class="formula-container">
      <img class="formula-image" src="images/formula.png">
    </div>


    <div class="text-paragraph">
      <div class="title-paragraph">
        What is the idea?
      </div>
      <div class="first-paragraph-container">
        <p>
          Euler's totient function, denoted as 
          𝜙(<span class="italic">n</span>), serves to calculate the count of integers that are coprime with
          <span class="italic">n</span> (integers that have no common divisors other than 1) within the range from 1 to <span class="italic">n</span>. 
          In other words, ϕ(n) determines the number of positive integers up to
          <span class="italic">n</span> that are relatively prime to <span class="italic">n</span>.
        </p>
      </div>
      <div class="second-paragraph-container">
        <p>
          In the formula, <span class="italic">p</span> represents the prime factors of <span class="italic">n</span>.
        </p>
      </div>
    </div>


    <div class="input-and-calculate-elements">
      <div class="input-container">
        <input class="js-input-element" placeholder="Please enter a number">
      </div>

      <div class="button-container">
        <button onclick="displayTheAnswer()"  class="js-calculate-button">[Calculate]</button>
      </div>
    </div>

    <div>
      <p class="js-display-the-answer display-the-answer"></p>
    </div>
    `

document.querySelector('.js-second-element-button').addEventListener(('click'), () => {
  
  document.querySelector('.display-project-page').innerHTML = html2;

});