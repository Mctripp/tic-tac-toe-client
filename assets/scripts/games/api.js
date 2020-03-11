'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')

// Handle all user database access (AJAX):

// GET user's games[?over=], over is bool (?)
const getGames = (over) => {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "GET"
  }) // return
} // getGames

// POST game; create new game for user (?)
const newGame = () => {
  return $.ajax({
    url: config.apiUrl + "/games",
    data: "{}",
    method: "POST"
  }) // return
} //newGame

// GET specific game
const findGame = (id) => {
  return $.ajax({
    url: config.apiUrl + `/games${id}`,
    method: "GET"
  }) // return
} //findGame

// PATCH specific game, updated from game progess/delta
const updateGame = (gameDelta) => {
  return $.ajax({
    url: config.apiUrl + `/games${gameDelta[id]}`,
    data: gameDelta,
    method: "PATCH"
  }) // return
} //updateGame

module.exports = {
  getGames,
  newGame,
  findGame,
  updateGame
}
