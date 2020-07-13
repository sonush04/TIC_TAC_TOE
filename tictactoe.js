// first turn

var turn = Math.floor(Math.random() * 2);
var t = document.getElementById("one");

 var mat;
 var map = {one: [0,0], two: [0,1], three: [0,2], four: [1,0], five:[1,1], six:[1,2], seven:[2,0], eight:[2,1], nine: [2,2]};

var finish = false;
var moves = 0;
alert("you can change player name by clicking on it")
$("#pname1").on('click',function(){
  var player1 = prompt("Enter player 1 name: ");
  this.textContent = player1;
});
$("#pname2").on('click',function(){
  var player2 = prompt("Enter player 2 name: ");
  this.textContent = player2;
});


$("button").on('click',function(){
  document.getElementById('mytable').style.pointerEvents = 'auto';
  for(n in map){
    var curr = document.getElementById(n)
    curr.textContent = "";
    curr.style.background = "white";
  }
  document.getElementById('w2').textContent = "";
  document.getElementById('w1').textContent = "";
  document.getElementById('p1').textContent = "";
  document.getElementById('p2').textContent = "";
  if(turn){
    document.getElementById('p1').textContent = "teri bari!!! chal!";
    document.getElementById('p2').textContent = "";
  }
  else{
    document.getElementById('p2').textContent = "teri bari!!! chal!";
    document.getElementById('p1').textContent = "";
  }
  mat = [[2,3,4],[5,7,6],[8,9,10]];
});

$("td").on('click',function(){
  var t = this.id;
  if(mat[map[t][0]][map[t][1]] != 0 && mat[map[t][0]][map[t][1]] != 1){
      if(turn){
        this.textContent = 'X';
        this.style.background = "blue";
      }
      else {
        this.textContent = 'O';
        this.style.background = "red";
      }
      moves++;
      mat[map[t][0]][map[t][1]] = turn;
      if(isFinish(map[t][0],map[t][1])){
        document.getElementById('mytable').style.pointerEvents = 'none';
        if(turn){
          document.getElementById('w1').textContent = "WON";
          document.getElementById('w2').textContent = "Better luck next time!!! khelna sheekh ke aa ja !!!";
        }
        else{
          document.getElementById('w2').textContent = "WON";
          document.getElementById('w1').textContent = "Better luck next time!!! khelna sheekh ke aa ja !!!";
        }
      }
      else{
        turn = (turn+1)%2;
        if(moves == 9){
          document.getElementById('w2').textContent = "Nahi jeeta re tu";
          document.getElementById('w1').textContent = "Nahi jeeta re tu";
          document.getElementById('mytable').style.pointerEvents = 'none';
          document.getElementById('p2').textContent = "";
          document.getElementById('p1').textContent = "";
        }
        else if(turn){
          document.getElementById('p1').textContent = "teri bari!!! chal!";
          document.getElementById('p2').textContent = "";
        }
        else{
          document.getElementById('p2').textContent = "teri bari!!! chal!";
          document.getElementById('p1').textContent = "";
        }
      }

    }
    else{
      alert("You cant select this box!! Try another one.");

    }

});

function isFinish( x, y){
  if((x+y)%2 == 1){
    if(mat[x][0] == mat[x][1] && mat[x][2] == mat[x][1]){
      return true;
    }
    if(mat[0][y] == mat[1][y] && mat[2][y] == mat[1][y]){
      return true;
    }
  }
  else{
    if(mat[x][0] == mat[x][1] && mat[x][2] == mat[x][1]){
      return true;
    }
    if(mat[0][y] == mat[1][y] && mat[2][y] == mat[1][y]){
      return true;
    }
    if(mat[0][0] == mat[1][1] && mat[2][2] == mat[1][1]){
      return true;
    }
    if(mat[0][2] == mat[1][1] && mat[2][0] == mat[1][1]){
      return true;
    }
  }
}
