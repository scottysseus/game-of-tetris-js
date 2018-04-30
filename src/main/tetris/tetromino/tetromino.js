import RotationalDirection from "../direction/rotationalDirection"
import {createMatrix} from "../../utils";

export default function Tetromino(args) {

    let {blocks} = args;

    this.height = function() {
        return blocks.length;
    };

    this.width = function() {
        return blocks[0] ?  blocks[0].length : 0;
    };

    this.get = function(row, col) {
        if(this.contains(row, col)) {
            return blocks[row][col];
        }
    };

    this.contains = function(row, col) {
        return row < this.height() && col < this.width() && row >= 0 && col >= 0;
    };

    this.rotate = function(rotationalDirection) {
        let tempBlocks = rotateBlocks(rotationalDirection);
        rotateEachBlock(tempBlocks, rotationalDirection);
        blocks = tempBlocks;
    };

    this.getRotatedIndex = function(row, col, rotationalDirection, numRotations) {
        let newRow = row;
        let newCol = col;
        for(let i = 0; i < numRotations; ++i) {
            let oldRow = newRow;
            let oldCol = newCol;
            if(rotationalDirection === RotationalDirection.CLOCKWISE) {
                newRow = oldCol;
                newCol = this.height() - 1 - oldRow;
            } else {
                newRow = this.width() - 1 - oldCol;
                newCol = oldRow;
            }
        }
        return [newRow, newCol];
    };

    this.isEmptyBlock = function(row, col) {
        if(this.contains(row, col)) {
            return blocks[row][col].isEmpty();
        }
        return true;
    };

    this.getBlocks = function() {
        return blocks;
    };

    this.equals = function(other) {
        if(other.height && other.width && other.getBlocks) {
            let otherBlocks = other.getBlocks();
            if(other.height() === this.height() && other.width() === this.width() &&
            compareBlocks(otherBlocks)) {
                return true;
            }
        }
        return false;
    };

    let rotateBlocks = function(rotationalDirection) {
        let height = this.height();
        let width = this.width();
        let tempBlocks = createMatrix(width, height);
        for(let row = 0; row < height; ++row) {
            for(let col = 0; col < width; ++col) {
                let index = this.getRotatedIndex(row, col, rotationalDirection, 1);
                tempBlocks[index[0]][index[1]] = blocks[row][col];
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

    let compareBlocks = function(otherBlocks) {
        for(let row = 0; row < this.height(); ++row) {
            for(let col = 0; col < this.width(); ++col) {
                if(!blocks[row][col].equals(otherBlocks[row][col])) {
                    return false;
                }
            }
        }
        return true;
    }.bind(this);

}