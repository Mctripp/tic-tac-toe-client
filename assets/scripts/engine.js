'use strict'

const gamesApi = require('./games/api.js')

const xImg = './../../../public/images/X.jpg'
const oImg = './../../../public/images/O.jpg'

// Get board[] index from box ID
const boxIdToNum = id => {
  return parseInt(id.charAt(3), 10)
} // boxIdToNum

// mark clicked grid with player's mark, disable event on square
const markGrid = (event, count, board) => {
  // Get clicked box ID
  console.log(count)
  const boxId = event.target.id
  // Get board space index
  const boardNum = boxIdToNum(boxId)
  // Show img
  $(`#${boxId}`).children().removeClass('hidden')
  // Alternate between X and O
  if (count % 2 === 0) {
    // Make X image first time and every other
    $(`#${boxId}`).children().attr('src', xImg)
    // Store 'x' in board
    board.push('x')
  } else {
    // Make O image second time and every other
    $(`#${boxId}`).children().attr('src', oImg)
    // store 'o' in board
    board.push('o')
  } // if
  count++
  // Remove click events
  $(`#${boxId}`).unbind()
} // markGrid

// Put elements from within an object into an array
const getElementArray = obj => {
  const returnArr = []
  for (let i = 0; i < obj.length; i++) {
    returnArr.push(obj[i])
  } // for
  return returnArr
} // getObjArray

// Map an array of elements to board item the element corresponds to,
// i.e. since element array passed in is from jQuery on boxes, get those boxIds,
// and return array that corresponds to boxIds as indexes in board:
//  Obj {  ...use boxIdToNum...   board[              returnArr[
//    Object box1 {...},        index 1: 'x'                  'x',
//    Object box4 {...},  ->    index 4: ''      ->           '',
//    Object box7 {...}         index 7: 'o'                  'o'
//      }                              ]                       ]
//
const mapElementArray = eleArr => {
  return eleArr.map(element => board[boxIdToNum(element.id)])
} // mapObjArray

// Check if a class from passed list of classes for diagonal or straight
// is a win: this works since each column, row, and diagonal have their own
// unique classes.
const checkClassWin = (classList, symbol) => {
  // default return null
  let winClass = null
  // For each class, get the array of symbols that corresponds to the
  // boxes which have that class (they are in the same row/column/diagonal).
  classList.forEach(element => {
    const winArr = mapElementArray(getElementArray($(`.${element}`)))
    // If this array (of three elements) has the passed symbol in each
    // index, that symbol has 3 in a row.
    if (winArr.every(element => element === symbol)) {
      winClass = element
      console.log(winClass)
    } // if
  }) // forEach
  return winClass
} // checkClassWin

const checkWin = (event, count, board) => {
  // Cannot end game before turn 5, skip check
  if (count < 5) {
    return
  } // if

  // Make object to update game API
  const updateGameObj = {
    'game': {
      'cell': {
        'index': 0,
        'value': ''
      },
      'over': false
    }
  }
  // Get id of clicked box
  const boxId = event.target.id
  updateGameObj.game.cell.index = boxIdToNum(boxId)
  // Get list of classes associated with that box
  const classList = $(`#${boxId}`).attr('class').split(/\s+/)
  // Get symbol of the box that was clicked
  const symbol = board[boxIdToNum(boxId)]
  updateGameObj.game.cell.value = symbol
  // See if the player has won
  const winClass = checkClassWin(classList, symbol)
  // If the player wins, display message and visuals
  if (checkClassWin(classList, symbol) !== null) {
    $('.error-message').text('Player ' + symbol.toUpperCase() + ' wins!')
    $('.error-message').removeClass('hidden')
    $('.error-message').addClass('success')
    $('img').css('opacity', 0.5)
    $('.box').css('opacity', 0.5)
    $(`.${winClass}>img`).css('opacity', 1)
    $(`.${winClass}`).css('opacity', 1)
    $(`.${winClass}`).css('border', 'yellow solid 2px')
    $('.box').unbind()
    updateGameObj.game.over = true
  } // if
  // If nobody has won when all squares are filled, fade boxes and end game
  if (count === 9) {
    $('.error-message').text("Nobody wins! It's a tie.")
    $('.error-message').removeClass('hidden')
    $('.error-message').addClass('success')
    $('img').css('opacity', 0.5)
    $('.box').css('opacity', 0.5)
    updateGameObj.game.over = true
  }
  gamesApi.updateGame(updateGameObj)
} // checkWin

module.exports = {
  markGrid,
  checkWin
}
