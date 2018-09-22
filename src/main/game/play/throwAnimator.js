import Phaser from 'phaser';

import WorldConstants from '../world/worldConstants';
import TetrominoShape from '../../tetris/tetromino/tetrominoShape';

import Animations from '../animations';

const START_X = WorldConstants.WINDOW_BOTTOM_LEFT_X - 15;
const START_Y = WorldConstants.WINDOW_BOTTOM_LEFT_Y;

const END_X = WorldConstants.WELL_TOP_LEFT_X + WorldConstants.WELL_WIDTH / 2;

let variableX = END_X;
let variableY = START_Y;

export default function ThrowAnimator(args) {

    let {gameObjectFactory, thrower, duration} = args;
    

    this.animateThrow = function(tetrominoShape, animationCompleteCallback) {
        let tetrominoHeightPx = TetrominoShape.properties[tetrominoShape].height * WorldConstants.BLOCK_WIDTH;
        let tetrominoWidthPx = TetrominoShape.properties[tetrominoShape].width * WorldConstants.BLOCK_WIDTH;
        let startY = START_Y - tetrominoHeightPx / 2; 
        let endY = WorldConstants.WELL_TOP_LEFT_Y + tetrominoHeightPx / 2;

        let endX, startX;
        if (tetrominoShape === TetrominoShape.I) {
            endX = END_X - tetrominoWidthPx / 2;
            startX = START_X + tetrominoWidthPx;
        } else {
            endX = END_X;
            startX = START_X + tetrominoWidthPx / 2;
        }

        const points = [
            startX, startY,
            variableX, variableY,   
            endX, endY
        ];
        
        let curve = new Phaser.Curves.Spline(points);
        let follower = gameObjectFactory.follower(curve, startX, startY, tetrominoShape + 'Whole');

        thrower.anims.play(Animations.THROW, true);

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