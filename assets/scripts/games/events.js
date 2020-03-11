'use strict'

const onGetGames = event => {
  event.preventDefault()

  api.getGames()
  // If succeed:
    .then(ui.onGetGamesSuccess)
  // If fail:
    .catch(ui.onGetGamesFailure)
} //onGetGames

const onNewGame = event => {
  event.preventDefault()

  api.newGame()
  // If succeed:
    .then(ui.onNewGameSuccess)
  // If fail:
    .catch(ui.onNewGameFailure)
} //onNewGame

const onFindGame = event => {
  event.preventDefault()

  api.findGame()
  // If succeed:
    .then(ui.onFindGameSuccess)
  // If fail:
    .catch(ui.onFindGameFailure)
} //onFindGame

const onUpdateGame = event => {
  event.preventDefault()

  api.updateGames()
  // If succeed:
    .then(ui.onUpdateGameSuccess)
  // If fail:
    .catch(ui.onUpdateGameFailure)
} //onUpdateGame

module.exports = {
  onGetGames,
  onNewGame,
  onFindGame,
  onUpdateGame
}
