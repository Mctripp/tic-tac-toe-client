'use strict'

const store = require('../store.js')
const engine = require('../engine.js')

// SUCCESSES ------------------------

const onGetGamesSuccess = responseData => {
  // Get games, store them, display stats
  $('.error-message').text('Got games!')
  $('.error-message').addClass('success')
  $('.error-message').removeClass('failure')
  $('.error-message').removeClass('hidden')
  // scoreboard
  const currGames = responseData.games
  store.user.games = currGames
  let gamesWon = 0
  $('.dropdown').empty()
  $('.dropdown').append(
    '<option value="default">Select game by ID...</option>'
  )
  for (let i = 0; i < currGames.length; i++) {
    if (currGames[i].over === true) {
      gamesWon++
    } else {
      $('.dropdown').append(
        '<option value=' + `${currGames[i].id}` +
        '>' + `${currGames[i].id}` + '</option>'
      )
    }
  }
  $('.scoreboard').html('User: ' + currGames[0].player_x.email +
    '</br>' + 'Games played: ' + gamesWon
  )
  $('#find-game').removeClass('hidden')
} // onGetGamesSuccess

const onNewGameSuccess = responseData => {
  // Switch to new game (?)
  $('.tictactoe').removeClass('hidden')
  $('.error-message').text('New game created! Created game ID: ' +
   responseData.game.id)
  $('.error-message').addClass('success')
  $('.error-message').removeClass('failure')
  $('.error-message').removeClass('hidden')
  store.game = responseData.game
  $('img').addClass('hidden')
  $('img').attr('src', "")
  $('img').css('opacity', 1)
  $('.box').css('opacity', 1)
  $('.box').css('border', 'none')
  $('.box').unbind()
  $('.box').on('click', engine.markGrid)
  $('.box').on('click', engine.checkWin)
  engine.boardReset()
} // onNewGameSuccess

const onFindGameSuccess = responseData => {
  // Have to load in images on new game
  // Switch to found game (?)
  $('.tictactoe').removeClass('hidden')
  $('.error-message').text('Game found! ID: ' +
responseData.game.id)
  $('.error-message').addClass('success')
  $('.error-message').removeClass('failure')
  $('.error-message').removeClass('hidden')
  store.game = responseData.game
  $('img').addClass('hidden')
  $('img').attr('src', "")
  $('img').css('opacity', 1)
  $('.box').css('opacity', 1)
  $('.box').css('border', 'none')
  $('.box').unbind()
  $('.box').on('click', engine.markGrid)
  $('.box').on('click', engine.checkWin)
  engine.boardReset()
  engine.getBoard(store.game.cells)
} // onFindGameSuccess

const onUpdateGameSuccess = responseData => {
  // End turn, remove interactivity from board
  $('.error-message').text('Game updated!')
  $('.error-message').addClass('success')
  $('.error-message').removeClass('failure')
  $('.error-message').removeClass('hidden')
} // onUpdateGameSuccess

// FAILURES --------------------------

const onGetGamesFailure = responseData => {
  // Error msg
  $('.error-message').text('Failed to get games.')
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('success')
  $('.error-message').removeClass('hidden')
} // onGetGamesFailure

const onNewGameFailure = responseData => {
  // Error msg
  $('.error-message').text('Failed to create new game.')
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('success')
  $('.error-message').removeClass('hidden')
} // onNewGameFailure

const onFindGameFailure = responseData => {
  // Error msg
  $('.error-message').text('Failed to find game(s).')
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('success')
  $('.error-message').removeClass('hidden')
} // onFindGameFailure

const onUpdateGameFailure = responseData => {
  // Error msg
  $('.error-message').text('Failed to update game.')
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('success')
  $('.error-message').removeClass('hidden')
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
