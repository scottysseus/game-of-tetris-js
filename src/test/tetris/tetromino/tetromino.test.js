import Tetromino from "../../../main/tetris/tetromino/tetromino";
import {RotationalDirection} from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import Block from "../../../main/tetris/tetromino/block";
import MockTetrominoFactory from "./mockTetrominoFactory";

test('can rotate block counterclockwise', () => {
    let mockI = MockTetrominoFactory.getMockI();
    expect(mockI.getTetromino().rotate(RotationalDirection.CLOCKWISE)).toBe(mockI.getClockwise());
});