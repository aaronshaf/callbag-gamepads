// start raf loop on first call
// in every loop save state/cache of gamepads
// deliever previous and current for each

// copypasta for now
function source(start, sink) {
  if (start !== 0) return;
  let handle = setInterval(() => {
    sink(1, null);
  }, 1000);
  const talkback = (t, d) => {
    if (t === 2) clearInterval(handle);
  };
  sink(0, talkback);
}
