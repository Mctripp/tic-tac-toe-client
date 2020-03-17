'use strict'

const store = require('./../store.js')
const usersApi = require('./api.js')
const gamesApi = require('./../games/api.js')
const gamesUi = require('./../games/ui.js')
const gamesEvents = require('./../games/events.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const resetPwForms = () => {
  $(".sign-in-pw").val("password")
  $(".sign-up-pw").val("password")
  $(".sign-up-confirm").val("confirm password")
  $(".change-pw-pw").val("password")
  $(".change-pw-confirm").val("new password")
  $(".sign-in-pw").attr("type","text")
  $(".sign-up-pw").attr("type","text")
  $(".sign-up-confirm").attr("type","text")
  $(".change-pw-pw").attr("type","text")
  $(".change-pw-confirm").attr("type","text")
}

const swapPage1To2 = () => {
  $('.welcome-text').addClass('hidden')
  $('.page1').addClass('faded')
  $('.page1').attr('disabled',true)
  $('.page2').removeClass('faded')
  $('.page2').removeAttr('disabled')
  $('.error-message').addClass('hidden')
  $('.scoreboard').removeClass('hidden')
  $('.game-options').removeClass('hidden')
} //swapPage1To2

const swapPage2To1 = () => {
  $('.welcome-text').removeClass('hidden')
  $('.page2').addClass('faded')
  $('.page2').attr('disabled',true)
  $('.page1').removeClass('faded')
  $('.page1').removeAttr('disabled')
  $('.tictactoe').addClass('hidden')
  $('.game-options').addClass('hidden')
  $('.scoreboard').addClass('hidden')
  $('.error-message').addClass('hidden')
  $('.scoreboard').addClass('hidden')
  $('.game-options').addClass('hidden')
} //swapPage1To2

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  // Nothing (?)
  resetPwForms()
  // store.user = responseData.user
  // usersApi.signIn(store.user)
  // swapPage1To2()
  // $('.error-message').removeClass('hidden')
  // $('.error-message').removeClass('failure')
  // $('.error-message').addClass('success')
  // $('.error-message').text('Sign up success! Welcome, ' + responseData.user.email + "!")
} // onSignUpSuccess

const onSignInSuccess = responseData => {
  resetPwForms()
  store.user = responseData.user

  swapPage1To2()
} // onSignInSuccess

const onSignOutSuccess = responseData => {
  resetPwForms()
  $(".scoreboard").text("Create a new game, then click \"Get games\" to see user info.")
  swapPage2To1()
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
