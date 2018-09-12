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
    let counterclockwiseKey, clockwiseKey, leftKey, rightKey, downKey;

    let isShifting = false;
    let isRotating = false;

    let debugText;

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
        clockwiseKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        counterclockwiseKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        leftKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        rightKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        downKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
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

        if(keyboardPlugin.checkDown(downKey, 500)) {
            tetrisGame.lowerActiveTetromino();
        }
    }.bind(this);

    // for debug only
    const displayWellDebug = function(gameObjectFactory) {
        let wellGrid = tetrisGame.getWellGrid();

        let debugString = '';

        for(let row = 0; row < wellGrid.height(); ++row) {
            debugString += '[';
            for(let col = 0; col < wellGrid.width(); ++col) {
                if(wellGrid.isEmptyBlock(row, col)) {
                    debugString += '0';
                } else {
                    debugString += '1';
                }
            }
            debugString += ']\n';
        }

        if(!debugText) {
            debugText = gameObjectFactory.text(320, 300, debugString, { fontSize: '18px', fill: '#FFFFFF' });
        }
        debugText.setText(debugString);

    }.bind(this);

};