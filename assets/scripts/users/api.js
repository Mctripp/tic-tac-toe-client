'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

// Handle all user database access (AJAX):

// GET user's games[?over=], over is bool
const getGames = (over) => {

} //getGames

// POST game; create new game for user (?)
const newGame = () => {

} //newGame

// GET specific game
const findGame = (id) => {

} //findGame

// PATCH specific game, updated from game progess/delta
const updateGame = (id) => {

} //updateGame

module.exports = {
  getGames,
  newGame,
  findGame,
  updateGame
}
