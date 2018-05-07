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

    this.contains = function(row, col) {
        return row < this.height() && col < this.width() && row >= 0 && col >= 0;
    };

    this.isEmptyBlock = function(row, col) {
        if(this.contains(row, col)) {
            let block = this.get(row, col);
            return block === undefined || block === null || block.isEmpty();
        }
        return true;
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
}