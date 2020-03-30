import test from 'tape';
import * as math from '../src/';

test('mapValueToRange', ({ test }) => {
    test('should map a value from one range to another', t => {
        const { map } = math;
        for(let i = 0; i < 100; i++) {
            const val = map(0, 100, 0, 1, i, );
            if(val !== i / 100) {
                return t.fail();
            }
        }
        t.end();
    });
});