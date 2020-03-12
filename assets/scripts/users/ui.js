'use strict'

const store = require('./../store.js')
const gamesApi = require('./../games/api.js')
const gamesUi = require('./../games/ui.js')
const gamesEvents = require('./../games/events.js')

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  // Nothing (?)
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('failure')
  $('.error-message').addClass('success')
  $('.error-message').text('Sign up success!')
} // onSignUpSuccess

const onSignInSuccess = responseData => {
  store.user = responseData.user
  // const otherData = gamesApi.getGames()
  // const otherOtherData = otherData//.responseJSON//.games
  // console.log(otherData)
  // console.log(otherOtherData)
  // Hide welcome text, sign iwn/up form
  $('.welcome-text').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  // Show board, sign out/change pw form, scoreboard
  $(".scoreboard").removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('.game-options').removeClass('hidden')

  $('.error-message').addClass('hidden')
} // onSignInSuccess

const onSignOutSuccess = responseData => {
  // Show welcome text, sign in/up form
  $('.welcome-text').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  // Hide board, sign out/change pw form, scoreboard
  $('.tictactoe').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('.game-options').addClass('hidden')

  $('.error-message').addClass('hidden')
} // onSignOutSuccess

const onChangePasswordSuccess = responseData => {
  // Probably no UI change for this. Maybe dispay whether tht it was success (popup?)
  $('.error-message').addClass('hidden')
} // onChangePasswordSuccess

// FAILURES -------------------------

const onSignUpFailure = responseData => {
  // Display text for sign up failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Sign up failure - ' +
  responseData.responseJSON.status + ': ' +
  responseData.responseJSON.error)
} // onSignUpFailure

const onSignInFailure = responseData => {
  // Display text for sign in failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Sign in failure - ' +
  responseData.responseJSON.status + ': ' +
  responseData.responseJSON.error)
} // onSignInFailure

const onSignOutFailure = responseData => {
  // Display text for sign out failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Sign out failure - ' +
  responseData.responseJSON.status + ': ' +
  responseData.responseJSON.error)
} // onSignOutFailure

const onChangePasswordFailure = responseData => {
  // Display text for change pw failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Change password failure - ' +
  responseData.responseJSON.status + ': ' +
  responseData.responseJSON.error)
} // onChangePasswordFailure

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
