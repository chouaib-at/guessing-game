// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let guessedNumber = generateRandomNumber();


console.log (guessedNumber); // open your console in the browser to check how really the game works

function checkGuess() {
  const guessInput = document.getElementById("guess-input");
  const guess = parseInt(guessInput.value);

  if (guess > guessedNumber) {
    alert("Try a lower number.");
  } else if (guess === guessedNumber) {
    alert("Congratulations! You guessed the correct number.");
  } else {
    alert("Try a higher number.");
  }
}
