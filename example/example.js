const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const gamepads = require("../index.js");

const debug = document.querySelector("#debug");

pipe(
  gamepads,
  forEach(gamepads => (debug.textContent = prettyGamepadData(gamepads)))
);

function prettyGamepadData(gamepads) {
  return JSON.stringify(
    gamepads.map(gamepad => ({
      axes: gamepad.axes,
      buttons: gamepad.buttons.map(button => button.value)
    })),
    null,
    2
  );
}
