'use strict'

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  // Do we auto sign-in? if yes:
  //Hide welcome text, sign in/up form
  $(".welcome-text").addClass("hidden")
  $("#sign-up").addClass("hidden")
  $("#sign-in").addClass("hidden")
  //Show board, sign out/change pw form, scoreboard
  $(".tictactoe").removeClass("hidden")
  $("#change-password").removeClass("hidden")
  $("#sign-out").removeClass("hidden")
  $(".scoreboard").removeClass("hidden")

  $(".error-message").addClass("hidden")
} //onSignUpSuccess

const onSignInSuccess = responseData => {
  //Hide welcome text, sign in/up form
  $(".welcome-text").addClass("hidden")
  $("#sign-up").addClass("hidden")
  $("#sign-in").addClass("hidden")
  //Show board, sign out/change pw form, scoreboard
  $(".tictactoe").removeClass("hidden")
  $("#change-password").removeClass("hidden")
  $("#sign-out").removeClass("hidden")
  $(".scoreboard").removeClass("hidden")

  $(".error-message").addClass("hidden")
} //onSignInSuccess

const onSignOutSuccess = responseData => {
  //Show welcome text, sign in/up form
  $(".welcome-text").removeClass("hidden")
  $("#sign-up").removeClass("hidden")
  $("#sign-in").removeClass("hidden")
  //Hide board, sign out/change pw form, scoreboard
  $(".tictactoe").addClass("hidden")
  $("#change-password").addClass("hidden")
  $("#sign-out").addClass("hidden")
  $(".scoreboard").addClass("hidden")

  $(".error-message").addClass("hidden")
} //onSignOutSuccess

const onChangePasswordSuccess = responseData => {
  //Probably no UI change for this. Maybe dispay whether tht it was success (popup?)
  $(".error-message").addClass("hidden")
} //onChangePasswordSuccess

// FAILURES -------------------------

const onSignUpFailure = responseData => {
  //Display text for sign up failure
  $(".error-message").removeClass("hidden")
  $(".error-message").removeClass("success")
  $(".error-message").addClass("failure")
  $(".error-message").text("Sign up failure - " +
  responseData.responseJSON.status + ": " +
  responseData.responseJSON.error)
} //onSignUpFailure

const onSignInFailure = responseData => {
  //Display text for sign in failure
  $(".error-message").removeClass("hidden")
  $(".error-message").removeClass("success")
  $(".error-message").addClass("failure")
  $(".error-message").text("Sign in failure - " +
  responseData.responseJSON.status + ": " +
  responseData.responseJSON.error)
} //onSignInFailure

const onSignOutFailure = responseData => {
  //Display text for sign out failure
  $(".error-message").removeClass("hidden")
  $(".error-message").removeClass("success")
  $(".error-message").addClass("failure")
  $(".error-message").text("Sign out failure - " +
  responseData.responseJSON.status + ": " +
  responseData.responseJSON.error)
} //onSignOutFailure

const onChangePasswordFailure = responseData => {
  //Display text for change pw failure
  $(".error-message").removeClass("hidden")
  $(".error-message").removeClass("success")
  $(".error-message").addClass("failure")
  $(".error-message").text("Change password failure - " +
  responseData.responseJSON.status + ": " +
  responseData.responseJSON.error)
} //onChangePasswordFailure

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
}
