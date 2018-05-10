import Tetromino from "../../../src/tetris/tetromino/tetromino";
import RotationalDirection from "../../../src/tetris/direction/rotationalDirection";
import MockBlockContent from "./mockBlockContent";
import Block from "../../../src/tetris/tetromino/block";
import MockTetrominoFactory from "./mockTetrominoFactory";
import rotationalDirection from "../../../src/tetris/direction/rotationalDirection";
import BlockCollection from "../../../src/tetris/blockCollection";

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

test('empty block grid returns 0 for width and height', () => {
    let emptyTetromino = Tetromino({blocks: []});
    expect(emptyTetromino.height()).toBe(0);
    expect(emptyTetromino.width()).toBe(0);
});

test('comparing different-sized tetrominos returns false', () => {
    let tetrominoA = Tetromino({blocks: [
        [Block({content: "[0,0]"}), Block({content: "[0,1]"})]
    ]});

    let tetrominoB = Tetromino({blocks: []});
    let tetrominoC = Tetromino({blocks: [
        [Block({content: "[0,0]"})],
        [Block({content: "[1,0]"})]
    ]});
    let tetrominoD = Tetromino({blocks: [
        [Block({content: "[0,0]"}), Block({content: "[0,1]"})],
        [Block({content: "[1,0]"}), Block({content: "[1,1]"})]
    ]});

    expect(tetrominoA.equals(tetrominoB)).toBe(false);
    expect(tetrominoA.equals(tetrominoC)).toBe(false);
    expect(tetrominoA.equals(tetrominoD)).toBe(false);
});

test('comparing tetrominos with equivalent blocks returns true', () => {
    let tetrominoA = Tetromino({blocks: [
        [Block({content: "[0,0]"}), Block({content: "[0,1]"})]
    ]});

    let tetrominoB = Tetromino({blocks: [
        [Block({content: "[0,0]"}), Block({content: "[0,1]"})]
    ]});

    expect(tetrominoA.equals(tetrominoB)).toBe(true);
});