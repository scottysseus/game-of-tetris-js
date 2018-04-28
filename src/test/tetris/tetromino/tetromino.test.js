import Tetromino from "../../../main/tetris/tetromino/tetromino";
import RotationalDirection from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import Block from "../../../main/tetris/tetromino/block";
import MockTetrominoFactory from "./mockTetrominoFactory";

test('can rotate block clockwise', () => {
    MockTetrominoFactory.getAllMocks().forEach(mockTetromino => {
        let rotatedTetromino = mockTetromino.getTetromino();
        rotatedTetromino.rotate(RotationalDirection.CLOCKWISE);
        expect(rotatedTetromino.equals(mockTetromino.getClockwise())).toBe(true);
    });
});

test('can rotate block counterclockwise', () => {
    MockTetrominoFactory.getAllMocks().forEach(mockTetromino => {
        let rotatedTetromino = mockTetromino.getTetromino();
        rotatedTetromino.rotate(RotationalDirection.COUNTERCLOCKWISE);
        expect(rotatedTetromino.equals(mockTetromino.getCounterclockwise())).toBe(true);
    });
});