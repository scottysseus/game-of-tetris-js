let arrangements = {};

let iSymbol = 'I';
let jSymbol = 'J';
let lSymbol = 'L';
let oSymbol = 'O';
let sSymbol = 'S';
let tSymbol = 'T';
let zSymbol = 'Z';

let values = [
    iSymbol,
    jSymbol,
    lSymbol,
    oSymbol,
    sSymbol,
    tSymbol,
    zSymbol,
];

arrangements[iSymbol] = [[true], [true], [true], [true]];
arrangements[jSymbol] = [[false, true], [false, true], [true, true]];
arrangements[lSymbol] = [[true, false], [true, false], [true, true]];
arrangements[oSymbol] = [[true, true], [true, true]];
arrangements[sSymbol] = [[true, false], [true, true], [false, true]];
arrangements[tSymbol] = [[false, true,],[true, true], [false, true]];
arrangements[zSymbol] = [[false, true], [true, true], [true, false]];

export default Object.freeze({
    I: iSymbol,
    J: jSymbol,
    L: lSymbol,
    O: oSymbol,
    S: sSymbol,
    T: tSymbol,
    Z: zSymbol,
    properties: {
        [iSymbol]: {height: arrangements[iSymbol].length, width:arrangements[iSymbol][0].length, arrangement: arrangements[iSymbol]},
        [jSymbol]: {height: arrangements[jSymbol].length, width:arrangements[jSymbol][0].length, arrangement: arrangements[jSymbol]},
        [lSymbol]: {height: arrangements[lSymbol].length, width:arrangements[lSymbol][0].length, arrangement: arrangements[lSymbol]},
        [oSymbol]: {height: arrangements[oSymbol].length, width:arrangements[oSymbol][0].length, arrangement: arrangements[oSymbol]},
        [sSymbol]: {height: arrangements[sSymbol].length, width:arrangements[sSymbol][0].length, arrangement: arrangements[sSymbol]},
        [tSymbol]: {height: arrangements[tSymbol].length, width:arrangements[tSymbol][0].length, arrangement: arrangements[tSymbol]},
        [zSymbol]: {height: arrangements[zSymbol].length, width:arrangements[zSymbol][0].length, arrangement: arrangements[zSymbol]}
    },
    values: values
});