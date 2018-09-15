import TetrominoShape from '../../tetris/tetromino/tetrominoShape';
import Tetromino from '../../tetris/tetromino/tetromino';
import Block from '../../tetris/tetromino/block';
import BlockCollection from '../../tetris/blockCollection';
import ImageBlockContent from './imageBlockContent';
import {createMatrix, getRandomInt} from '../../utils';

import WorldConstants from '../world/worldConstants';

const START_X = WorldConstants.WINDOW_BOTTOM_RIGHT_X;
const START_Y = WorldConstants.WINDOW_BOTTOM_RIGHT_Y;
const BLOCK_WIDTH = WorldConstants.BLOCK_WIDTH;

const getNewTetromino = function(blocks) {
    let blockCollection = new BlockCollection({blocks:blocks});
}

export default function TetrominoFactory(args) {

    let {gameObjectFactory} = args;

    let lastTetrominoIndex = 0;

    this.buildTetromino = function(tetrominoShape) {

        let arrangement = TetrominoShape.properties[tetrominoShape].arrangement;
        
        let blocks = createMatrix(arrangement.length, arrangement[0].length);

        let index = 0;
        for(var row = 0; row < arrangement.length; ++row) {
            for(var col = 0; col < arrangement[row].length; ++col) {
                let newBlock;
                if(arrangement[row][col]) {
                    let x = START_X + BLOCK_WIDTH * col;
                    let y = START_Y - BLOCK_WIDTH * row;
                    newBlock = getNewBlock(x, y, tetrominoShape, index);
                } else {
                    newBlock = null;
                }
                blocks[row][col] = newBlock;
                ++index;
            }
        }

        let blockCollection = new BlockCollection({blocks});

        return new Tetromino({blockCollection});
    };

    this.getRandomTetromino = function() {
        return this.buildTetromino(getRandomShape());
    };

    const getNewBlock = function(x,y, tetrominoShape, index) {
        return new Block({
            content: new ImageBlockContent({
                image: gameObjectFactory.image(x, y, tetrominoShape, index)
            })
        });
    }.bind(this);

    this.getRandomShape = function() {
        return getRandomShapeRecurse(7);
    }

    const getRandomShapeRecurse = function(bounds) {
        let random = getRandomInt(0, bounds);
        if(random == 7 || random == lastTetrominoIndex) {
            return this.getRandomShape(7);
        } else {
            lastTetrominoIndex = random;
            return TetrominoShape.values[random];
        }
    }.bind(this);
}