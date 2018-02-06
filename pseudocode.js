// start raf loop on first call
// in every loop save state/cache of gamepads
// deliever previous and current for each

// copypasta fro now
const multiplyBy = args => inputSource => {
  return function outputSource(start, outputSink) {
    if (start !== 0) return;
    inputSource(0, (type, data) => {
      if (type === 1) outputSink(1, data);
      else outputSink(t, d);
    });
  };
}
