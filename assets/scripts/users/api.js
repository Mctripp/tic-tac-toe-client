'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

// Handle all user database access (AJAX):

// USERS ---------------------------------

// Sign-up new user:
const signUp = (credentials) => {
  return $.ajax({
    url: "",
    data: "",
    method: "POST"
  }) // return
} // signUp

// Sign in existing user:
const signIn = (credentials) => {
  return $.ajax({
    url: "",
    data:"",
    method: "POST"
  }) // return
} // signIn

// Sign out: Must include user's token in Header
const signOut = () => {
  return $.ajax({
    url: "",
    method: "DELETE"
  }) // return
} // signOut

// Change password: Must include user's token in Header
const changePassword = (oldPw, newPw) => {
  return $.ajax({
    url: "",
    data:"",
    method: "PATCH"
  }) // return
} // changePassword

// GAMES --------------------------------

// GET user's games[?over=], over is bool
const getGames = (over) => {
  return $.ajax({
    url: "",
    method:
  }) // return
} // getGames

// POST game; create new game for user (?)
const newGame = () => {
  return $.ajax({
    url: "",
    method:
  }) // return
} //newGame

// GET specific game
const findGame = (id) => {
  return $.ajax({
    url: "",
    method:
  }) // return
} //findGame

// PATCH specific game, updated from game progess/delta
const updateGame = (id) => {
  return $.ajax({
    url: "",
    method:
  }) // return
} //updateGame

module.exports = {
  getGames,
  newGame,
  findGame,
  updateGame,
  signUp,
  signIn,
  signOut,
  changePassword
}
