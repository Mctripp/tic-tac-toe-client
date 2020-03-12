'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onGetGames = event => {
  event.preventDefault()

  api.getGames()
  // If succeed:
    .then(ui.onGetGamesSuccess)
  // If fail:
    .catch(ui.onGetGamesFailure)
} // onGetGames

const onNewGame = event => {
  event.preventDefault()

  api.newGame()
  // If succeed:
    .then(ui.onNewGameSuccess)
  // If fail:
    .catch(ui.onNewGameFailure)
} // onNewGame

const onFindGame = event => {
  event.preventDefault()
  const currVal = $('#find-game').children('select').val()
  console.log(currVal)

  api.findGame(currVal)
  // If succeed:
    .then(ui.onFindGameSuccess)
  // If fail:
    .catch(ui.onFindGameFailure)
} // onFindGame

const onUpdateGame = event => {
  event.preventDefault()
  const gameDelta = ''

  api.updateGame(gameDelta)
  // If succeed:
    .then(ui.onUpdateGameSuccess)
  // If fail:
    .catch(ui.onUpdateGameFailure)
} // onUpdateGame

module.exports = {
  onGetGames,
  onNewGame,
  onFindGame,
  onUpdateGame
}
