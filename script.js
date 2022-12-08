let randomNumbersArray = [];
let randomUserBoardArray = [];

function userBoardGenerator() {
  let numberInputNode = document.getElementById("number-input").value;
  let numberOfUserBoards = parseInt(numberInputNode);
  bingoGenerator();
  generateUserBoards(numberOfUserBoards);
}

function generateUserBoards(bordersNumber) {
  let userBoardsDiv = document.getElementById("user-boards");
  userBoardsDiv.innerText = "";

  for (let board = 1; board <= bordersNumber; board++) {
    randomUserBoardArray = [];
    let title = document.createElement("h3");
    title.innerText = `Board number ${board}`;
    userBoardsDiv.appendChild(title);

    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);

    for (let number = 0; number < 24; number++) {
      let randomNumber = Math.floor(Math.random() * 76 + 1);
      if (randomUserBoardArray.includes(randomNumber)) {
        number -= 1;
      } else {
        randomUserBoardArray.push(randomNumber);
        let randomNumberDiv = document.createElement("div");
        randomNumberDiv.innerText = randomNumber;
        randomNumberDiv.classList.add("user-board-number");
        randomNumberDiv.style.borderColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
        userBoardsDiv.appendChild(randomNumberDiv);
      }
    }
  }
}

function checkUserBoards() {
  let userBoardsNodes = document.getElementsByClassName("user-board-number");
  for (let number of userBoardsNodes) {
    let numberToInt = parseInt(number.innerText);
    if (randomNumbersArray.includes(numberToInt)) {
      number.classList.add("user-board-background");
    }
  }
}

function generateRandomNumber() {
  let rColor = Math.floor(Math.random() * 256);
  let gColor = Math.floor(Math.random() * 256);
  let bColor = Math.floor(Math.random() * 256);

  let randomNumber = Math.floor(Math.random() * 76 + 1);

  let bingoNumbersNodes = document.getElementsByClassName("bingo-number");

  if (randomNumbersArray.includes(randomNumber)) {
    generateRandomNumber();
  } else {
    randomNumbersArray.push(randomNumber);
    for (let bingoNumber of bingoNumbersNodes) {
      if (bingoNumber.innerText == randomNumber) {
        bingoNumber.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
      }
    }
  }
}

function bingoGenerator() {
  // Added feature, to clean the bingo area after we add user boards
  let bingoNode = document.getElementById("bingo-area");
  bingoNode.innerText = "";

  let bingoAreaNode = document.getElementById("bingo-area");

  for (let number = 1; number < 77; number++) {
    let bingoNumberDiv = document.createElement("div");
    bingoNumberDiv.innerText = number;
    bingoNumberDiv.classList.add("bingo-number");
    bingoAreaNode.appendChild(bingoNumberDiv);
  }
}

window.onload = bingoGenerator;
