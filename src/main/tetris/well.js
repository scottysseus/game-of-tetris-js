export default function Well(args) {
    let {grid, activeTetromino, activeRow, activeCol} = args;

    this.throwTetromino = function(tetromino) {

    };

    this.getGrid = function() {
        return grid;
    };

    this.height = function() {
        return grid.length;
    };
    
    this.width = function() {
        return grid[0] ? grid[0].length : 0;
    };

    this.equals = function(other) {
        if(other.getGrid && other.width && other.height) {
            if(other.width() === this.width() && other.height() === this.height() 
                && compareGrid(other.getGrid())) {
                return true;
            }
        }
        return false;
    };

    let compareGrid = function(otherGrid) {
        for(let row = 0; row < this.height(); ++row) {
            for(let col = 0; col < this.width(); ++col) {
                if(otherGrid[row][col] !== grid[row][col] || 
                    (grid[row][col].equals && !grid[row][col].equals(otherGrid[row][col]))) {
                    return false;
                }
            }
        }
        return true;
    }.bind(this);
};