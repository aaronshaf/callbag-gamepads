// start raf loop on first call (and wait for gamepadconnected?)
// in every loop save state/cache of gamepads
// deliever previous and current for each
// on gamepaddisconnected, check to see if raf loop is necessary

let activated = false

let raf = requestAnimationFrame(gameLoop);

function activate() {
  if (activated) return
  activated = true
  gamepadLoop()
}

function gamepadLoop() {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  // ...
  raf = requestAnimationFrame(gamepadLoop);
};

// copypasta for now
function source(start, sink) {
  if (start !== 0) return;
  // navigator.getGamepads()
  let handle = setInterval(() => {
    sink(1, null);
  }, 1000);
  const talkback = (t, d) => {
    if (t === 2) clearInterval(handle);
  };
  sink(0, talkback);
};

// make it "shared"; use existing callbag-shared

// usage

pipe(
  gamepads(),
  filter(/* connected */),
  forEach((gamepads) => {
    
  })
)
