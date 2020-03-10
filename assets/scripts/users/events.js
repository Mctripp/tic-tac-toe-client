'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

//Handle all clicks, form submissions, etc.:

const onGetGames = event => {
  event.preventDefault()

  api.booksIndex()
  // If succeed:
    .then(ui.onBooksIndexSuccess)
  // If fail:
    .catch(ui.onBooksIndexFailure)
} //onGetGames

const onNewGame = event => {

} //onNewGame

const onFindGame = event => {

} //onFindGame

const onUpdateGame = event => {

} //onUpdateGame
