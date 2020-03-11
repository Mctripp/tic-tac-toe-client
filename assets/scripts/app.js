'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require("./users/events.js")
const gameEvents = require("./games/events.js")

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
})
