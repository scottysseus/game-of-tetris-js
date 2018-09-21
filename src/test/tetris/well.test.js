import {createMatrix} from "../../main/utils";
import MockTetrominoFactory from "./tetromino/mockTetrominoFactory";
import mockTetrominoFactory from "./tetromino/mockTetrominoFactory";
import Well from "../../main/tetris/well";
import BlockCollection from "../../main/tetris/blockCollection";
import HorizontalDirection from "../../main/tetris/direction/horizontalDirection";
import Block from "../../main/tetris/tetromino/block";
import MockBlockContent from "./tetromino/mockBlockContent";
import Orientation from "./tetromino/orientation";

test('throw tetromino places a tetromino at the top-center of the grid', () => {
    let mockTetrominos = mockTetrominoFactory.getAllMocks();
    mockTetrominos.forEach(mockTetromino => {
        let well = new Well({grid: new BlockCollection({blocks: createMatrix(10,10)})});
        let tetromino = mockTetromino.getTetromino();
        let middleIndex = well.getCenteredColumn(tetromino.width())
        well.throwTetromino(tetromino);
        expect(verifyTetrominoInGrid(well, tetromino, 0, middleIndex)).toBe(true);
    });
});

test('lowering active tetromino in an empty well works', () => {
    let mockTetrominos = mockTetrominoFactory.getAllMocks();
    mockTetrominos.forEach(mockTetromino => {
        let well = new Well({grid: new BlockCollection({blocks: createMatrix(10,10)})});
        let tetromino = mockTetromino.getTetromino();
        well.throwTetromino(tetromino);
        well.lowerActiveTetromino();
        let middleIndex = well.getCenteredColumn(tetromino.width());
        expect(verifyTetrominoInGrid(well, tetromino, 1, middleIndex)).toBe(true);
    });
});

test('shifting active tetromino in empty well works', () => {
    let mockTetrominos = mockTetrominoFactory.getAllMocks();
    mockTetrominos.forEach(mockTetromino => {
        let well = new Well({grid: new BlockCollection({blocks: createMatrix(10,10)})});
        let tetromino = mockTetromino.getTetromino();
        well.throwTetromino(tetromino);
        well.shiftActiveTetromino(HorizontalDirection.LEFT);
        let middleIndex = well.getCenteredColumn(tetromino.width());
        expect(verifyTetrominoInGrid(well, tetromino, 0, middleIndex - 1)).toBe(true);
    });
});

test('clearing full rows results in empty grid and returns the correct number of cleared rows', () => {
    for(let i = 0; i < 5; ++i) {
        let blockCollection = new BlockCollection({blocks: createMatrix(10,10)});
        for(let rowToFill = 0; rowToFill <= i; rowToFill++) {
            fillRow(blockCollection, blockCollection.height() - rowToFill - 1);
        }
        let well = new Well({grid: blockCollection});
        let numCleared = well.clearFullRows();
        expect(numCleared).toBe(i + 1);
    }
});

function fillRow(blockCollection, row) {
    for(let col = 0; col < blockCollection.width(); ++col)  {
        blockCollection.set(row, col, new Block({content: new MockBlockContent({content: "test", orientation: Orientation.NOON})}));
    }
}

function verifyTetrominoInGrid(well, tetromino, startRow, startCol) {
    for(var row = startRow; row < startRow + tetromino.height(); ++row) {
        for(var col = startCol; col < startCol + tetromino.width(); ++col) {
            let wellBlock = well.get(row, col);
            let tetrominoBlock = tetromino.get(row - startRow, col - startCol);
            if(wellBlock !== null) {
                if (!wellBlock.equals(tetrominoBlock)) {
                    return false;
                }
            } else if(tetrominoBlock !== null) {
                return false;
            }
        }
    }
    return true;
}