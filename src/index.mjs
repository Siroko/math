/**
 * @function map
 * @param {float} a1
 * @param {float} b1
 * @param {float} a2
 * @param {float} b2
 * @param {float} value
 * @returns {float}
 */
export const map = (a1, b1, a2, b2, value) => (value - a1) * (b2 - a2) / (b1 - a1) + a2;

/**
 * @function lerp
 * @param {float} a
 * @param {float} b
 * @param {float} value
 * @returns {float}
 */
export const lerp = (a, b, value) => a * (1-value) + b * value;

/**
 * @function lerpHex
 * @param {string} a
 * @param {string} b
 * @param {float} value
 * @returns {string}
 */
export const lerpHex = (a, b, value) => { 
    const ah = +a.replace('#', '0x'),
    ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
    bh = +b.replace('#', '0x'),
    br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
    rr = ar + value * (br - ar),
    rg = ag + value * (bg - ag),
    rb = ab + value * (bb - ab);
    
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}


// Function that rounds up to the next power of 2 value.
const getNextPowerOfTwo = (v) => {
    return Math.pow(2, Math.ceil(Math.log(v) / Math.log(2)))
}

/**
 * Function that returns the smallest pot texture dimensions to fit the
 * provided number of pixels.
 * @function getTextureDimensionsPot
 * @param {Number} value
 * @returns {Array}
 */
export const getTextureDimensionsPot = (value) => {
    const v = [0,0];
    const potMajor = Math.sqrt(getNextPowerOfTwo(value));
    const potMinor = getNextPowerOfTwo(Math.sqrt(value));
    v[0] = v[1] = potMajor
    if (potMajor !== potMinor) {
        v[0] = potMinor; 
        v[1] = potMinor * 0.5;
    }
    return v
  }