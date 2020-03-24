/* ============= Title Bar ======================= */
const remote = require("electron").remote;

let minimise = document.getElementById("minimise");
let maximise = document.getElementById("maximise");
let close = document.getElementById("close");
document.getElementById("mainScreen").focus();
minimise.addEventListener("click", minimiseApp);
maximise.addEventListener("click", maximiseApp);
close.addEventListener("click", closeApp);
function minimiseApp() {
  remote.BrowserWindow.getFocusedWindow().minimize();
}
function maximiseApp() {
  var window = remote.BrowserWindow.getFocusedWindow();
  window.isMaximized() ? window.unmaximize() : window.maximize();
}
function closeApp() {
  remote.getCurrentWindow().close();
}
function screen(val) {
  mainScreen = document.getElementById("mainScreen").value;
  if (mainScreen.length < 12) { mainScreen = document.getElementById("mainScreen").value += val; }
}
function solve() {
  let curVal = document.getElementById("mainScreen").value;
  if (curVal.length < 27) { document.getElementById("subScreen").innerHTML = curVal; } else {
    document.getElementById("subScreen").innerHTML = 'Too Long';
  }
  let totalVal = eval(curVal);
  document.getElementById("mainScreen").value = totalVal
  console.log(typeof (curVal));
}
function clearScreen() {
  document.getElementById("mainScreen").value = "";
}
function clearBoth() {
  document.getElementById("mainScreen").value = "";
  document.getElementById("subScreen").innerHTML = "";
}
function remove() {
  let str = document.getElementById("mainScreen").value
  let temp = str.substring(0, str.length - 1);
  document.getElementById("mainScreen").value = temp;
}
function posNeg() {
  let screenValue = document.getElementById("mainScreen").value
  if (parseFloat(screenValue) > 0) {
    screenValue = '-' + screenValue;
    document.getElementById("mainScreen").value = screenValue
  } else if (parseFloat(screenValue) < 0) {
    screenValue = screenValue.substring(1, screenValue.length)
    document.getElementById("mainScreen").value = screenValue
  }
  else {
    return true;
  }
}

