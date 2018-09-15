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

const BUTTON_DELAY = 100;

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
    if(keyboardPlugin.checkDown(clockwiseKey, BUTTON_DELAY)) {
        tetrisGame.rotateActiveTetromino(RotationalDirection.CLOCKWISE);
    }

    if(keyboardPlugin.checkDown(counterclockwiseKey, BUTTON_DELAY)) {
        tetrisGame.rotateActiveTetromino(RotationalDirection.COUNTERCLOCKWISE);
    }

    if(keyboardPlugin.checkDown(leftKey, BUTTON_DELAY)) {
        tetrisGame.shiftActiveTetromino(HorizontalDirection.LEFT);
    }

    if(keyboardPlugin.checkDown(rightKey, BUTTON_DELAY)) {
        tetrisGame.shiftActiveTetromino(HorizontalDirection.RIGHT);
    }

    if(keyboardPlugin.checkDown(downKey, BUTTON_DELAY)) {
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

    init() {
        blockRenderer = new BlockRenderer();

        initializeKeys.call(this);
    }

    preload() {

    }

    create() {
        const tetrominoFactory = new TetrominoFactory({gameObjectFactory: this.add});
        tetrisGame = new TetrisGame({tetrominoFactory, eventListener: this});
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