'use strict'

const store = require('../store.js')
const engine = require('../engine.js')

let gamesPlayed = 0
let gamesFinished = 0

// SUCCESSES ------------------------

const displaySuccessMsg = msg => {
  $('.error-message').text(msg)
  $('.error-message').addClass('success')
  $('.error-message').removeClass('failure')
  $('.error-message').removeClass('hidden')
} // displaySuccessMsg

const resetEvents = () => {
  // This clears events on board items, then applies them again.
  // Events are removed on click in engine, so this is
  // Essentially part of a board reset.
  $('.box').unbind()
  $('.box').on('click', engine.checkWin)
  $('.box').children().unbind()
  $('.box').children().on('click', engine.invalidPick)
} //resetEvents

const resetBoardUi = () => {
  $('img').addClass('hidden')
  $('img').attr('src', "")
  $('img').css('opacity', 1)
  $('.box').css('opacity', 1)
  $('.box').css('border', 'none')
  resetEvents()
  engine.boardReset()
} // resetBoardUi

const calcUserStats = (currGames, isNewGame) => {
  if(!isNewGame){
    // Reload dropdown
    $('.dropdown').empty()
    $('.dropdown').append(
      '<option value="default">Select game by ID...</option>'
    )
    // Reset user stat counts
    gamesPlayed = 0
    gamesFinished = 0
    // Iterate over users games
    for (let i = 0; i < currGames.length; i++) {
      // Add over games to count
      if (currGames[i].over === true) {
        gamesFinished++
      // Else, add ongoing games to dropdown and count
      } else {
        gamesPlayed++
        $('.dropdown').append(
          '<option value=' + `${currGames[i].id}` +
          '>' + `${currGames[i].id}` + '</option>'
        )
      } // if
    } // for
  } else {
    // Add current new game to dropdown
    // (only appears after getGames so this is fine)
    gamesPlayed++
    $('.dropdown').append(
      '<option value=' + `${store.game.id}` +
      '>' + `${store.game.id}` + '</option>'
    )
  }
  // Update user info
  $('.scoreboard').html('User: ' + currGames[0].player_x.email +
    '</br>' + 'Games in progress: ' + gamesPlayed +
    '</br>Games finished: ' + gamesFinished
  )
} // calcUserStats

const onGetGamesSuccess = responseData => {
  // Get games, store them, display stats
  displaySuccessMsg('Got games!')
  const currGames = responseData.games
  store.user.games = currGames
  calcUserStats(currGames, false)
  $('#find-game').removeClass('hidden')
} // onGetGamesSuccess

const onNewGameSuccess = responseData => {
  // Switch to new game
  $('.tictactoe').removeClass('hidden')
  displaySuccessMsg('New game created! Created game ID: ' +
   responseData.game.id)
 resetBoardUi()
 store.game = responseData.game
 //Update user stats
 if(store.user.games !== undefined) {
   const currGames = store.user.games
   calcUserStats(currGames, true)
 }
} // onNewGameSuccess

const onFindGameSuccess = responseData => {
  // Have to load in images on new game
  // Switch to found game
  $('.tictactoe').removeClass('hidden')
  displaySuccessMsg('Game found! ID: ' + responseData.game.id)
  resetBoardUi()
  store.game = responseData.game
  const currGames = store.user.games
  calcUserStats(currGames, false)
  engine.getBoard(store.game.cells)
  // Need resetEvents after loading board and not the UI
  resetEvents()
} // onFindGameSuccess

// Not used
// const onUpdateGameSuccess = responseData => {
//   // End turn, remove interactivity from board
//   displaySuccessMsg('Game update success!')
// } // onUpdateGameSuccess

// FAILURES --------------------------

const displayFailMsg = msg => {
  $('.error-message').text(msg)
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('success')
  $('.error-message').removeClass('hidden')
} // displayFailMsg

const onGetGamesFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to get games, ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onGetGamesFailure

const onNewGameFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to create new game, ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onNewGameFailure

const onFindGameFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to find game(s), ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onFindGameFailure

const onUpdateGameFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to update game, ' +
  responseData.status + ': ' +
  responseData.statusText)
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
