import Phaser from 'phaser';
import { centerGameObjects } from '../utils';

export default function Splash() {

    let splashState = Object.create(new Phaser.State());

    splashState.init = function() {
        splashState.loaderBg = splashState.add.sprite(splashState.game.world.centerX, splashState.game.world.centerY, 'loaderBg');
        splashState.loaderBar = splashState.add.sprite(splashState.game.world.centerX, splashState.game.world.centerY, 'loaderBar');
        centerGameObjects([splashState.loaderBg, splashState.loaderBar]);
    
        splashState.load.setPreloadSprite(splashState.loaderBar);
        //
        // load your assets
        //
        splashState.load.image('mushroom', 'assets/images/mushroom2.png');
        splashState.load.image('background', 'assets/images/background.png');
        splashState.load.start();
    };

    splashState.create = function() {
        splashState.state.start('Game');
    };

    return splashState;

};