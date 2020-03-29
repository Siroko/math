/**
 * @function map
 * @param {float} value
 * @param {float} x1
 * @param {float} y1
 * @param {float} x2
 * @param {float} y2
 * @returns {float}
 */
export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

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