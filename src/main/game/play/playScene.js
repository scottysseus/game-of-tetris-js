import TetrominoFactory from './tetrominoFactory';
import TetrisGame from '../../tetris/tetrisGame';
import BlockRenderer from './blockRenderer';
import HorizontalDirection from '../../tetris/direction/horizontalDirection';
import RotationalDirection from '../../tetris/direction/rotationalDirection';

const GRID_START_X = 0;
const GRID_START_Y = 250;
const BLOCK_WIDTH = 25;
const BLOCK_HEIGHT = BLOCK_WIDTH;

export default function PlayScene(args) {

    let tetrisGame, blockRenderer;
    let counterclockwiseKey, clockwiseKey, leftKey, rightKey;

    let isShifting = false;
    let isRotating = false;

    this.preload = function() {

    }

    this.create = function() {
        this.add.image(0,0, 'background').setOrigin(0,0);

        const tetrominoFactory = new TetrominoFactory({gameObjectFactory: this.add});
        tetrisGame = new TetrisGame({tetrominoFactory});

        blockRenderer = new BlockRenderer();

        initializeKeys(this.input.keyboard);
    }

    this.update = function() {
        checkForInput(this.input.keyboard);
        tetrisGame.update();
        blockRenderer.renderBlockCollection(GRID_START_X, GRID_START_Y, BLOCK_WIDTH, tetrisGame.getWellGrid());
    }

    const initializeKeys = function(keyboardPlugin) {
        clockwiseKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);
        counterclockwiseKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA);
        leftKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        rightKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }.bind(this);

    const checkForInput = function(keyboardPlugin) {
        if(keyboardPlugin.checkDown(clockwiseKey, 500)) {
            tetrisGame.rotateActiveTetromino(RotationalDirection.CLOCKWISE);
        }

        if(keyboardPlugin.checkDown(counterclockwiseKey, 500)) {
            tetrisGame.rotateActiveTetromino(RotationalDirection.COUNTERCLOCKWISE);
        }

        if(keyboardPlugin.checkDown(leftKey, 500)) {
            tetrisGame.shiftActiveTetromino(HorizontalDirection.LEFT);
        }

        if(keyboardPlugin.checkDown(rightKey, 500)) {
            tetrisGame.shiftActiveTetromino(HorizontalDirection.RIGHT);
        }
    }.bind(this);

};