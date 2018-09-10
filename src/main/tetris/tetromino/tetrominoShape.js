let arrangements = {};

let iSymbol = Symbol.for("i");
let jSymbol = Symbol.for("j");
let lSymbol = Symbol.for("l");
let oSymbol = Symbol.for("o");
let sSymbol = Symbol.for("s");
let tSymbol = Symbol.for("t");
let zSymbol = Symbol.for("z");

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
arrangements[sSymbol] = [[false, true, true], [true, true, false]];
arrangements[tSymbol] = [[true, true, true], [false, true, false]];
arrangements[zSymbol] = [[true, true, false], [false, true, true]];

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