import Phaser from 'phaser';

import WorldConstants from '../world/worldConstants';
import TetrominoShape from '../../tetris/tetromino/tetrominoShape';

const START_X = WorldConstants.WINDOW_BOTTOM_LEFT_X;
const START_Y = WorldConstants.WINDOW_BOTTOM_LEFT_Y;

const END_X = WorldConstants.WELL_TOP_LEFT_X + WorldConstants.WELL_WIDTH / 2;

let variableX = END_X;
let variableY = START_Y;

export default function ThrowAnimator(args) {

    let {gameObjectFactory, duration} = args;
    

    this.animateThrow = function(tetrominoShape, animationCompleteCallback) {
        let tetrominoHeightPx = TetrominoShape.properties[tetrominoShape].height * WorldConstants.BLOCK_WIDTH;
        let tetrominoWidthPx = TetrominoShape.properties[tetrominoShape].width * WorldConstants.BLOCK_WIDTH;
        let startX = START_X + tetrominoWidthPx / 2;
        let startY = START_Y - tetrominoHeightPx / 2; 
        let endY = WorldConstants.WELL_TOP_LEFT_Y + tetrominoHeightPx / 2;

        const points = [
            startX, startY,
            variableX, variableY,   
            END_X, endY
        ];
        
        let curve = new Phaser.Curves.Spline(points);
        let follower = gameObjectFactory.follower(curve, startX, startY, tetrominoShape + 'Whole');

        follower.startFollow({
            duration: duration,
            yoyo: false,
            ease: 'Sine.easeInOut',
            repeat: 0,
            target: follower,
            onComplete: function() {
                follower.destroy();
                animationCompleteCallback();
            }
        });
    }

};