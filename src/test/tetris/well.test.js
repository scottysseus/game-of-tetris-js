import {createMatrix} from "../../main/utils";
import MockTetrominoFactory from "./tetromino/mockTetrominoFactory";
import mockTetrominoFactory from "./tetromino/mockTetrominoFactory";
import Well from "../../main/tetris/well";
import BlockCollection from "../../main/tetris/blockCollection";

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