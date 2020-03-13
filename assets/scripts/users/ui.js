'use strict'

const store = require('./../store.js')
const gamesApi = require('./../games/api.js')
const gamesUi = require('./../games/ui.js')
const gamesEvents = require('./../games/events.js')

const resetPwForms = () => {
  $(".sign-in-pw").val("password")
  $(".sign-up-pw").val("password")
  $(".sign-up-confirm").val("confirm password")
  $(".change-pw-pw").val("password")
  $(".change-pw-confirm").val("new password")
  $(".sign-up-pw").attr("type","text")
  $(".sign-up-confirm").attr("type","text")
  $(".change-pw-pw").attr("type","text")
  $(".change-pw-confirm").attr("type","text")
}

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  // Nothing (?)
  resetPwForms()
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('failure')
  $('.error-message').addClass('success')
  $('.error-message').text('Sign up success! Welcome, ' + responseData.user.email + "!")
} // onSignUpSuccess

const onSignInSuccess = responseData => {
  resetPwForms()
  store.user = responseData.user

  // Hide welcome text, sign iwn/up form

  $('.welcome-text').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  // Show board, sign out/change pw form, scoreboard
  $('.scoreboard').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('.game-options').removeClass('hidden')

  $('.error-message').addClass('hidden')
} // onSignInSuccess

const onSignOutSuccess = responseData => {
  resetPwForms()
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
  resetPwForms()
  // Probably no UI change for this. Maybe dispay whether tht it was success (popup?)
  $('.error-message').removeClass('failure')
  $('.error-message').addClass('success')
  $('.error-message').removeClass('hidden')
  $('.error-message').text("Password changed successfully!")
} // onChangePasswordSuccess

// FAILURES -------------------------

const onSignUpFailure = responseData => {
  resetPwForms()
  // Display text for sign up failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Sign up failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignUpFailure

const onSignInFailure = responseData => {
  resetPwForms()
  // Display text for sign in failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Sign in failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignInFailure

const onSignOutFailure = responseData => {
  resetPwForms()
  // Display text for sign out failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Sign out failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignOutFailure

const onChangePasswordFailure = responseData => {
  resetPwForms()
  // Display text for change pw failure
  $('.error-message').removeClass('hidden')
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').text('Change password failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
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
