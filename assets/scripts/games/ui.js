'use strict'

const store = require('../store.js')

// SUCCESSES ------------------------

const onGetGamesSuccess = responseData => {
  // Get games, store them, display stats
  console.log(responseData)
  $(".error-message").text("Got games!")
  $(".error-message").addClass('success')
  $(".error-message").removeClass('failure')
  $(".error-message").removeClass('hidden')
  //scoreboard
  const currGames = responseData.games
  store.user.games = currGames
  let gamesWon = 0
  console.log(store.user.games)
  for(let i = 0; i < currGames.length; i++) {
    console.log(currGames[i])
    if(currGames[i].over === true){
      gamesWon++
    }
    $(".dropdown").append(
      "<option value=" + `${currGames[i].id}` +
      ">" +`${currGames[i].id}` + "</option>"
    )
  }
  $(".scoreboard").html("User: " + currGames[0].player_x.email +
    "</br>" + "Games won: " + gamesWon
  )
} // onGetGamesSuccess

const onNewGameSuccess = responseData => {
  // Switch to new game (?)
  $(".error-message").text("New game created! Created game ID: " +
   responseData.game.id)
  $(".error-message").addClass('success')
  $(".error-message").removeClass('failure')
  $(".error-message").removeClass('hidden')
  store.game = responseData.game
} // onNewGameSuccess

const onFindGameSuccess = responseData => {
  // Switch to found game (?)
  console.log(responseData)
  $(".error-message").text("Game found!")
  $(".error-message").addClass('success')
  $(".error-message").removeClass('failure')
  $(".error-message").removeClass('hidden')
  store.game = responseData.game
} // onFindGameSuccess

const onUpdateGameSuccess = responseData => {
  // End turn, remove interactivity from board
  console.log(responseData)
  $(".error-message").text("Game updated!")
  $(".error-message").addClass('success')
  $(".error-message").removeClass('failure')
  $(".error-message").removeClass('hidden')
} // onUpdateGameSuccess

// FAILURES --------------------------

const onGetGamesFailure = responseData => {
  // Error msg
  $(".error-message").text("Failed to get games.")
  $(".error-message").addClass('failure')
  $(".error-message").removeClass('success')
  $(".error-message").removeClass('hidden')
} // onGetGamesFailure

const onNewGameFailure = responseData => {
  // Error msg
  $(".error-message").text("Failed to create new game.")
  $(".error-message").addClass('failure')
  $(".error-message").removeClass('success')
  $(".error-message").removeClass('hidden')
} // onNewGameFailure

const onFindGameFailure = responseData => {
  // Error msg
  $(".error-message").text("Failed to find game(s).")
  $(".error-message").addClass('failure')
  $(".error-message").removeClass('success')
  $(".error-message").removeClass('hidden')
} // onFindGameFailure

const onUpdateGameFailure = responseData => {
  // Error msg
  $(".error-message").text("Failed to update game.")
  $(".error-message").addClass('failure')
  $(".error-message").removeClass('success')
  $(".error-message").removeClass('hidden')
} // onUpdateGameFailure

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onFindGameSuccess,
  onFindGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
