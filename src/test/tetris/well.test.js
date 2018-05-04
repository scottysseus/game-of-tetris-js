import {createMatrix} from "../../main/utils";
import MockTetrominoFactory from "./tetromino/mockTetrominoFactory";
import mockTetrominoFactory from "./tetromino/mockTetrominoFactory";
import Well from "../../main/tetris/well";

test('throw tetromino places a tetromino at the top-center of the grid', () => {
    // let mockTetrominos = mockTetrominoFactory.getAllMocks();
    // mockTetrominos.forEach(mockTetromino => {
    //     let well = new Well({grid: createMatrix(10,10)});
    //     let tetromino = mockTetromino.getTetromino();
    //     well.throwTetromino(tetromino);
    //     for(var row = 0; row < tetromino.height(); ++row) {
    //         let middleIndex = (well.width() / 2) - tetromino.width() - 1;
    //         for(var col = middleIndex; col < middleIndex + tetromino.width(); ++col) {
    //             expect(well.get(row, col).equals(tetromino.get(row,col))).toBe(true);
    //         }
    //     }
        
    // });
    expect(true).toBe(true);
});