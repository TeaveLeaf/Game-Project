

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

let boardData = [3,0,0,0,0,0,0,0,0];

let multPlays = 3;
let purple = 1;
let orang = 2;

let purpData = 0; //Start at (0,0)
let orangData = 0;

let purpMove;
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

//Test to see if it actually shows the data -- works
console.log(boardData[2][2]);

var num;
//Dice roll function
function diceRoll(){
  num = Math.floor(Math.random()*6)+1;
  document.getElementById("diceShow2").innerHTML = num;
  console.log("Dice Rolled");
  console.log("Dice got: " + num);
}

function movement() {
  purpPos = boardData[num];
}

function updateBoard() {
  if(boardData[0] == 3){
    document.getElementById("cell1").className = "cell purorang";
  } else if(boardData[2] == 3){
    document.getElementById("cell2").className = "cell purorang";
  } else if(boardData[3] == 3){
    document.getElementById("cell3").className = "cell purorang";
  } else if(boardData[4] == 3){
    document.getElementById("cell4").className = "cell purorang";
  } else if(boardData[5] == 3){
    document.getElementById("cell5").className = "cell purorang";
  } else if(boardData[6] == 3){
    document.getElementById("cell6").className = "cell purorang";
  } else if(boardData[7] == 3){
    document.getElementById("cell7").className = "cell purorang";
  } else if(boardData[8] == 3){
    document.getElementById("cell8").className = "cell purorang";
  }
  if(boardData[1] == 1){
    document.getElementById("cell1").className = "cell purp";
  } else if(boardData[2] == 1){
    document.getElementById("cell2").className = "cell purp";
  } else if(boardData[3] == 1){
    document.getElementById("cell3").className = "cell purp";
  } else if(boardData[4] == 1){
    document.getElementById("cell4").className = "cell purp";
  } else if(boardData[5] == 1){
    document.getElementById("cell5").className = "cell purp";
  } else if(boardData[6] == 1){
    document.getElementById("cell6").className = "cell purp";
  } else if(boardData[7] == 1){
    document.getElementById("cell7").className = "cell purp";
  } else if(boardData[8] == 1){
    document.getElementById("cell8").className = "cell purp";
  }
  if(boardData[1] == 2){
    document.getElementById("cell1").className = "cell orang";
  } else if(boardData[2] == 2){
    document.getElementById("cell2").className = "cell orang";
  } else if(boardData[3] == 2){
    document.getElementById("cell3").className = "cell orang";
  } else if(boardData[4] == 2){
    document.getElementById("cell4").className = "cell orang";
  } else if(boardData[5] == 2){
    document.getElementById("cell5").className = "cell orang";
  } else if(boardData[6] == 2){
    document.getElementById("cell6").className = "cell orang";
  } else if(boardData[7] == 2){
    document.getElementById("cell7").className = "cell orang";
  } else if(boardData[8] == 2){
    document.getElementById("cell8").className = "cell orang";
  }
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







// different ways ive tried making the gameboard that did not work


//codes r mostly from tuts
// let player = 1;

// const cellElements = document.querySelectorAll(".cell");

// cellElements.forEach((cell, index) => {
//   cell.addEventListener("click", () => {
//     console.log(index);
//   });
// });

// // console.log(cellElements);
// function palceMarker(index) {
//   let col = index % 3
//   let row = (index - col) / 3
//   // if(boardData[row][col] ==0)
//   boardData[row][col] = 1;
//   player *= -1;
//   console.log("boardData")
// }


// let player = 1;

// const cellElements = document.getElementsByClassName(".cell");

// console.log(boardData);



// const boardGame = document.querySelector('#testBoard')
// const SQUARES_NUMBER = 648

// for (let i = 0; i < SQUARES_NUMBER; i ++) {
//   const square = document.createElement('div')
//   square.classList.add('square')

//   square.addEventListener('mouseover', () => setColor)
// }



// function setup() {
//   create(400,400);

//   let resolution = 100;
//   let cols = width / resolution;
//   let rows = height / resolution;
  
//   let x = 0;
//   let y = (rows-1)*resolution;
//   for (let i = 0; i < cols * rows; i++) {
//     let tile = new Tile(100, 100, resolution, i + 1);
//     tiles.push(tile);
//     x = x + (resolution * dir);
//     if (x >= width) {
//       x -= resolution;
//       y -= resolution;
//       dir *= -1;
//     }
//     if (x <= 0) {
//       x = resolution;
//       y -= resolution;
//       dir *= -1;
//     }
//   }


// }

// function draw() {
//   background(51);

//   for (let tile of tiles){
//     tile.show();
//   }

// }

// let boardData = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ];



// var boardIndex = 0;



// let normalArray= [0,1,2,3,4,5,6,7,8];
// let multiArray = [[0,1,2],[3,4,5],[6,7,8]];
// let multiArray = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8]
// ];

// objectTest.data = stuff;    what ?? D:


//Movement
// function move () { //maybe my logic is wrong and i need to do it a diff way ??
//   let timesPlayed;
//   timesPlayed = timesPlayed + 1;
//   let first = 0;
//   let second = 0;

//   let firstA = 0;
//   let secondA = 0;

//   if (timesPlayed >= 1){
//     first = bow;
//     second = wow;
//   }
  
//   for (let i = 0; i < purpMove; i++) {
//     if (second <= 0) { //x increases first
//       first = first + 1;
//       console.log("FIRST " + first);
//     }
//     // firstA = firstA + 1;
//     if(first == 2){ //x stops at 2
//       first = first + 0;
//       firstA = first + 1;
//       // firstA = firstA + 0;
//       // second = second + 1;
//       // secondA = secondA + 1;
//       console.log("Test 1: " + first);
//     }
//     if(firstA == 4){ //y will start increasing when firstA hits 3
//       first = first + 0;
//       firstA = firstA + 0;
//       second = second + 1;
//       // secondA = secondA + 0;
//       console.log("Test 2: " + second);
//     }
//     if(second == 2){ //y will stop increasing when it hits 2
//       second = second + 0;
//       secondA = second + 1;
//       // secondA = secondA + 0;
//       console.log("Test 3: " + second);
//     }
//     if(first == 2 && secondA == 4) { //x will decrease after y
//       first = first - 1;
//       firstA = firstA - 1;
//       // firstA = firstA - 1;
//       console.log("Test 4: " + first);
//     }
//     if(first == 0 && firstA == 0) {
//       second = second - 1;
//       console.log("Test 5: " + second);
//     }
//   } //for loop end

//   let bow = first;
//   let wow = second;
//   console.log(first);
//   console.log(second);
// // console.log("Purple's position is: " + "(" + first + "," + second + ")");
// }


// function movement () {
//   let x = 0;
//   let y = 0;
//   var soe;
//   for (let i = 0; i < num; i++) {
//     if(x < 2) {
//       x = x + 1;
//     } else if(x == 2) {
//       x = x
//     }
//     if(y == 0){
//       y = y + 1
//       // if(num = 1){
//       //   y = y + 1;
//       // } else if(y == 1) {
//       //   y = y + 1;
//       // }
//       // if(num = 1){
//       //   if(y == 0){
//       //     y = y + 1;
//       //   }
//       // }
//     } else if(y == 1) {
//       y = y + 1;
//     } else if(y == 2) {
//       y = y
//       soe = soe + 1;
//       if(soe == 2) {
//         soe = 0;
//         y = - 1;
//       }
//     }
//   }
//   purple = boardData[x][y];
//   console.log("Purple's position is: " + "(" + x + "," + y + ")");
// }



// function purpleMove() {
//   let porple = 0;
//   // for (let i = 0; i < purpMove; i++) {
//   //   porple = porple + 1;
//   // }
//   purpMove = num + porple;
//   console.log("Purple needs to move: " + purpMove);
//   purSpace = purSpace + purpMove;
//   for (let i = 0; i < purSpace; i++) {
//     boardNum = boardNum[i];
//     if(boardNum > 6) {
//       boardNum = boardNum[0];
//       purSpace = 0;
//     }
//   }
//   console.log(purSpace);
//   console.log(boardNum);
// }