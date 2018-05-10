export default function BlockCollection(args) {
    let {blocks} = args;
    let blockCollectionObj = {};
    
    blockCollectionObj.height = function() {
        return blocks.length;
    };

    blockCollectionObj.width = function() {
        return blocks[0] ?  blocks[0].length : 0;
    };

    blockCollectionObj.columnInBounds = function(col) {
        return col >= 0 && col < blockCollectionObj.width()
    };

    blockCollectionObj.rowInBounds = function(row) {
        return row >= 0 && row < blockCollectionObj.height();
    }

    blockCollectionObj.get = function(row, col) {
        if(blockCollectionObj.contains(row, col)) {
            return blocks[row][col];
        }
    };

    blockCollectionObj.set = function(row, col, block) {
        if(blockCollectionObj.contains(row, col)) {
            blocks[row][col] = block;
        }
    };

    blockCollectionObj.setAll = function(newBlocks) {
        blocks = newBlocks;
    };

    blockCollectionObj.contains = function(row, col) {
        return row < blockCollectionObj.height() && col < blockCollectionObj.width() && row >= 0 && col >= 0;
    };

    blockCollectionObj.isEmptyBlock = function(row, col) {
        if(blockCollectionObj.contains(row, col)) {
            let block = blockCollectionObj.get(row, col);
            return block === undefined || block === null || block.isEmpty();
        }
        return true;
    };

    blockCollectionObj.equals = function(other) {
        if(!other.get || !other.height || !other.width || !other.isEmptyBlock) {
            return false;
        }

        if(blockCollectionObj.height() !== other.height() || other.width() !== blockCollectionObj.width()) {
            return false;
        }

        for(let row = 0; row < blockCollectionObj.height(); ++row) {
            for(let col = 0; col < blockCollectionObj.width(); ++col) {
                if(blockCollectionObj.isEmptyBlock(row, col)) {
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

    return blockCollectionObj;
}