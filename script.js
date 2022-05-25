const gameContainer = document.getElementById("game");


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

var first = true;
var animatingDone = true;
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (animatingDone){ 
    console.log("you just clicked", event.target);
    if (first) {
      first = false;
      firstTarget = event.target;
      firstTarget.style.backgroundColor = firstTarget.classList.value
    } else if (firstTarget != event.target){
      guess = document.getElementById("guess")
      guess.innerText = parseInt(guess.innerText) + 1
      first = true;
      secondTarget = event.target;
      secondTarget.style.backgroundColor = secondTarget.classList.value
      if ((firstTarget.classList.value == secondTarget.classList.value)) {
        console.log("You found a match!");
      } else {
        animatingDone = false;
        setTimeout(function() {
          firstTarget.style.backgroundColor = "white"
          secondTarget.style.backgroundColor = "white"
          animatingDone = true;
        }, 1000)
      }
    }
  }

}

function restartGame() {
  game = document.querySelector("#game")
  while (game.firstChild) {
    game.removeChild(game.firstChild)
  }
  guess = document.getElementById("guess")
  guess.innerText = 0
  let shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors);
}

// when the DOM loads
createDivsForColors(shuffledColors);

restartButton = document.querySelector("#restart")

restartButton.addEventListener("click", restartGame)
