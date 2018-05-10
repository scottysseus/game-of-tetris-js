import HorizontalDirection from "./direction/horizontalDirection";
import BlockCollection from "./BlockCollection";
export default function Well(args) {
    let wellObj = Object.create(BlockCollection(args));

    let activeTetromino = null;
    let activeRow = null;
    let activeCol = null;

    wellObj.throwTetromino = function(tetromino) {
        activeTetromino = tetromino;
        activeRow = 0;
        activeCol = wellObj.getCenteredColumn(tetromino.width());

        wellObj.refreshActiveTetromino();
    };

    wellObj.refreshActiveTetromino = function() {
        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = 0; col < activeTetromino.width(); ++col) {
                let newRow = activeRow + row;
                let newCol = activeCol + col;
                if(!activeTetromino.isEmptyBlock(row, col)) {
                    wellObj.set(newRow,newCol,activeTetromino.get(row, col));
                }
            } 
        }
    };

    wellObj.lowerActiveTetromino = function() {
        if(activeTetromino !== null) {
            if(!activeTetrominoWillUnderflow() && !willCollideVerically()) {
                clearTetromino();
                activeRow++;
                wellObj.refreshActiveTetromino();
            } else {
                deactivateTetromino();
            }
        }
    };

    wellObj.clearFullRows = function() {
        let numCleared = 0;

        for(let row = wellObj.height() - 1; row >= 0; --row) {
            let numItems = getRowCount(row);
            if(numItems === 0) {
                break;
            }

            while(numItems === wellObj.width()) {
                ++numCleared;
                collapseRow(row);
                numItems = getRowCount(row);
            }
        }

        return numCleared;
    };

    wellObj.equals = function(other) {
        if(other.getGrid && other.width && other.height) {
            if(other.width() === wellObj.width() && other.height() === wellObj.height() 
                && compareGrid(other.getGrid())) {
                return true;
            }
        }
        return false;
    };

    wellObj.getCenteredColumn = function(width) {
        return Math.floor((wellObj.width() / 2) - (width / 2));
    };

    wellObj.shiftActiveTetromino = function(horizontalDirection) {
        let delta = HorizontalDirection.properties[horizontalDirection].delta;
        let newCol = activeCol + delta;
        if(activeTetromino !== null && wellObj.columnInBounds(newCol) && !willCollideHorizontally(horizontalDirection)) {
            clearTetromino();
            activeCol = newCol;
            wellObj.refreshActiveTetromino();
        }
    };

    wellObj.rotateActiveTetromino = function(circularDirection) {
        if(canRotate(circularDirection)) {
            clearTetromino()
            activeTetromino.rotate(circularDirection);
            wellObj.refreshActiveTetromino();
        }
    };

    let willCollideVerically = function() {
        for(let col = 0; col < activeTetromino.width(); ++col) {
            for(let row = activeTetromino.height() - 1; row >= 0; --row) {
                if(activeTetromino.isEmptyBlock(row, col)) {
                    continue;
                }
                if(wellObj.get(activeRow + row + 1, activeCol + col) !== null) {
                    return true;
                }
                break;
            }
        }
        return false;
    };

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
                if(!wellObj.isEmptyBlock(activeRow + row, activeCol + col + delta)) {
                    return true;
                }
                break;
            }
        }
        return false;
    };

    let activeTetrominoWillUnderflow = function() {
        return !(activeRow + activeTetromino.height() < wellObj.height());
    };

    let deactivateTetromino = function() {
        activeTetromino = null;
    };

    let canRotate = function(circularDirection) {
        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = 0; col < activeTetromino.width(); col++) {
                let newIndex = activeTetromino.getRotatedIndex(row, col, circularDirection, 1);
                let newRow = activeRow + newIndex[0];
                let newCol = activeCol + newIndex[1];
                if(!wellObj.columnInBounds(newCol) || wellObj.rowInBounds(newRow) || (
                    !activeTetromino.contains(newIndex[0], newIndex[1]
                    && !activeTetromino.isEmptyBlock(row, col))
                    && !wellObj.isEmptyBlock(newRow, newCol)
                )) {
                    return false;
                }
            }
        }
        return true;
    };

    let clearTetromino = function() {
        for(let row = 0; row < activeTetromino.height(); ++row) {
            for(let col = 0; col < activeTetromino.width(); ++col) {
                if(!activeTetromino.isEmptyBlock(row, col)) {
                    wellObj.set(activeRow + row, activeCol + col, null);
                }
            }
        }
    };

    let getRowCount = function(row) {
        let itemsInRow = 0;
        for(let col = 0; col < wellObj.width(); ++col) {
            if(!wellObj.isEmptyBlock(row, col)) {
                itemsInRow++;
            }
        }
        return itemsInRow;
    };

    let collapseRow = function(row) {
        while(row > 0 && getRowCount(row) > 0) {
            for(let col = 0; col < wellObj.width(); ++col) {
                wellObj.set(row, col, wellObj.get(row-1, col));
            }
            --row;
        }
    };

    return wellObj;
};