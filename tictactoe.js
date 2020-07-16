var turn;

alert("you can change player name by clicking on it")
$("#pname1").on('click',function(){
  var player1 = prompt("Enter player 1 name: ");
  this.textContent = player1;
});
$("#pname2").on('click',function(){
  var player2 = prompt("Enter player 2 name: ");
  this.textContent = player2;
});

//new game function

$('button').click(function(){
  turn = Math.floor(Math.random() * 2);
  var tdlist = $('table td')
    tdlist.css('background','white');
    tdlist.text("");
    $('table').css('pointerEvents','auto');
    if(turn){
      $('#p2').text("Your turn!!")
      $('#p1').text("")
    }
    else {
      $('#p1').text("Your turn!!")
      $('#p2').text("")
    }
    $('#w2').text("")
    $('#w1').text("")
    moves = 0;
});
var moves = 0;
$('td').on('click',function(){

  if ($(this).text() == "") {
    if(turn){
      $(this).css('background','red');
      $(this).text("O");
    }
    else{
      $(this).css('background','blue');
      $(this).text("X");
    }
    turn = (turn+1)%2;
    if(turn){
      $('#p2').text("Your turn!!")
      $('#p1').text("")
    }
    else {
      $('#p1').text("Your turn!!")
        $('#p2').text("")
    }
    moves++;

    if(isFinish()){
      $('table').css('pointerEvents','none');
      $('#p2').text("")
      $('#p1').text("")
      if(turn)
        $('#w1').text("WON")
      else {
        $('#w2').text("WON")
      }
    }
    else if(moves == 9){
        $('#w2').text("Draw")
        $('#w1').text("Draw")
    }
  }
  else{
    alert("This box is already selected!! select some other")
  }

});

function isFinish(){
  var list = $('table td')
  if(list[0].textContent == list[1].textContent && list[0].textContent == list[2].textContent && list[0].textContent != "")
  return true;
  if(list[0].textContent == list[3].textContent && list[0].textContent == list[6].textContent && list[0].textContent != "")
  return true;
  if(list[0].textContent == list[4].textContent && list[0].textContent == list[8].textContent && list[0].textContent != "")
  return true;
  if(list[4].textContent == list[1].textContent && list[4].textContent == list[7].textContent && list[4].textContent != "")
  return true;
  if(list[2].textContent == list[5].textContent && list[8].textContent == list[2].textContent && list[5].textContent != "")
  return true;
  if(list[2].textContent == list[4].textContent && list[4].textContent == list[2].textContent && list[4].textContent != "")
  return true;
  if(list[4].textContent == list[3].textContent && list[3].textContent == list[5].textContent && list[3].textContent != "")
  return true;
  if(list[6].textContent == list[7].textContent && list[7].textContent == list[6].textContent && list[6].textContent != "")
  return true;
  return false;
}
