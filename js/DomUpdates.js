import $ from "jquery";
import Clues from "./Clues";
import Data from "../data/data";
import Player from "./Player";
import Turn from "./Turn";

let domUpdates = {
  displayPlayersName(data) {
    const players = data.players.map(person => {
      return person.name;
    });
    return players;
  },

  displayCluesIds(clues) {
    let findClues = clues,
      cards;
    findClues.forEach((clue, index) => {
      $(".card").on("click", function(e) {
        $(e.target)
          .closest($(`#js-row-${index}`))
          .html(`<p>${clue.question}</p>`);
      });
    });
  },

  displayCategories(clues) {
    let findCat = clues.categories;
    findCat.forEach((category, index) => {
      $(`#js-category-${index}`).html(category[0]);
    });
  },

  displayInputFieldForGuess() {
    $(".input-field").html(`
            <input type="text" class="input-guess" id="js-input-guess-1" />
            <button class="guess-button" id="js-guess-button">
                Submit Guess
            </button>
        `);
  },

  giveFeedback(answer, id) {
    if (answer === true) {
      $("#js-show-answer").text("YOU GUESSED CORRECTLY!");
    } else {
      $("#js-show-answer").text("YOU GUESSED INCORRECTLY!");
    }
    $(`#${id}`).html("");
    $("#js-guess-input").val("");
    $(`#${id}`).off();
  },

  updatePlayerNames() {
    $("#js-player-one-name").text($("#js-input-player-1").val());
    $("#js-player-two-name").text($("#js-input-player-2").val());
    $("#js-player-three-name").text($("#js-input-player-3").val());
  },

  checkRoundEnd(cardNum) {
    if (cardNum === 0) {
      $("#js-jeopardy-board").hide();
      $(".player-info").hide();
      $("#js-show-answer").html("ROUND OVER!");
    }
  }
};

export default domUpdates;
