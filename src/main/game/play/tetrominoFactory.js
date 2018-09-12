import TetrominoShape from '../../tetris/tetromino/tetrominoShape';
import Tetromino from '../../tetris/tetromino/tetromino';
import Block from '../../tetris/tetromino/block';
import BlockCollection from '../../tetris/blockCollection';
import ImageBlockContent from './imageBlockContent';
import {createMatrix, getRandomInt} from '../../utils';

const START_X = 0;
const START_Y = 0;

const getNewTetromino = function(blocks) {
    let blockCollection = new BlockCollection({blocks:blocks});
}

export default function TetrominoFactory(args) {

    let {gameObjectFactory} = args;

    let lastTetrominoIndex = 0;

    this.buildTetromino = function(tetrominoShape) {

        let arrangement = TetrominoShape.properties[tetrominoShape].arrangement;
        
        let blocks = createMatrix(arrangement.length, arrangement[0].length);

        for(var row = 0; row < arrangement.length; ++row) {
            for(var col = 0; col < arrangement[row].length; ++col) {
                let newBlock;
                if(arrangement[row][col]) {
                    newBlock = getNewBlock();
                } else {
                    newBlock = null;
                }
                blocks[row][col] = newBlock;
            }
        }

        let blockCollection = new BlockCollection({blocks});

        return new Tetromino({blockCollection});
    };

    this.getRandomTetromino = function() {
        return this.buildTetromino(getRandomShape());
    };

    const getNewBlock = function() {
        return new Block({
            content: new ImageBlockContent({
                image: gameObjectFactory.image(START_X, START_Y, 'tetromino', 0)
            })
        });
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
            return TetrominoShape.values[random];
        }
    }.bind(this);
}