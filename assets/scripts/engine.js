'use strict'

// determine which mark to use
const getMarkType = () => {

} // getMarkType

// mark clicked grid with player's mark, disable event on square
const markGrid = event => {
  const boxId = event.target.id
  $(`#${boxId}`).children().removeClass("hidden")
  $(`#${boxId}`).children().attr("src", "./../../../public/images/O.jpg")
} //markGrid

module.exports = {
  markGrid
}
