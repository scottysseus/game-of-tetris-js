import HorizontalDirection from "./direction/horizontalDirection";
export default function Well(args) {
    let {grid} = args;
    let activeTetromino = null;
    let activeRow = null;
    let activeCol = null;

    this.height = grid.height;
    this.width = grid.width;
    this.contains = grid.contains;
    this.get = grid.get;

    this.hasActiveTetromino = function() {
        return activeTetromino !== null;
    }

    this.getActiveTetromino = function() {
        return activeTetromino;
    }

    this.throwTetromino = function(tetromino) {
        activeTetromino = tetromino;
        activeRow = 0;
        activeCol = this.getCenteredColumn(tetromino.width());

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

    this.lowerActiveTetromino = function() {
        if(activeTetromino !== null) {
            if(!activeTetrominoWillUnderflow() && !willCollideVerically()) {
                clearTetromino();
                activeRow++;
                this.refreshActiveTetromino();
            } else {
                deactivateTetromino();
            }
        }
    };

    this.clearFullRows = function() {
        let numCleared = 0;

        for(let row = this.height() - 1; row >= 0; --row) {
            let numItems = getRowCount(row);
            if(numItems === 0) {
                break;
            }

            while(numItems === this.width()) {
                ++numCleared;
                collapseRow(row);
                numItems = getRowCount(row);
            }
        }

        return numCleared;
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

    this.getCenteredColumn = function(width) {
        return Math.floor((grid.width() / 2) - (width / 2));
    };

    this.shiftActiveTetromino = function(horizontalDirection) {
        let delta = HorizontalDirection.properties[horizontalDirection].delta;
        let newCol = activeCol + delta;
        if(activeTetromino !== null && grid.columnInBounds(newCol) && !willCollideHorizontally(horizontalDirection)) {
            clearTetromino();
            activeCol = newCol;
            this.refreshActiveTetromino();
        }
    };

    this.rotateActiveTetromino = function(circularDirection) {
        if(canRotate(circularDirection)) {
            clearTetromino()
            activeTetromino.rotate(circularDirection);
            this.refreshActiveTetromino();
        }
    };

    this.topIsTouched = function() {
        return getRowCount(0) > 0;
    }

    let willCollideVerically = function() {
        for(let col = 0; col < activeTetromino.width(); ++col) {
            for(let row = activeTetromino.height() - 1; row >= 0; --row) {
                if(activeTetromino.isEmptyBlock(row, col)) {
                    continue;
                }
                if(!grid.isEmptyBlock(activeRow + row + 1, activeCol + col)) {
                    return true;
                }
                break;
            }
        }
        return false;
    }.bind(this);

    let willCollideHorizontally = function(horizontalDirection) {
        let delta = HorizontalDirection.properties[horizontalDirection].delta;
        let startingPoint = activeTetromino.width() - Math.ceil(
            Math.pow(activeTetromino.width(), -1 * delta)
        );

        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = startingPoint; col < activeTetromino.width() && col >= 0; col += delta) {
                if(activeTetromino.isEmptyBlock(row, col)) {
                    continue;
                }
                if(!grid.isEmptyBlock(activeRow + row, activeCol + col + delta)) {
                    return true;
                }
                break;
            }
        }
        return false;
    }.bind(this);

    let activeTetrominoWillUnderflow = function() {
        return !(activeRow + activeTetromino.height() < grid.height());
    }.bind(this);

    let deactivateTetromino = function() {
        activeTetromino = null;
    }.bind(this);

    let canRotate = function(circularDirection) {
        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = 0; col < activeTetromino.width(); col++) {
                let newIndex = activeTetromino.getRotatedIndex(row, col, circularDirection, 1);
                let newRow = activeRow + newIndex[0];
                let newCol = activeCol + newIndex[1];
                if(!grid.columnInBounds(newCol) || !grid.rowInBounds(newRow) || (
                    !activeTetromino.contains(newIndex[0], newIndex[1])
                    && !activeTetromino.isEmptyBlock(row, col)
                    && !grid.isEmptyBlock(newRow, newCol)
                )) {
                    return false;
                }
            }
        }
        return true;
    }.bind(this);

    let clearTetromino = function() {
        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = 0; col < activeTetromino.width(); ++col) {
                if(!activeTetromino.isEmptyBlock(row, col)) {
                    grid.set(activeRow + row, activeCol + col, null);
                }
            }
        }
    }.bind(this);

    let getRowCount = function(row) {
        let itemsInRow = 0;
        for(let col = 0; col < this.width(); ++col) {
            if(!grid.isEmptyBlock(row, col)) {
                itemsInRow++;
            }
        }
        return itemsInRow;
    }.bind(this);

    let collapseRow = function(row) {
        while(row > 0 && getRowCount(row) > 0) {
            for(let col = 0; col < this.width(); ++col) {
                grid.set(row, col, grid.get(row-1, col));
            }
            --row;
        }
    }.bind(this);

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