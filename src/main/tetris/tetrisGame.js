import Well from "./well";
import BlockCollection from "./blockCollection";
import { createMatrix, getRandomInt } from "./../utils";

const SCORE_MULTIPLIER = 100;
const INITIAL_DROP_SPEED = 48;
const WELL_WIDTH = 12;
const WELL_HEIGHT = 20;

export default function TetrisGame(args) {

    let {tetrominoFactory} = args;

    let well = new Well({
        grid: new BlockCollection({
            blocks: createMatrix(WELL_HEIGHT, WELL_WIDTH)
        })
    });

    let score = 0;
    let dropSpeed = INITIAL_DROP_SPEED;
    let frameCount = 0;

    let lastTetrominoIndex;

    let gameOver = false;

    this.update = function() {
        if(gameOver) {
            return;
        }

        if(!well.hasActiveTetromino()) {
            well.throwTetromino(getRandomTetromino());
        }

        if(frameCount >= dropSpeed) {
            well.lowerActiveTetromino();    
            frameCount = 0;
        }
        
        if(!well.hasActiveTetromino()) {
            let numRowsCleared = well.clearFullRows();
            score += numRowsCleared * SCORE_MULTIPLIER;
            setDropSpeedFromScore();
        }

        if(well.topIsTouched()) {
            gameOver = true;
        }

        frameCount++;
    }

    this.rotateActiveTetromino = function(circularDirection) {
        well.rotateActiveTetromino(circularDirection);
    }

    this.shiftActiveTetromino = function(horizontalDirection) {
        well.shiftActiveTetromino(horizontalDirection);
    }

    this.isGameOver = function() {
        return gameOver;
    }

    this.getWellGrid = function() {
        return well.getGrid();
    }

    const getRandomTetromino = function() {
        return tetrominoFactory.buildTetromino(getRandomShape());
    }.bind(this);

    const getRandomShape = function() {
        return getRandomShapeRecurse(7);
    }.bind(this);

    const getRandomShapeRecurse = function(bounds) {
        let random = getRandomInt(0, bounds);
        if(random == 7 || random == lastTetrominoIndex) {
            return getRandomShape(7);
        } else {
            lastTetrominoIndex = random;
            return TetrominoShape.values()[random];
        }
    }.bind(this);

    const setDropSpeedFromScore = function() {
        const level = score / (5 * SCORE_MULTIPLIER);
        if(level <= 8) {
            dropSpeed =  48 - 5 * level;
        } else if(level == 9) {
            dropSpeed = 6;
        } else if(level >= 10 && level <= 12) {
            dropSpeed = 5;
        } else if(level >= 13 && level <= 15) {
            dropSpeed = 4;
        } else if(level >= 16 && level <= 18) {
            dropSpeed = 3;
        } else if(level >= 19 && level <= 28) {
            dropSpeed = 2;
        } else {
            dropSpeed = 1;
        }
    }.bind(this);
}