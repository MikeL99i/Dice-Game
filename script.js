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

let windCondition = false;
let p1Score = 0;
let p2Score = 0;
let p1Dice = 0;
let p2Dice = 0;

