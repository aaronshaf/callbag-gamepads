```
yarn add callbag-gamepads
```

```javascript
const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const gamepads = require("callbag-gamepads");

pipe(
  gamepads,
  forEach(gamepads => {
    // have fun
  })
);
```

If you're blessed with the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator):

```javascript
gamepads
  |> forEach(gamepads => {
    // have fun
  });
```

## Learn more

* [Callbag basics](https://github.com/staltz/callbag-basics)
* [Why we need callbags](https://staltz.com/why-we-need-callbags.html), by André Staltz
* [Using the Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
