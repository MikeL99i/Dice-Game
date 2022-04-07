// DOM elements
const p1Scoreboard = document.getElementById("player1Scoreboard");
const p2Scoreboard = document.getElementById("player2Scoreboard");
const p1DiceDisplay = document.getElementById("player1Dice");
const p2DiceDisplay = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

const p1Message = "Player 1 Turn";
const p2Message = "Player 2 Turn";
const p1Victory = "Player 1 Won 🎉🎉🎉";
const p2Victory = "Player 2 Won 🎉🎉🎉";

let windCondition = false;
let p1Score = 0;
let p2Score = 0;
let p1Dice = 0;
let p2Dice = 0;
let playerTurn = 0; // Flag for tracking player turn =>  0 = Player 1 turn; 1 = Player 2 Turn

rollBtn.addEventListener("click", ClickRoll);
resetBtn.addEventListener("click", Reset);


// this function invoke on rollBtn
function ClickRoll() {
    RollDice();
    if(p1Score >= 20 || p2Score >= 20) {
        windCondition = true;
        ActivateResetBtn();
    }
    if(playerTurn === 0) {
        if(windCondition === false)
            DisplayMessage(p1Message);
        else
            DisplayMessage(p2Victory);
    }else {
        if(windCondition === false)
            DisplayMessage(p2Message);
        else
            DisplayMessage(p1Victory);
    }
}

// hide rollBtn and display resetBtn
function ActivateResetBtn() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "inline-block"; 
}

// hide reset btn activate roll btn
function ActivateRollBtn() {
    resetBtn.style.display = "none";
    rollBtn.style.display = "inline-block";
}

// invoke when resetbtn clicked reset score -> another round
function Reset() {
    windCondition = false;
    p1Score = 0;
    p2Score = 0;
    playerTurn = 0;
    DisplayMessage(p1Message);
    DisplayScoreAndDice("-", p1Score, 0);
    DisplayScoreAndDice("-", p2Score, 1);
    ActivateRollBtn();
}

// display the right message
function DisplayMessage(theMessage) {
    message.innerHTML = theMessage;
}

// roll a dice
function RollDice() {
    if(playerTurn === 0) {
        p1Dice = RandomDice();
        p1Score += p1Dice;
        DisplayScoreAndDice(p1Dice, p1Score, playerTurn);
        SwapActive(p1DiceDisplay, p2DiceDisplay);
        playerTurn = 1;
    }else {
        p2Dice = RandomDice();
        p2Score += p2Dice;
        DisplayScoreAndDice(p2Dice, p2Score, playerTurn);
        SwapActive(p2DiceDisplay, p1DiceDisplay);
        playerTurn = 0;
    }

}

// Dice function retrun random number between 1 to 6
function RandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function DisplayScoreAndDice(dice, score, playerTurn) {
    if(playerTurn === 0) {
        p1Scoreboard.innerHTML = score;
        p1DiceDisplay.innerHTML = dice;
    }else {
        p2Scoreboard.innerHTML = score;
        p2DiceDisplay.innerHTML = dice;
    }
}

function SwapActive(pRemove, pActive) {
    pRemove.classList.remove("active");
    pActive.classList.add("active");
}