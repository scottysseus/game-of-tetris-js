export default function MockTetromino(args) {
    let {tetromino, clockwise, counterclockwise} = args;

    this.getTetromino = function() {
        return tetromino;
    }

    this.getClockwise = function() {
        return clockwise;
    }

    this.getCounterclockwise = function() {
        return counterclockwise;
    }
}