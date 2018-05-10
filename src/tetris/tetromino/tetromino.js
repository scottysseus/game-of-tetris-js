import RotationalDirection from "../direction/rotationalDirection"
import {createMatrix} from "../../utils";
import BlockCollection from "../blockCollection";

export default function Tetromino(args) {
    let tetrominoObj = Object.create(BlockCollection(args));

    tetrominoObj.rotate = function(rotationalDirection) {
        let tempBlocks = rotateBlocks(rotationalDirection);
        rotateEachBlock(tempBlocks, rotationalDirection);
        tetrominoObj.setAll(tempBlocks);
    };

    tetrominoObj.getRotatedIndex = function(row, col, rotationalDirection, numRotations) {
        let newRow = row;
        let newCol = col;
        for(let i = 0; i < numRotations; ++i) {
            let oldRow = newRow;
            let oldCol = newCol;
            if(rotationalDirection === RotationalDirection.CLOCKWISE) {
                newRow = oldCol;
                newCol = tetrominoObj.height() - 1 - oldRow;
            } else {
                newRow = tetrominoObj.width() - 1 - oldCol;
                newCol = oldRow;
            }
        }
        return [newRow, newCol];
    };

    let rotateBlocks = function(rotationalDirection) {
        let height = tetrominoObj.height();
        let width = tetrominoObj.width();
        let tempBlocks = createMatrix(width, height);
        for(let row = 0; row < height; ++row) {
            for(let col = 0; col < width; ++col) {
                let index = tetrominoObj.getRotatedIndex(row, col, rotationalDirection, 1);
                tempBlocks[index[0]][index[1]] = tetrominoObj.get(row,col);
            }
        }
        return tempBlocks;
    };

    let rotateEachBlock = function(blocks, rotationalDirection) {
        for(let row = 0; row < blocks.length; ++row) {
            for(let col = 0; col < blocks[0].length; ++col) {
                let block = blocks[row][col];
                if(block !== null && !block.isEmpty()) {
                    blocks[row][col].rotate(rotationalDirection);
                }
            }
        }
    };

    return tetrominoObj;
}