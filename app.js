

// trying to make the board ?? idk what im doing

// let board = [red,blue,red,blue,red,blue,red,blue,red,blue,red,blue,red,blue,red,blue];

// var red = document.getElementById("test");
// var blue = document.getElementById("test2");

let board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


//function makes thingy appear and or disappear
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
      z.style.display = "flex";
    }
  }