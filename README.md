```
yarn add callbag-gamepad
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

## Learn more

* [Callbag basics](https://github.com/staltz/callbag-basics)
* [Why we need callbags](https://staltz.com/why-we-need-callbags.html), by André Staltz
