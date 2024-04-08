// COIN FLlet output = document.getElementById("output");
let heads = document.getElementById("heads-out");
let tails = document.getElementById("tails-out");
let numheads = 0;
let numtails = 0;

//dice
let one = document.getElementById("1rolls");
let two = document.getElementById("2rolls");
let three = document.getElementById("3rolls");
let four = document.getElementById("4rolls");
let five = document.getElementById("5rolls");
let six = document.getElementById("6rolls");

let numone = 0;
let numtwo = 0;
let numthree = 0;
let numfour = 0;
let numfive = 0;
let numsix = 0;

//coin event listener
document.getElementById("btn").addEventListener("click", btnClicked);

//dice event listener
document.getElementById("diceBtn").addEventListener("click", dicebtn);

function btnClicked() {
  let randnum = Math.random();

  if (randnum < 0.5) {
    output.innerHTML = "<img src='img/heads.png' />";
    numheads++;
    heads.innerHTML = numheads;
  } else {
    output.innerHTML = "<img src='img/tails.png' />";
    numtails++;
    tails.innerHTML = numtails;
  }
}
// dice function
function dicebtn() {
  let randDie = Math.floor(Math.random() * 7);

  if (randDie == 1) {
    output.innerHTML = "<img src='img/1.png' />";
    numone++;
    one.innerHTML = numone;
  } else if (randDie == 2) {
    output.innerHTML = "<img src='img/2.png' />";
    numtwo++;
    two.innerHTML = numtwo;
  } else if (randDie == 3) {
    output.innerHTML = "<img src='img/3.png' />";
    numthree++;
    three.innerHTML = numthree;
  } else if (randDie == 4) {
    output.innerHTML = "<img src='img/4.png' />";
    numfour++;
    four.innerHTML = numfour;
  } else if (randDie == 5) {
    output.innerHTML = "<img src='img/5.png' />";
    numfive++;
    five.innerHTML = numfive;
  } else if (randDie == 6) {
    output.innerHTML = "<img src='img/6.png' />";
    numsix++;
    six.innerHTML = numsix;
  }
}
