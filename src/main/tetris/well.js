export default function Well(args) {
    let {grid} = args;
    let activeTetromino = null;
    let activeRow = null;
    let activeCol = null;

    this.height = grid.width;
    this.width = grid.width;
    this.contains = grid.contains;
    this.get = grid.get;

    this.throwTetromino = function(tetromino) {
        activeTetromino = tetromino;
        activeRow = 0;
        activeCol = getCenteredColumn(tetromino.width());

        this.refreshActiveTetromino();
    };

    this.getGrid = function() {
        return grid;
    };

    this.refreshActiveTetromino = function() {
        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = 0; col < activeTetromino.width(); ++col) {
                let newRow = activeRow + row;
                let newCol = activeCol + col;
                if(!activeTetromino.isEmptyBlock(row, col)) {
                    grid.set(newRow,newCol,activeTetromino.get(row, col));
                }
            } 
        }
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

    let getCenteredColumn = function(width) {
        return grid.width() / 2 - width / 2;
    }.bind(this);
};