export default function MockTetromino(args) {
    let {tetromino, clockwise, counterclockwise} = args;
    let mockTetrominoObj = {};

    mockTetrominoObj.getTetromino = function() {
        return tetromino;
    }

    mockTetrominoObj.getClockwise = function() {
        return clockwise;
    }

    mockTetrominoObj.getCounterclockwise = function() {
        return counterclockwise;
    }

    return mockTetrominoObj;
}