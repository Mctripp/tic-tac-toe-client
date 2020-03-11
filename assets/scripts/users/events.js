'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

//Handle all clicks, form submissions, etc.:

// USERS -------------------

const onSignUp = event => {
  event.preventDefault()

  api.signUp()
  // If succeed:
    .then(ui.onSignUpSuccess)
  // If fail:
    .catch(ui.onSignUpFailure)
} //onSignUp

const onSignIn = event => {
  event.preventDefault()

  api.signIn()
  // If succeed:
    .then(ui.onSignInSuccess)
  // If fail:
    .catch(ui.onSignInFailure)
} //onSignIn

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
  // If succeed:
    .then(ui.onSignOutSuccess)
  // If fail:
    .catch(ui.onSignOutFailure)
} //onSignOut

const onChangePassword = event => {
  event.preventDefault()

  api.changePassword()
  // If succeed:
    .then(ui.onChangePasswordSuccess)
  // If fail:
    .catch(ui.onChangePasswordFailure)
} //onChangePassword

// GAMES -------------------

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
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetGames,
  onNewGame,
  onFindGame,
  onUpdateGame
}
