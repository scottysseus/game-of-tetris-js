import {RotationalDirection} from "../direction/rotationalDirection"

export default function Tetromino(args) {

    let {blocks} = args;

    this.height = function() {
        return blocks.length;
    };

    this.width = function() {
        return blocks[0].length;
    };

    let rotateBlocks = function(rotationalDirection) {
        let height = this.height();
        let width = this.width();
        let tempBlocks = Array(width).fill(Array(height));
        for(row = 0; row < height; ++row) {
            for(col = 0; col < width; ++col) {
                index = this.getRotatedIndex(row, col, rotationalDirection, 1);
                tempBlocks[index[0]][index[1]] = blocks[row][col];
            }
        }
        return tempBlocks;
    };

    let rotateEachBlock = function(blocks, rotationalDirection) {
        for(row = 0; row < this.height(); ++row) {
            for(col = 0; col < this.width(); ++col) {
                blocks[row][col].rotate(rotationalDirection);
            }
        }
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
        rotateEachBlock(tempBlocks, RotationalDirection.reverse(rotationalDirection));
        blocks = tempBlocks;
    };

    this.getRotatedIndex = function(row, col, rotationalDirection, numRotations) {
        let newRow = row;
        let newCol = col;
        for(i = 0; i < numRotations; ++i) {
            let oldRow = newRow;
            let oldCol = newCol;
            if(rotationalDirection = RotationalDirection.CLOCKWISE) {
                newRow = oldCol;
                newCol = height - 1 - oldRow;
            } else {
                newRow = width - 1 - oldCol;
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

}