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

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
