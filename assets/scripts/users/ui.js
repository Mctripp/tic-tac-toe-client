'use strict'

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  console.log("signUp success")
  // Do we auto sign-in? if yes:
  //Hide welcome text, sign in/up form
  $(".welcome-text").addClass("hidden")
  //Show board, sign out/change pw form, scoreboard
  $(".tictactoe").removeClass("hidden")
} //onSignUpSuccess

const onSignInSuccess = responseData => {
  //Hide welcome text, sign in/up form
  $(".welcome-text").addClass("hidden")
  //Show board, sign out/change pw form, scoreboard
  $(".tictactoe").removeClass("hidden")
} //onSignInSuccess

const onSignOutSuccess = responseData => {
  //Show welcome text, sign in/up form
  $(".welcome-text").removeClass("hidden")
  //Hide board, sign out/change pw form, scoreboard
  $(".tictactoe").addClass("hidden")
} //onSignOutSuccess

const onChangePasswordSuccess = responseData => {
  //Probably no UI change for this. Maybe dispay whether tht it was success (popup?)
} //onChangePasswordSuccess

// FAILURES -------------------------

const onSignUpFailure = responseData => {
  //Display text for sign up failure
} //onSignUpFailure

const onSignInFailure = responseData => {
  //Display text for sign in failure
} //onSignInFailure

const onSignOutFailure = responseData => {
  //Display text for sign out failure
} //onSignOutFailure

const onChangePasswordFailure = responseData => {
  //Display text for change pw failure
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
