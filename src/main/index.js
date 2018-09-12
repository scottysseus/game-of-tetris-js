import Phaser from 'phaser';

import PlayScene from './game/play/playScene'
import PreloadScene from './game/init/preloadScene';
import ScoreScene from './game/score/scoreScene';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scene: [ PreloadScene, PlayScene, ScoreScene ]
};

const game = new Phaser.Game(config);