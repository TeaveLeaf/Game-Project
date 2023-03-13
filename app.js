

let board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



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
      z.style.display = "flex";
    }
  }

  //Dice roll function
  function diceRoll(){
    var num;
    num = Math.floor(Math.random()*7)+1;
    document.getElementById("diceShow2").innerHTML = num;
  }