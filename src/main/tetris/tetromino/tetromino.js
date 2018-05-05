import RotationalDirection from "../direction/rotationalDirection"
import {createMatrix} from "../../utils";
import BlockCollection from "../blockCollection";

export default function Tetromino(args) {

    let {blockCollection} = args;

    this.rotate = function(rotationalDirection) {
        let tempBlocks = rotateBlocks(rotationalDirection);
        rotateEachBlock(tempBlocks, rotationalDirection);
        blockCollection = new BlockCollection({blocks: tempBlocks});
    };

    this.height = blockCollection.width;
    this.width = blockCollection.width;
    this.contains = blockCollection.contains;
    this.get = blockCollection.get;

    this.getRotatedIndex = function(row, col, rotationalDirection, numRotations) {
        let newRow = row;
        let newCol = col;
        for(let i = 0; i < numRotations; ++i) {
            let oldRow = newRow;
            let oldCol = newCol;
            if(rotationalDirection === RotationalDirection.CLOCKWISE) {
                newRow = oldCol;
                newCol = blockCollection.height() - 1 - oldRow;
            } else {
                newRow = blockCollection.width() - 1 - oldCol;
                newCol = oldRow;
            }
        }
        return [newRow, newCol];
    };

    this.isEmptyBlock = function(row, col) {
        if(blockCollection.contains(row, col)) {
            return blockCollection.get(row, col).isEmpty();
        }
        return true;
    };

    this.getBlockCollection = function() {
        return blockCollection;
    };

    this.equals = function(other) {
        if(other.getBlockCollection && blockCollection.equals(other.getBlockCollection())) {
            return true;
        }
        return false;
    };

    let rotateBlocks = function(rotationalDirection) {
        let height = blockCollection.height();
        let width = blockCollection.width();
        let tempBlocks = createMatrix(width, height);
        for(let row = 0; row < height; ++row) {
            for(let col = 0; col < width; ++col) {
                let index = this.getRotatedIndex(row, col, rotationalDirection, 1);
                tempBlocks[index[0]][index[1]] = blockCollection.get(row,col);
            }
        }
        return tempBlocks;
    }.bind(this);

    let rotateEachBlock = function(blocks, rotationalDirection) {
        for(let row = 0; row < blocks.length; ++row) {
            for(let col = 0; col < blocks[0].length; ++col) {
                if(!blocks[row][col].isEmpty()) {
                    blocks[row][col].rotate(rotationalDirection);
                }
            }
        }
    }.bind(this);

    

}