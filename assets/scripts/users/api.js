'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')

// Handle all user database access (AJAX):

// Sign-up new user:
const signUp = (credentials) => {
  return $.ajax({
    url: config.apiUrl + "/sign-up",
    data: credentials,
    method: "POST"
  }) // return
} // signUp

// Sign in existing user:
const signIn = (credentials) => {
  return $.ajax({
    url: config.apiUrl + "/sign-in",
    data: credentials,
    method: "POST"
  }) // return
} // signIn

// Sign out: Must include user's token in Header
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + "/sign-out",
    method: "DELETE"
  }) // return
} // signOut

// Change password: Must include user's token in Header
const changePassword = (oldPw, newPw) => {
  return $.ajax({
    url: config.apiUrl + "/change-password",
    data: "",
    method: "PATCH"
  }) // return
} // changePassword

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
