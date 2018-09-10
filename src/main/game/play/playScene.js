import TetrominoFactory from './tetrominoFactory';
import TetrisGame from '../../tetris/tetrisGame';
import BlockRenderer from './blockRenderer';

const GRID_START_X = 0;
const GRID_START_Y = 250;
const BLOCK_WIDTH = 25;
const BLOCK_HEIGHT = BLOCK_WIDTH;

export default function PlayScene(args) {

    let tetrisGame, blockRenderer;

    this.preload = function() {

    }

    this.create = function() {
        this.add.image(0,0, 'background').setOrigin(0,0);

        const tetrominoFactory = new TetrominoFactory({gameObjectFactory: this.add});
        tetrisGame = new TetrisGame({tetrominoFactory});

        blockRenderer = new BlockRenderer();
    }

    this.update = function() {
        tetrisGame.update();
        blockRenderer.renderBlockCollection(GRID_START_X, GRID_START_Y, BLOCK_WIDTH, tetrisGame.getWellGrid());
    }

};