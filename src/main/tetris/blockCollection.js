import RotationalDirection from '../tetris/direction/rotationalDirection';
import {createMatrix} from '../utils';

export default function BlockCollection(args) {
    let {blocks} = args;
    
    this.height = function() {
        return blocks.length;
    };

    this.width = function() {
        return blocks[0] ?  blocks[0].length : 0;
    };

    this.columnInBounds = function(col) {
        return col >= 0 && col < this.width()
    };

    this.rowInBounds = function(row) {
        return row >= 0 && row < this.height();
    }

    this.get = function(row, col) {
        if(this.contains(row, col)) {
            return blocks[row][col];
        }
    };

    this.set = function(row, col, block) {
        if(this.contains(row, col)) {
            blocks[row][col] = block;
        }
    };

    this.clear = function(row, col) {
        if(!this.isEmptyBlock(row, col)) {
            blocks[row][col].clearContent();
            blocks[row][col] = null;
        }
    }

    this.contains = function(row, col) {
        return row < this.height() && col < this.width() && row >= 0 && col >= 0;
    };

    this.isEmptyBlock = function(row, col) {
        if(this.contains(row, col)) {
            let block = this.get(row, col);
            return block === undefined || block === null || block.isEmpty();
        }
        return false;
    };

    this.rotate = function(rotationalDirection) {
        rotateBlocks(rotationalDirection);
        rotateEachBlock(rotationalDirection);
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

    this.equals = function(other) {
        if(!other.get || !other.height || !other.width || !other.isEmptyBlock) {
            return false;
        }

        if(this.height() !== other.height() || other.width() !== this.width()) {
            return false;
        }

        for(let row = 0; row < this.height(); ++row) {
            for(let col = 0; col < this.width(); ++col) {
                if(this.isEmptyBlock(row, col)) {
                    if(!other.isEmptyBlock(row, col)) {
                        return false;
                    }
                } else {
                    let thisBlock = blocks[row][col];
                    let otherBlock = other.get(row,col);
                    if(!thisBlock.equals(otherBlock)) {
                        return false;
                    }
                }
            }
        }
        return true;
    };

    let rotateBlocks = function(rotationalDirection) {
        let height = this.height();
        let width = this.width();
        let tempBlocks = createMatrix(width, height);
        for(let row = 0; row < height; ++row) {
            for(let col = 0; col < width; ++col) {
                let index = this.getRotatedIndex(row, col, rotationalDirection, 1);
                tempBlocks[index[0]][index[1]] = this.get(row,col);
            }
        }
        blocks = tempBlocks;
    }.bind(this);

    let rotateEachBlock = function(rotationalDirection) {
        for(let row = 0; row < blocks.length; ++row) {
            for(let col = 0; col < blocks[0].length; ++col) {
                let block = blocks[row][col];
                if(block !== null && !block.isEmpty()) {
                    blocks[row][col].rotate(rotationalDirection);
                }
            }
        }
    }.bind(this);
}