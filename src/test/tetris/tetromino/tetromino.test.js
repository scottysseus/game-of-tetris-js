import Tetromino from "../../../main/tetris/tetromino/tetromino";
import RotationalDirection from "../../../main/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import Block from "../../../main/tetris/tetromino/block";
import MockTetrominoFactory from "./mockTetrominoFactory";
import rotationalDirection from "../../../main/tetris/direction/rotationalDirection";

test('can predict rotated index of a block', () =>{
    let tetromino = MockTetrominoFactory.getMockJ().getTetromino();
    let predictedIndex = tetromino.getRotatedIndex(0,0,RotationalDirection.CLOCKWISE,1);
    expect(predictedIndex[0]).toBe(0);
    expect(predictedIndex[1]).toBe(2);

    predictedIndex = tetromino.getRotatedIndex(2,0,RotationalDirection.CLOCKWISE,1);
    expect(predictedIndex[0]).toBe(0);
    expect(predictedIndex[1]).toBe(0);

    predictedIndex = tetromino.getRotatedIndex(2,1,RotationalDirection.COUNTERCLOCKWISE,1);
    expect(predictedIndex[0]).toBe(0);
    expect(predictedIndex[1]).toBe(2);
});

test.only('can rotate block clockwise', () => {
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

test('empty block grid returns 0 for width and height', () => {
    let emptyTetromino = new Tetromino({blocks: []});
    expect(emptyTetromino.height()).toBe(0);
    expect(emptyTetromino.width()).toBe(0);
});

test('comparing different-sized tetrominos returns false', () => {
    let tetrominoA = new Tetromino({blocks: [
        [new Block({content: "[0,0]"}), new Block({content: "[0,1]"})]
    ]});

    let tetrominoB = new Tetromino({blocks: []});
    let tetrominoC = new Tetromino({blocks: [
        [new Block({content: "[0,0]"})],
        [new Block({content: "[1,0]"})]
    ]});
    let tetrominoD = new Tetromino({blocks: [
        [new Block({content: "[0,0]"}), new Block({content: "[0,1]"})],
        [new Block({content: "[1,0]"}), new Block({content: "[1,1]"})]
    ]});

    expect(tetrominoA.equals(tetrominoB)).toBe(false);
    expect(tetrominoA.equals(tetrominoC)).toBe(false);
    expect(tetrominoA.equals(tetrominoD)).toBe(false);
});

test('comparing tetrominos with equivalent blocks returns true', () => {
    let tetrominoA = new Tetromino({blocks: [
        [new Block({content: "[0,0]"}), new Block({content: "[0,1]"})]
    ]});

    let tetrominoB = new Tetromino({blocks: [
        [new Block({content: "[0,0]"}), new Block({content: "[0,1]"})]
    ]});

    expect(tetrominoA.equals(tetrominoB)).toBe(true);
});