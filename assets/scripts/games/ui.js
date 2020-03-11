'use strict'

// SUCCESSES ------------------------

const onGetGamesSuccess = responseData => {
  //Switch to game (?)
} //onGetGamesSuccess

const onNewGameSuccess = responseData => {
  //Switch to new game (?)
} //onNewGameSuccess

const onFindGameSuccess = responseData => {
  //Switch to found game (?)
} //onFindGameSuccess

const onUpdateGameSuccess = responseData => {
  //End turn, remove interactivity from board
} //onUpdateGameSuccess

//FAILURES --------------------------

const onGetGamesFailure = responseData => {
  //Error msg
} //onGetGamesFailure

const onNewGameFailure = responseData => {
  //Error msg
} //onNewGameFailure

const onFindGameFailure = responseData => {
  //Error msg
} //onFindGameFailure

const onUpdateGameFailure = responseData => {
  //Error msg
} //onUpdateGameFailure

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onFindGameSuccess,
  onFindGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
