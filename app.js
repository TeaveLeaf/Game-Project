let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];









//Function makes thingy appear and or disappear
function visibility() {
    var x = document.getElementById("startgm");
    var y = document.getElementById("playerbrd");
    var z = document.getElementById("board");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
      z.style.display = "block";
    }
    console.log("Game started");
}

//Dice roll function
function diceRoll(){
    var num;
    num = Math.floor(Math.random()*6)+1;
    document.getElementById("diceShow2").innerHTML = num;
    console.log("Dice Rolled");
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


//codes r mostly from tuts, idk why i am not understanding
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