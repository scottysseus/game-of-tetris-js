let clockwiseSymbol = 0;
let counterclockwiseSymbol = 1;

let RotationalDirection = {};
RotationalDirection.CLOCKWISE = clockwiseSymbol;
RotationalDirection.COUNTERCLOCKWISE = counterclockwiseSymbol;

RotationalDirection.properties = {};
RotationalDirection.properties[clockwiseSymbol] = {multiplier: -1};
RotationalDirection.properties[counterclockwiseSymbol] = {multiplier: 1};

RotationalDirection.reverse = function(rotationalDirection) {
    if(rotationalDirection === clockwiseSymbol) {
        return counterclockwiseSymbol;
    } else {
        return clockwiseSymbol; 
    }
}

export default Object.freeze(RotationalDirection);