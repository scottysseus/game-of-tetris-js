/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default function Game() {
    let gameState = Object.create(new Phaser.State());

    gameState.create = function() {    
        gameState.add.tileSprite();
    };

    gameState.render = function() {

    };

    return gameState;
};