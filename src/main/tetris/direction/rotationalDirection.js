let clockwiseSymbol = Symbol.for("clockwise");
let counterclockwiseSymbol = Symbol.for("counterclockwise");

export default Object.freeze({
    CLOCKWISE: clockwiseSymbol,
    COUNTERCLOCKWISE: counterclockwiseSymbol,
    properties: {
        [clockwiseSymbol]: {multiplier: -1},
        [counterclockwiseSymbol]: {multiplier: 1}
    },
    reverse: function(rotationalDirection) {
        if(rotationalDirection === clockwiseSymbol) {
            return counterclockwiseSymbol;
        } else {
            return clockwiseSymbol; 
        }
    }
});