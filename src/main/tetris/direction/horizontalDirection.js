let leftSymbol = Symbol.for("left");
let rightSymbol = Symbol.for("right");

export default Object.freeze({
    RIGHT: rightSymbol,
    LEFT: leftSymbol,
    properties: {
        [leftSymbol]: {delta: -1},
        [rightSymbol]: {delta: 1}
    }
});