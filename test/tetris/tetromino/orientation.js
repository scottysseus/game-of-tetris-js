import RotationalDirection from "../../../src/tetris/direction/rotationalDirection"

let noonSymbol = 0;
let nineSymbol = 1;
let sixSymbol = 2;
let threeSymbol = 3;

export default Object.freeze({
    NOON: noonSymbol,
    NINE: nineSymbol,
    SIX: sixSymbol,
    THREE: threeSymbol,
    getRotatedOrientation: function(orientation, rotationalDirection) {
        let props = RotationalDirection.properties[rotationalDirection];
        return (orientation + props.multiplier + 4) % 4;
    }
});