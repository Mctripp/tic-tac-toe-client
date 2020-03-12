'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')
const store = require('../store.js')

// Handle all user database access (AJAX):

// GET user's games[?over=], over is bool (?)
const getGames = (over) => {
  if (over === undefined) {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    }) // return
  }
  // return games that are over
  return $.ajax({
    url: config.apiUrl + '/games[?over=]',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
} // getGames

// POST game; create new game for user (?)
const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: '{}',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // newGame

// GET specific game
const findGame = (id) => {
  return $.ajax({
    url: config.apiUrl + `/games${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // findGame

// PATCH specific game, updated from game progess/delta
const updateGame = (obj) => {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    data: obj,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // updateGame

module.exports = {
  getGames,
  newGame,
  findGame,
  updateGame
}
