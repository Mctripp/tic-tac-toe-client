'use strict'

// determine which mark to use
// const getMarkType = () => {

// } // getMarkType

let count = 0

// mark clicked grid with player's mark, disable event on square
const markGrid = event => {
  const boxId = event.target.id
  $(`#${boxId}`).children().removeClass('hidden')
  if (count % 2 === 0) {
    $(`#${boxId}`).children().attr('src', './../../../public/images/X.jpg')
  } else {
    $(`#${boxId}`).children().attr('src', './../../../public/images/O.jpg')
  }
  count++
  $(`#${boxId}`).unbind()
} // markGrid

module.exports = {
  markGrid
}
