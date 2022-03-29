const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
//Global boolean for buttons

let startState = true

function printTime() {

  let totalMinutes = printMinutes()
  let computedMinutes = chronometer.computeTwoDigitNumber(totalMinutes)

  let totalSeconds = printSeconds()
  let computedSeconds = chronometer.computeTwoDigitNumber(totalSeconds)

  secDecElement.textContent = computedSeconds.charAt(0)
  secUniElement.textContent = computedSeconds.charAt(1)
  minDecElement.textContent = computedMinutes.charAt(0)
  minUniElement.textContent = computedMinutes.charAt(1)


}

function printMinutes() {
  return chronometer.getMinutes()
}

function printSeconds() {
  return chronometer.getSeconds()
}

function printSplit() {

}

function clearSplits() {
}

function setStopBtn() {
  btnLeftElement.textContent = "STOP"
  btnLeftElement.classList.replace('stop')
  setStopBtn()

}

function setSplitBtn() {

}

function setStartBtn() {
  btnLeftElement.textContent = "START"
  btnLeftElement.classList.replace('start')
}

function setResetBtn() {

}
/* BONUS
function printMilliseconds() {

}*/

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  const startStopButtonClick = document.querySelector('#btn-left')
  chronometer.start(printTime)
})

btnRightElement.addEventListener('click', () => {
  const startButtonClick = document.querySelector('#btn-right')
  chronometer.reset()

})
