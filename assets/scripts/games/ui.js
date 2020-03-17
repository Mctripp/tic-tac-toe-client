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

const resetBoardUi = () => {
  $('img').addClass('hidden')
  $('img').attr('src', "")
  $('img').css('opacity', 1)
  $('.box').css('opacity', 1)
  $('.box').css('border', 'none')
  $('.box').unbind()
  $('.box').on('click', engine.checkWin)
  $('.box').children().unbind()
  $('.box').children().on('click', engine.invalidPick)
  engine.boardReset()
} // resetBoardUi

const resetEvents = () => {
  $('.box').unbind()
  $('.box').on('click', engine.checkWin)
  $('.box').children().unbind()
  $('.box').children().on('click', engine.invalidPick)
}

const calcUserStats = (currGames, isNewGame) => {
  if(!isNewGame){
    $('.dropdown').empty()
    $('.dropdown').append(
      '<option value="default">Select game by ID...</option>'
    )
    gamesPlayed = 0
    gamesFinished = 0
    for (let i = 0; i < currGames.length; i++) {
      if (currGames[i].over === true) {
        gamesFinished++
      } else {
        gamesPlayed++
        $('.dropdown').append(
          '<option value=' + `${currGames[i].id}` +
          '>' + `${currGames[i].id}` + '</option>'
        )
      } // if
    } // for
  } else {
    gamesPlayed++
    $('.dropdown').append(
      '<option value=' + `${store.game.id}` +
      '>' + `${store.game.id}` + '</option>'
    )
  }
  $('.scoreboard').html('User: ' + currGames[0].player_x.email +
    '</br>' + 'Games in progress: ' + gamesPlayed +
    '</br>Games finished: ' + gamesFinished
  )
} // calcUserStats

const onGetGamesSuccess = responseData => {
  // Get games, store them, display stats
  displaySuccessMsg('Got games!')
  // scoreboard
  const currGames = responseData.games
  store.user.games = currGames
  calcUserStats(currGames, false)
  $('#find-game').removeClass('hidden')
} // onGetGamesSuccess

const onNewGameSuccess = responseData => {
  // Switch to new game (?)
  $('.tictactoe').removeClass('hidden')
  displaySuccessMsg('New game created! Created game ID: ' +
   responseData.game.id)
   resetBoardUi()
   store.game = responseData.game
   //increase gamesPlayed count
   if(store.user.games !== undefined) {
     const currGames = store.user.games
     calcUserStats(currGames, true)
   }
} // onNewGameSuccess

const onFindGameSuccess = responseData => {
  // Have to load in images on new game
  // Switch to found game (?)
  $('.tictactoe').removeClass('hidden')
  displaySuccessMsg('Game found! ID: ' + responseData.game.id)
  resetBoardUi()
  store.game = responseData.game
  const currGames = store.user.games
  calcUserStats(currGames, false)
  engine.getBoard(store.game.cells)
  resetEvents()
} // onFindGameSuccess

const onUpdateGameSuccess = responseData => {
  // End turn, remove interactivity from board
  displaySuccessMsg('Game update success!')
} // onUpdateGameSuccess

// FAILURES --------------------------

const displayFailMsg = msg => {
  $('.error-message').text(msg)
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('success')
  $('.error-message').removeClass('hidden')
} // displayFailMsg

const onGetGamesFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to get games.')
} // onGetGamesFailure

const onNewGameFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to create new game.')
} // onNewGameFailure

const onFindGameFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to find game(s).')
} // onFindGameFailure

const onUpdateGameFailure = responseData => {
  // Error msg
  displayFailMsg('Failed to update game.')
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
