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
        well.throwTetromino(tetromino);
        for(var row = 0; row < tetromino.height(); ++row) {
            let middleIndex = (well.width() / 2) - tetromino.width() - 1;
            for(var col = middleIndex; col < middleIndex + tetromino.width(); ++col) {
                if(well.get(row,col) !== null) {
                    expect(well.get(row, col).equals(tetromino.get(row,col - middleIndex))).toBe(true);
                }
            }
        }
        
    });
});

test('lowering active tetromino in an empty well works', () => {
    
});