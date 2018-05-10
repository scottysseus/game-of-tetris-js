/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default function Game() {
    let gameState = Object.create(new Phaser.State());

    gameState.create = function() {    
        gameState.add.sprite(0, 0, 'background');
        gameState.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        gameState.load.start();

    };

    gameState.render = function() {

    };

    return gameState;
};