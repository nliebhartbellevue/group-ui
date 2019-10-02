let clues;
let game;

import Clues from "./Clues";
import Player from "./Player";
import Game from "./game";
import Round from "./round";
import Turn from "./Turn";
import domUpdates from "./DomUpdates";
import data from "../data/data";

clues = new Clues(data.data);
game = new Game(clues);

$("#js-jeopardy-board").hide();
$(".player-info").hide();

$("#js-names-button").click(function(e) {
  e.preventDefault();
  game.startRound();
  let player1 = new Player($("#js-input-player-1").val(), 1);
  let player2 = new Player($("#js-input-player-2").val(), 2);
  let player3 = new Player($("#js-input-player-3").val(), 3);
  game.players.push(player1, player2, player3);
  game.gameStart();
  domUpdates.displayCluesIds(clues);
  domUpdates.displayCategories(clues);
  domUpdates.updatePlayerNames();
  $("#js-input-names").hide();
  $(".heading").hide();
  $("#js-jeopardy-board").show();
  $(".player-info").show();
  $("#js-players-heading").text(game.round.currentTurn.currentPlayer.name);

  $(".card").on("click", function(e) {
    game.round.currentTurn.currentCard = $(e.target)[0].id;
    let question = $(e.target)[0].innerText;
    let clue = clues.cards.find(clue => {
      return clue.question === question;
    });
    game.round.currentTurn.currentClue = clue;
  });

  $("#js-guess-button").click(function(e) {
    e.preventDefault();
    let guess = $("#js-guess-input").val();
    let answer = game.round.currentTurn.evaluateGuess(guess);
    $("#js-player-one-points").text(game.players[0].score);
    $("#js-player-two-points").text(game.players[1].score);
    $("#js-player-three-points").text(game.players[2].score);
    $("#js-players-heading").text(game.round.currentTurn.currentPlayer.name);
  });
});
