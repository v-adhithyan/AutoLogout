const AUTOLOGOUT_TIME = "al_autologout_time";
const AUTOLOGOUT_REMAINING_TIME = "al_remaining_time";
const AUTOLOGOUT_MINUTES = "al_minutes";
const AUTOLOGOUT_SECONDS = "al_seconds";


const DEFAULT_AUTOLOGOUT_TIME = 600;
const DEFAULT_VALUES = {
  AUTOLOGOUT_TIME: DEFAULT_AUTOLOGOUT_TIME,
  AUTOLOGOUT_REMAINING_TIME: DEFAULT_AUTOLOGOUT_TIME,
  AUTOLOGOUT_MINUTES: DEFAULT_AUTOLOGOUT_TIME / 60,
  AUTLOGOUT_SECONDS: 60
}

function getOrSetLocalStorage(key) {
  let value = localStorage.getItem(key);
  if (!value) {
    value = DEFAULT_VALUES[key];
    localStorage.setItem(key, value)
  }
  return parseInt(value, 10)
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function updateRemainingTime() {
  //console.log("here");
  let totalTime = getOrSetLocalStorage(AUTOLOGOUT_TIME);
  let remainingTime = getOrSetLocalStorage(AUTOLOGOUT_REMAINING_TIME) - 1;
  /*getOrSetLocalStorage(AUTOLOGOUT_MINUTES);
  getOrSetLocalStorage(AUTOLOGOUT_SECONDS);*/

  var minutes = Math.floor(remainingTime / 60);
  var seconds = remainingTime - minutes * 60;

  setLocalStorage(AUTOLOGOUT_MINUTES, minutes.toString());
  setLocalStorage(AUTOLOGOUT_SECONDS, seconds.toString());
  setLocalStorage(AUTOLOGOUT_REMAINING_TIME, remainingTime.toString());
}

window.setInterval(updateRemainingTime, 1000);
