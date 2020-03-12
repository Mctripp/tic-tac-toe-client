'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')
const store = require('../store.js')

// Handle all user database access (AJAX):

// Sign-up new user:
const signUp = (credentials) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: credentials
  }) // return
} // signUp

// Sign in existing user:
const signIn = (credentials) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: credentials
  }) // return
} // signIn

// Sign out: Must include user's token in Header
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // signOut

// Change password: Must include user's token in Header
const changePassword = (passwords) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: passwords
  }) // return
} // changePassword

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
