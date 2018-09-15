import Phaser from 'phaser';

import WorldConstants from '../world/worldConstants';

const START_X = WorldConstants.WINDOW_BOTTOM_RIGHT_X;
const START_Y = WorldConstants.WINDOW_BOTTOM_RIGHT_Y;

const END_X = WorldConstants.WELL_TOP_LEFT_X + WorldConstants.WELL_WIDTH / 2;
const END_Y = WorldConstants.WELL_TOP_LEFT_Y;

let variableX = END_X;
let variableY = START_Y;

let points = [
    START_X, START_Y,
    variableX, variableY,   
    END_X, END_Y
];

export default function ThrowAnimator(args) {

    let {gameObjectFactory, duration} = args;

    this.animateThrow = function(tetrominoSprite) {
        let curve = new Phaser.Curves.Spline(points);

        let follower = gameObjectFactory.follower(curve, START_X, START_Y, tetrominoSprite);

        follower.startFollow({
            duration: duration,
            yoyo: false,
            ease: 'Sine.easeInOut',
            repeat: 0
        });
    }

};