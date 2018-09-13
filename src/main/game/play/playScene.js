import Phaser from 'phaser';

import TetrominoFactory from './tetrominoFactory';
import TetrisGame from '../../tetris/tetrisGame';
import BlockRenderer from './blockRenderer';
import HorizontalDirection from '../../tetris/direction/horizontalDirection';
import RotationalDirection from '../../tetris/direction/rotationalDirection';

import Scenes from '../scenes';
import RegistryFields from '../registryFields';

const GRID_START_X = 0;
const GRID_START_Y = 250;
const BLOCK_WIDTH = 25;

let tetrisGame, blockRenderer;
let counterclockwiseKey, clockwiseKey, leftKey, rightKey, downKey;

let debugText;

const initializeKeys = function() {
    let keyboardPlugin = this.input.keyboard;
    clockwiseKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    counterclockwiseKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    leftKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    rightKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    downKey = keyboardPlugin.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
};

const checkForInput = function() {
    let keyboardPlugin = this.input.keyboard;
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
};

// for debug only
const displayWellDebug = function() {
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
        debugText = this.add.text(320, 300, debugString, { fontSize: '18px', fill: '#FFFFFF' });
    }
    debugText.setText(debugString);

};

export default class PlayScene extends Phaser.Scene {
    
    constructor(args) {
        super(args);
    }

    preload() {

    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0,0);

        const tetrominoFactory = new TetrominoFactory({gameObjectFactory: this.add});
        tetrisGame = new TetrisGame({tetrominoFactory, eventListener: this});

        blockRenderer = new BlockRenderer();

        initializeKeys.call(this);

        this.scene.launch(Scenes.SCORE);
    }

    update() {
        checkForInput.call(this);
        tetrisGame.update();
        blockRenderer.renderBlockCollection(GRID_START_X, GRID_START_Y, BLOCK_WIDTH, tetrisGame.getWellGrid());
    }

    scoreChanged(score) {
        this.registry.set(RegistryFields.SCORE, score);
    }

    gameOver() {
        this.scene.launch(Scenes.GAME_OVER);
    }
};