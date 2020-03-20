'use strict'

const store = require('./../store.js')
const usersApi = require('./api.js')
const gamesApi = require('./../games/api.js')
const gamesUi = require('./../games/ui.js')
const gamesEvents = require('./../games/events.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// Not explaining these next few functions in depth, names
// explain them well enough

const resetPwForms = () => {
  $("input").val("")
  $(".sign-in-pw").attr("type","text")
  $(".sign-up-pw").attr("type","text")
  $(".sign-up-confirm").attr("type","text")
  $(".change-pw-pw").attr("type","text")
  $(".change-pw-confirm").attr("type","text")
} //resetPwForms

const swapPage1To2 = () => {
  $('.welcome-text').addClass('hidden')
  $('.page1').addClass('hidden')
  $('.page1').attr('disabled',true)
  $('.page2').removeClass('hidden')
  $('.page2').removeAttr('disabled')
  $('.scoreboard').removeClass('hidden')
  $('.error-message').addClass('hidden')
  $('.game-options').removeClass('hidden')
} //swapPage1To2

const swapPage2To1 = () => {
  $('.welcome-text').removeClass('hidden')
  $('.page2').addClass('hidden')
  $('.page2').attr('disabled',true)
  $('.page1').removeClass('hidden')
  $('.page1').removeAttr('disabled')
  $('.tictactoe').addClass('hidden')
  $('.game-options').addClass('hidden')
  $('.scoreboard').addClass('hidden')
  $('.scoreboard').addClass('hidden')
  $('.error-message').addClass('hidden')
  $('.game-options').addClass('hidden')
  $('#find-game').addClass('hidden')
} //swapPage1To2

const displaySuccessMsg = msg => {
  $('.error-message').text(msg)
  $('.error-message').addClass('success')
  $('.error-message').removeClass('failure')
  $('.error-message').removeClass('hidden')
} // displaySuccessMsg

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  // Nothing (?)
  resetPwForms()
  displaySuccessMsg("Sign up success, welcome " +
  responseData.user.email + ".")

  // Potential auto sign in below

  // store.user = responseData.user
  // usersApi.signIn(store.user)
  // swapPage1To2()
  // $('.error-message').removeClass('hidden')
  // $('.error-message').removeClass('failure')
  // $('.error-message').addClass('success')
  // $('.error-message').text('Sign up success! Welcome, ' + responseData.user.email + "!")
} // onSignUpSuccess

const onSignInSuccess = responseData => {
  // Reset forms
  resetPwForms()
  // Store user data
  store.user = responseData.user
  // Swap pages
  swapPage1To2()
  // Display info msg
  displaySuccessMsg("Sign in success, welcome " +
  responseData.user.email + ".")
} // onSignInSuccess

const onSignOutSuccess = responseData => {
  // Reset forms
  resetPwForms()
  // Reset scoreboard for next login
  $(".scoreboard").text("Create a new game, then click \"Get games\" to see user info.")
  // Swap pages
  swapPage2To1()
  // Display info msg
  displaySuccessMsg("Sign out success.")
} // onSignOutSuccess

const onChangePasswordSuccess = responseData => {
  // Reset forms
  resetPwForms()
  // Display info msg
  displaySuccessMsg("Password changed successfully.")
} // onChangePasswordSuccess

// FAILURES -------------------------

const displayFailureMsg = msg => {
  $('.error-message').text(msg)
  $('.error-message').removeClass('success')
  $('.error-message').addClass('failure')
  $('.error-message').removeClass('hidden')
} // displayFailureMsg

const onSignUpFailure = responseData => {
  // Reset forms
  resetPwForms()
  // Display text for sign up failure
  displayFailureMsg('Sign up failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignUpFailure

const onSignInFailure = responseData => {
  // Reset forms
  resetPwForms()
  // Display text for sign in failure
  displayFailureMsg('Sign in failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignInFailure

const onSignOutFailure = responseData => {
  // Reset forms
  resetPwForms()
  // Display text for sign out failure
  displayFailureMsg('Sign out failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignOutFailure

const onChangePasswordFailure = responseData => {
  // Reset forms
  resetPwForms()
  // Display text for change pw failure
  displayFailureMsg('Change password failure - ' +
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
