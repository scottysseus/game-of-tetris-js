export default function BlockCollection(args) {
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

    this.equals = function(other) {
        if(!other.get || !other.height || !other.width) {
            return false;
        }

        if(this.height() !== other.height() || other.width() !== this.width()) {
            return false;
        }

        for(let row = 0; row < this.height(); ++row) {
            for(let col = 0; col < this.width(); ++col) {
                if(!blocks[row][col].equals(other.get(row,col))) {
                    return false;
                }
            }
        }
        return true;
    };
}