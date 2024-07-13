let inputElement;
let result;

function displayTheAnswer() {

    inputElement = document.querySelector('.js-input-element').value;
    result = Math.floor(phi(Number(inputElement)));
  
    if (result) {
      document.querySelector('.js-display-the-answer').innerHTML =  `Answer:${result}`;
      document.querySelector('.js-input-element').value = '';
    } else { 
      document.querySelector('.js-display-the-answer').innerHTML = 'Please enter a valid number';
      document.querySelector('.js-input-element').value = '';
    }

}


function phi(n) {
  
  let result = n;

  for (let p = 2; p * p <= n; p++) {

    if (n % p == 0) {
      while (n % p == 0) {
        n /= p
      }

      result *= (1 - (1 / p));
    }
  }

  if (n > 1 ) {
    result -= result / n;
  }

  return result;

}