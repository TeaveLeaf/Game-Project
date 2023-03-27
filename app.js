let boardData = [1,2,3,4,5,6,7,8];

let cardsList = [1,2,3,4,5,6];


let purpData = 0;
let orangData = 0;

let purpMove = 1;
let purPos = 0;

let orangMove = 1;

let grenMove = 1;

let toge = 0;

let turns = 0;

let pCards = 0;
let oCards = 0;
let gCards = 0;

let c1 = document.getElementById("cell1");
let c2 = document.getElementById("cell2");
let c3 = document.getElementById("cell3");
let c4 = document.getElementById("cell4");
let block = document.getElementById("block");
let c5 = document.getElementById("cell5");
let c6 = document.getElementById("cell6");
let c7 = document.getElementById("cell7");
let c8 = document.getElementById("cell8");



//Sound that plays when the buttons and dropdown menus are clicked



// <-- // Attempts at sound playing that did not work


// let dropdownClick = document.getElementById(dropdown);

// dropdown.addEventListener("click",'function'); {
//   let selectedOption = dropdown.option;
//   let audioURL = audioURLs[selectedOption];
//   menuButton1 = audioURL;
//   menuButton1.play();
// }



function Dropdown (){
  var dropdownAI = document.getElementById("dropdownAI");
var ais = dropdownAI.options[dropdownAI.selectedIndex].innerHTML;

var dropdownPlayer = document.getElementById("dropdown");
var playerdown = dropdown.options[dropdown.selectedIndex].innerHTML;

  console.log(playerdown + " players selected.");
  console.log(ais + ", AI selected.");
}




var num;
//Dice roll function
function diceRoll(){
  let diceRollSound = new Audio ("Sounds/dice-roll.mp3");
  num = Math.floor(Math.random()*6)+1;
  document.getElementById("diceShow2").innerHTML = num;
  console.log("Dice rolled a " + num);
  if(turns == 0){
    console.log("PURPLE");
    Pmovement();
    diceRollSound.play();
  } else if(turns == 1){
    console.log("ORANGE");
    Omovement();
    diceRollSound.play();
  } else if(turns == 2){
    console.log("GREEN");
    Gmovement();
    diceRollSound.play();
  }
}

function Pmovement() { //WORKS IT WORKS MOSTLY WOOHOO
  // console.log("hihi the num is " + num);
  // console.log("purpmove is " + purpMove);
  let testy = 0;
  // console.log("testy is " + testy);
  for (let i = 0; i < 8; i++){
    if(testy == num && purpMove < 9) { //if testy is equal to num and pm less than 9 no add
      purpMove = purpMove + 0;
      testy = testy + 0;
      console.log("A testy is " + testy);
      console.log("A pm is " + purpMove);
    } else if(testy == num && purpMove >= 9) { //if testy = num and bigger than 9 pm = 0
      purpMove = 1;
      testy = 0;
      console.log("B testy is " + testy);
      console.log("B pm is " + purpMove);
    } else { //if not equal to num just add
      purpMove = purpMove + 1;
      testy = testy + 1;
      console.log("C testy is " + testy);
      console.log("C pm is " + purpMove);
    }
  }

  pCards = pCards + num;
  document.getElementById("p1Coins").innerHTML = pCards;

  console.log("Purple has moved");

  if(pCards >= 10){
    console.log("PURPLE LOSES");
    document.getElementById("winlose").style.display = "flex";

  }

  console.log("Purple's turn over");
  turns = 1;
  updateBoard();
}


function Omovement() {
  // console.log("hihi the num is " + num);
  // console.log("purpmove is " + purpMove);
  let testy2 = 0;
  // console.log("testy is " + testy);
  for (let i = 0; i < 8; i++){
    if(testy2 == num && orangMove < 9) { //if testy is equal to num and pm less than 9 no add
      orangMove = orangMove + 0;
      testy2 = testy2 + 0;
      console.log("A testy is " + testy2);
      console.log("A pm is " + orangMove);
    } else if(testy2 == num && orangMove >= 9) { //if testy = num and bigger than 9 pm = 0
      orangMove = 1;
      testy2 = 0;
      console.log("B testy is " + testy2);
      console.log("B pm is " + orangMove);
    } else { //if not equal to num just add
      orangMove = orangMove + 1;
      testy2 = testy2 + 1;
      console.log("C testy is " + testy2);
      console.log("C pm is " + orangMove);
    }
  }

  oCards = oCards + num;
  document.getElementById("p2Coins").innerHTML = oCards;

  console.log("Orange has moved");


  console.log("Orange's turn over");

  var dropdownAI = document.getElementById("dropdownAI");
  var ais = dropdownAI.options[dropdownAI.selectedIndex].innerHTML;
  console.log("ais = " + ais);
  if(ais == "Yes"){
    turns = 2;
    diceRoll();
  } else {
    turns = 0;
  }

  if(oCards >= 10){
    console.log("ORANGE LOSES");
    document.getElementById("winlose").style.display = "flex";
  }
  
  updateBoard();
}

function Gmovement() {
  // console.log("hihi the num is " + num);
  // console.log("purpmove is " + purpMove);
  let testy3 = 0;
  // console.log("testy is " + testy);
  for (let i = 0; i < 8; i++){
    if(testy3 == num && grenMove < 9) { //if testy is equal to num and pm less than 9 no add
      grenMove = grenMove + 0;
      testy3 = testy3 + 0;
      console.log("A testy is " + testy3);
      console.log("A pm is " + grenMove);
    } else if(testy3 == num && grenMove >= 9) { //if testy = num and bigger than 9 pm = 0
      grenMove = 1;
      testy3 = 0;
      console.log("B testy is " + testy3);
      console.log("B pm is " + grenMove);
    } else { //if not equal to num just add
      grenMove = grenMove + 1;
      testy3 = testy3 + 1;
      console.log("C testy is " + testy3);
      console.log("C pm is " + grenMove);
    }
  }

  gCards = gCards + num;
  document.getElementById("p3Coins").innerHTML = gCards;

  console.log("Green has moved");

  console.log("Green's turn over");
  turns = 0;

  if(gCards >= 10){
    console.log("GREEN LOSES");
    document.getElementById("winlose").style.display = "flex";
  }

  updateBoard();
}

function gameEnd(){
  if(ais2 == "Yes"){
    if(pCards > oCards && pCards > gCards){
      document.getElementById("third").innerHTML = "Player 1";
    } else if(oCards > pCards && oCards > gCards){
      document.getElementById("third").innerHTML = "Player 2";
    } else if(gCards > oCards && gCards > pCards){
      document.getElementById("third").innerHTML = "Player 3";
    }
    if(pCards > oCards && pCards < gCards || pCards > gCards && pCards < oCards){
      document.getElementById("second").innerHTML = "Player 1";
    } else if(gCards > oCards && gCards < pCards || gCards > pCards && gCards < oCards){
      document.getElementById("second").innerHTML = "Player 2";
    } else if(oCards > pCards && oCards < gCards || oCards > gCards && oCards < pCards){
      document.getElementById("second").innerHTML = "Player 3";
    }
    if(pCards < oCards && pCards < gCards){
      document.getElementById("first").innerHTML = "Player 1";
    } else if(gCards < oCards && gCards < pCards){
      document.getElementById("first").innerHTML = "Player 2";
    } else if(oCards < pCards && oCards < gCards){
      document.getElementById("first").innerHTML = "Player 3";
    }
  } else if(pCards > oCards){
      document.getElementById("first").innerHTML = "Player 1";
      document.getElementById("second").innerHTML = "Player 2";
    } else if(oCards > pCards){
      document.getElementById("first").innerHTML = "Player 2";
      document.getElementById("second").innerHTML = "Player 1";
    

    winlose.style.display == "flex";
    var third = document.getElementById("third");
    third.style.display = "none";
  }
}

function visible(){
  console.log("WHY");
  var winlose = document.getElementById("winlose");
  var winlose2 = document.getElementById("winlosebg");
  var dropdownAI = document.getElementById("dropdownAI");
  var ais2 = dropdownAI.options[dropdownAI.selectedIndex].innerHTML;
  console.log("hi ita me this is gameEnd ais = " + ais2);
  winlose.style.display == "flex";
  winlose2.style.display == "block";
}

//Function makes thingy appear and or disappear
function visibility() {
    var start = document.getElementById("startgm");
    var playerBrd = document.getElementById("playerbrd");
    var board = document.getElementById("board");
    if (start.style.display === "none") {
      start.style.display = "block";
      board.style.display = "none";
    } else {
      start.style.display = "none";
      playerBrd.style.display = "flex";
      board.style.display = "block";
    }
    console.log("Game started");
    updateBoard();
}









//Updates the board and moves players to their respective places
function updateBoard() {
  document.getElementById("cell1").className = "cell";
  document.getElementById("cell2").className = "cell";
  document.getElementById("cell3").className = "cell";
  document.getElementById("cell4").className = "cell";
  document.getElementById("cell5").className = "cell";
  document.getElementById("cell6").className = "cell";
  document.getElementById("cell7").className = "cell";
  document.getElementById("cell8").className = "cell";
  console.log("LOOK AT IT MOVE");

  var ais = dropdownAI.options[dropdownAI.selectedIndex].innerHTML;
  console.log("PEOPLE SAID " + ais);
  if(ais == "No"){
    grenMove = 0;
  }

  if (purpMove == 1){
    document.getElementById("cell1").className = "cell purpal";
  } else if (purpMove == 2){
    document.getElementById("cell2").className = "cell purpal";
  } else if (purpMove == 3){
    document.getElementById("cell3").className = "cell purpal";
  } else if (purpMove == 4){
    document.getElementById("cell4").className = "cell purpal";
  } else if (purpMove == 5){
    document.getElementById("cell5").className = "cell purpal";
  } else if (purpMove == 6){
    document.getElementById("cell6").className = "cell purpal";
  } else if (purpMove == 7){
    document.getElementById("cell7").className = "cell purpal";
  } else if (purpMove == 8){
    document.getElementById("cell8").className = "cell purpal";
  } else document.getElementsByClassName("cell").className = "cell";

  if (orangMove == 1){
    document.getElementById("cell1").className = "cell orang";
  } else if (orangMove == 2){
    document.getElementById("cell2").className = "cell orang";
  } else if (orangMove == 3){
    document.getElementById("cell3").className = "cell orang";
  } else if (orangMove == 4){
    document.getElementById("cell4").className = "cell orang";
  } else if (orangMove == 5){
    document.getElementById("cell5").className = "cell orang";
  } else if (orangMove == 6){
    document.getElementById("cell6").className = "cell orang";
  } else if (orangMove == 7){
    document.getElementById("cell7").className = "cell orang";
  } else if (orangMove == 8){
    document.getElementById("cell8").className = "cell orang";
  } else document.getElementsByClassName("cell").className = "cell";


  if (grenMove == 1){
    document.getElementById("cell1").className = "cell gren";
  } else if (grenMove == 2){
    document.getElementById("cell2").className = "cell gren";
  } else if (grenMove == 3){
    document.getElementById("cell3").className = "cell gren";
  } else if (grenMove == 4){
    document.getElementById("cell4").className = "cell gren";
  } else if (grenMove == 5){
    document.getElementById("cell5").className = "cell gren";
  } else if (grenMove == 6){
    document.getElementById("cell6").className = "cell gren";
  } else if (grenMove == 7){
    document.getElementById("cell7").className = "cell gren";
  } else if (grenMove == 8){
    document.getElementById("cell8").className = "cell gren";
  } else document.getElementsByClassName("cell").className = "cell";

  if(purpMove == 1 && orangMove == 1) {
    document.getElementById("cell1").className = "cell purorang";
  } else if(purpMove == 2 && orangMove == 2) {
    document.getElementById("cell2").className = "cell purorang";
  } else if(purpMove == 3 && orangMove == 3) {
    document.getElementById("cell3").className = "cell purorang";
  } else if(purpMove == 4 && orangMove == 4) {
    document.getElementById("cell4").className = "cell purorang";
  } else if(purpMove == 5 && orangMove == 5) {
    document.getElementById("cell5").className = "cell purorang";
  } else if(purpMove == 6 && orangMove == 6) {
    document.getElementById("cell6").className = "cell purorang";
  } else if(purpMove == 7 && orangMove == 7) {
    document.getElementById("cell7").className = "cell purorang";
  } else if(purpMove == 8 && orangMove == 8) {
    document.getElementById("cell3").className = "cell purorang";
  }
}



//Function makes thingy appear and or disappear
function visibility() {
    var start = document.getElementById("startgm");
    var playerBrd = document.getElementById("playerbrd");
    var board = document.getElementById("board");
    let buttonClick = new Audio("Sounds/menu-click.mp3");
    if (start.style.display === "none") {
      start.style.display = "block";
      board.style.display = "none";
    } else {
      start.style.display = "none";
      playerBrd.style.display = "flex";
      board.style.display = "block";
      buttonClick.play();
    }
    console.log("Game started");
    Dropdown();
    updateBoard();
}


//Card deck function -- not using
let cardList = ["Card1", "Card2", "Card3", "Card4", "Card5"];
function cardDeck(){
    let cardsList = ["Card 1", "Card 2", "Card 3"];
    var displ = document.getElementById("cardDis");
    var car1 = document.getElementById("card1");
    var car2 = document.getElementById("card2");
    var car3 = document.getElementById("card3");
    var rando;
    var num2;
    displ.style.display = "none";
    car1.style.display = "none";
    car2.style.display = "none";
    car3.style.display = "none";
    num2 = Math.floor(Math.random()*3);
    rando = cardsList[num2];
    if (rando == "Card 1") {
      if (car1.style.display === "none") {
        displ.style.display="block";
        car1.style.display = "block";
      } else {
        displ.style.display="none";
        car1.style.display = "none";
      }
    } else if (rando == "Card 2") {
      if (car2.style.display === "none") {
        displ.style.display="block";
        car2.style.display = "block";
      } else {
        displ.style.display="none";
        car2.style.display = "none";
      }
    } else if (rando == "Card 3") {
      if (car3.style.display === "none") {
        displ.style.display="block";
        car3.style.display = "block";
      } else {
        displ.style.display="none";
        car3.style.display = "none";
      }
    }
}



// console.log("card thinguy");
// drawCard();
//Draw card function oh yay wow woohoo so fun
// function drawCard() { //Currently working on, doesn't work properly
//   let card1 = document.getElementById("cardD1");
//   let card2 = document.getElementById("cardD2");
//   let card3 = document.getElementById("cardD3");
//   let card4 = document.getElementById("cardD4");
//   let card5 = document.getElementById("cardD5");
//   let card6 = document.getElementById("cardD6");
//   let saveBut = document.getElementById("save");
//   let useBut = document.getElementById("use");
//   let randoDraw = 0;
//   randoDraw = Math.floor(Math.random()*6)+1;
//   console.log("Random draw is " + randoDraw);
//   if(randoDraw == 1){
//    if(card1.style.display === "none"){
//     card1.style.display = "block";
//    } else {
//     card1.style.display = "none";
//    }
//   } else if(randoDraw == 2){
//     if(card2.style.display === "none"){
//      card2.style.display = "block";
//     } else {
//      card2.style.display = "none";
//     }
//   } else if(randoDraw == 3){
//     if(card3.style.display === "none"){
//      card3.style.display = "block";
//     } else {
//      card3.style.display = "none";
//     }
//   } else if(randoDraw == 4){
//     if(card4.style.display === "none"){
//      card4.style.display = "block";
//     } else {
//      card4.style.display = "none";
//     }
//   } else if(randoDraw == 5){
//     if(card5.style.display === "none"){
//      card5.style.display = "block";
//     } else {
//      card5.style.display = "none";
//     }
//   } else if(randoDraw == 6){ //its not disappearing bc 
//     if(card6.style.display === "none"){
//      card6.style.display = "block";
//     } else {
//      card6.style.display = "none"; //this else is making it only dis if you get 6 again
//     }
//   }
//   if (saveBut.style.display === "none") {
//     saveBut.style.display = "flex";
//     useBut.style.display = "flex";
//   }else {
//     saveBut.style.display = "none";
//     useBut.style.display = "none";
//   }
// }