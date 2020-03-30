# maths.js

[![Build Status](https://travis-ci.org/Siroko/math.svg?branch=master)](https://travis-ci.org/Siroko/math) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Creating a home made Math library with the most common functions Im using on my daily creative coding sessions. 

```js
import * as math from "@siroko/math";
```

Alternatively you can import only the functions you need

```js
import {lerp, map} from "@siroko/math";
```

## Usage
[![NPM](https://nodei.co/npm/@siroko/math.png)](https://nodei.co/npm/@siroko/math/)

```js
import * as math from "@siroko/math";

// Linear interpolation between 2 values
const interpolated = math.lerp(0, 5, 0.5);
console.log(interpolated); // Will output 2.5

// Linear interpolation between 2 hexadecimal colors
const outColor = math.lerpHex("#000000", "#FFFFFF", 1);
console.log(outColor); // Will output "#FFFFFF"

// Map a value based on 2 numeric domains
const mapped = math.map(0, 1, -10, 10, 0.5);
console.log(mapped); // Will output 0
```

## License

MIT, see [LICENSE.md](http://github.com/Siroko/math/blob/master/LICENSE.md) for details.