

// let boardNum = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


// let boardData = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let start = 1;
// let block = 2;
// let purple = boardData[0][0];
// let orange = boardData[0][0];

// let boardTop = [0, 0, 0];
// let boardSides = [0, 1, 0];
// let boardBottom = [0, 0, 0];

let boardData = [1,2,3,4,5,6,7,8];

// let multPlays = 0;
// let purple = "b";
// let orang = "c";

let purpData = 0;
let orangData = 0;

let purpMove = 0;
let purPos = 0;

let turns = [0, 1];

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

let dropdownClick = document.getElementById(dropdown);

dropdown.addEventListener("click",'function'); {
  let selectedOption = dropdown.option;
  let audioURL = audioURLs[selectedOption];
  menuButton1 = audioURL;
  menuButton1.play();
}

//Test to see if it actually shows the data -- works
console.log(boardData[2][2]);

var num;
//Dice roll function
function diceRoll(){
  num = Math.floor(Math.random()*6)+1;
  document.getElementById("diceShow2").innerHTML = num;
  console.log("Dice rolled a " + num);
  movement();
}

function movement() { //WORKS IT WORKS MOSTLY WOOHOO
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
  console.log("Purple has moved");
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




  //if(boardData[0] == 1){
  //   document.getElementById("cell1").className = "cell purpal";
  // } else if(boardData[1] == 1){
  //   document.getElementById("cell2").className = "cell purpal";
  // } else if(boardData[2] == 1){
  //   document.getElementById("cell3").className = "cell purpal";
  // } else if(boardData[3] == 1){
  //   document.getElementById("cell4").className = "cell purpal";
  // } else if(boardData[4] == 1){
  //   document.getElementById("cell5").className = "cell purpal";
  // } else if(boardData[5] == 1){
  //   document.getElementById("cell6").className = "cell purpal";
  // } else if(boardData[6] == 1){
  //   document.getElementById("cell7").className = "cell purpal";
  // } else if(boardData[7] == 1){
  //   document.getElementById("cell8").className = "cell purpal";
  // }
  // if(boardData[0] == 2){
  //   document.getElementById("cell1").className = "cell orang";
  // } else if(boardData[1] == 2){
  //   document.getElementById("cell2").className = "cell orang";
  // } else if(boardData[2] == 2){
  //   document.getElementById("cell3").className = "cell orang";
  // } else if(boardData[3] == 2){
  //   document.getElementById("cell4").className = "cell orang";
  // } else if(boardData[4] == 2){
  //   document.getElementById("cell5").className = "cell orang";
  // } else if(boardData[5] == 2){
  //   document.getElementById("cell6").className = "cell orang";
  // } else if(boardData[6] == 2){
  //   document.getElementById("cell7").className = "cell orang";
  // } else if(boardData[7] == 2){
  //   document.getElementById("cell8").className = "cell orang";
  // }
  // if(boardData[0] == 3){
  //   document.getElementById("cell1").className = "cell purorang";
  // } else if(boardData[1] == 3){
  //   document.getElementById("cell2").className = "cell purorang";
  // } else if(boardData[2] == 3){
  //   document.getElementById("cell3").className = "cell purorang";
  // } else if(boardData[3] == 3){
  //   document.getElementById("cell4").className = "cell purorang";
  // } else if(boardData[4] == 3){
  //   document.getElementById("cell5").className = "cell purorang";
  // } else if(boardData[5] == 3){
  //   document.getElementById("cell6").className = "cell purorang";
  // } else if(boardData[6] == 3){
  //   document.getElementById("cell7").className = "cell purorang";
  // } else if(boardData[7] == 3){
  //   document.getElementById("cell8").className = "cell purorang";
  // }