import Phaser from 'phaser';

import TetrominoFactory from './tetrominoFactory';
import TetrisGame from '../../tetris/tetrisGame';
import BlockRenderer from './blockRenderer';
import HorizontalDirection from '../../tetris/direction/horizontalDirection';
import RotationalDirection from '../../tetris/direction/rotationalDirection';
import ThrowAnimator from './throwAnimator';

import Scenes from '../scenes';
import RegistryFields from '../registryFields';
import WorldConstants from '../world/worldConstants';

let tetrisGame, blockRenderer;

let debugText;

let throwAnimator;

const initializeKeys = function() {
    let keyboardPlugin = this.input.keyboard;

    keyboardPlugin.on('keydown_X', () => {
        tetrisGame.rotateActiveTetromino(RotationalDirection.CLOCKWISE);
    });

    keyboardPlugin.on('keydown_Z', () => {
        tetrisGame.rotateActiveTetromino(RotationalDirection.COUNTERCLOCKWISE);
    });

    keyboardPlugin.on('keydown_LEFT', () => {
        tetrisGame.shiftActiveTetromino(HorizontalDirection.LEFT);
    });

    keyboardPlugin.on('keydown_RIGHT', () => {
        tetrisGame.shiftActiveTetromino(HorizontalDirection.RIGHT);
    });

    keyboardPlugin.on('keydown_DOWN', () => {
        tetrisGame.lowerActiveTetromino();
    });
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
        throwAnimator = new ThrowAnimator({
            gameObjectFactory: this.add,
            duration: 750
        });

        initializeKeys.call(this);
    }

    preload() {

    }

    create() {
        const tetrominoFactory = new TetrominoFactory({gameObjectFactory: this.add});
        tetrisGame = new TetrisGame({tetrominoFactory, eventListener: this});
    }

    update() {
        tetrisGame.update();
        blockRenderer.renderBlockCollection(WorldConstants.WELL_TOP_LEFT_X, WorldConstants.WELL_TOP_LEFT_Y, WorldConstants.BLOCK_WIDTH, tetrisGame.getWellGrid());
    }

    scoreChanged(score) {
        this.registry.set(RegistryFields.SCORE, score);
    }

    gameOver() {
        this.scene.launch(Scenes.GAME_OVER);
    }

    throwingTetromino(tetrominoShape) {
        throwAnimator.animateThrow(tetrominoShape, () => tetrisGame.throwTetromino(tetrominoShape));
    }
};