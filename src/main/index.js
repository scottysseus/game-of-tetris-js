import Phaser from 'phaser';

import PlayScene from './game/play/playScene'
import PreloadScene from './game/init/preloadScene';

let playScene = new PlayScene();
playScene.key = 'play';
playScene.active = true;

let preloadScene = new PreloadScene();
preloadScene.key = 'preload';
preloadScene.active = false;

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scene: [ preloadScene, playScene ]
};

const game = new Phaser.Game(config);