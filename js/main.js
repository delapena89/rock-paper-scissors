// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var game = new Game();
  $('img').on('click',function(e){
    e.preventDefault();
    $('img').removeAttr('class');
    game.playerMove = ($(this).attr('id'));
    game.makeComputerMove();
    var winMessage = game.checkWinner();
    $('#results').text(winMessage);
    var computerImg = $('#'+game.computerMove).clone();
    $('#computerChoice').html(computerImg);
    $('#scores').text('Player Score: '+game.playerScore+'\nComputer Score: ' +game.computerScore);
    $(this).attr('class','highlight');
  });


});

var Game = function() {
  this.playerScore = 0;
  this.computerScore = 0;
  this.playerMove = '';
  this.computerMove = '';
};

Game.prototype.checkWinner = function() {
  if (this.playerMove === this.computerMove) {
    return "It\'s a tie!";
  }
  if (this.playerMove === 'paper' && this.computerMove === 'rock') {
    this.playerScore++;
    return "You win!";
  }
  if (this.playerMove === 'rock' && this.computerMove === 'scissors') {
    this.playerScore++;
    return "You win!";
  }
  if (this.playerMove === 'scissors' && this.computerMove === 'paper') {
    this.playerScore++;
    return "You win!";
  }
  if (this.playerMove === 'rock' && this.computerMove === 'paper') {
    this.computerScore++;
    return "You lose!";
  }
  if (this.playerMove === 'paper' && this.computerMove === 'scissors') {
    this.computerScore++;
    return "You lose!";
  }
  if (this.playerMove === 'scissors' && this.computerMove === 'rock') {
    this.computerScore++;
    return "You lose!";
  }
};

Game.prototype.makeComputerMove = function() {
  var random = Math.floor(Math.random()*3) +1;
  switch (random){
    case 1: this.computerMove = "rock";
            break;
    case 2: this.computerMove = "scissors";
            break;
    case 3: this.computerMove = "paper";
            break;
  }
};










