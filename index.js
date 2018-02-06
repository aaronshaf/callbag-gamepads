const START = 0;
const DATA = 1;
const TERMINATE = 2;

let request;

let isActivated = false;

const listeners = [];

const connected = gamepad => gamepad && gamepad.connected;

function getConnectedGamepads() {
  return [...navigator.getGamepads()].filter(connected);
}

function gamepadLoop() {
  const gamepads = getConnectedGamepads();
  listeners.forEach(listener => listener(gamepads));
  request = requestAnimationFrame(gamepadLoop);
}

function activate() {
  if (isActivated) return;
  if (getConnectedGamepads().length > 0) {
    isActivated = true;
    gamepadLoop();
  }
}

function deactivate() {
  isActivated = false;
  window.cancelAnimationFrame(request);
}

function handleDisconnect() {
  if (getConnectedGamepads().length === 0) {
    deactivate();
  }
}

window.addEventListener("gamepadconnected", activate);

window.addEventListener("gamepaddisconnected", handleDisconnect);

function gamepads(start, sink) {
  if (start !== START) return;

  let fn = gamepads => sink(DATA, gamepads);

  listeners.push(fn);

  const talkback = (type, d) => {
    if (type === TERMINATE) {
      listeners.splice(array.indexOf(fn), 1);
      if (listeners.length === 0) {
        deactivate();
      }
    }
  };

  sink(START, talkback);

  activate();
}

module.exports = (start, sink) => gamepads(start, sink);
