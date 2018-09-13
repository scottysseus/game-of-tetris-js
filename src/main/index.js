import Phaser from 'phaser';

import PlayScene from './game/play/playScene'
import PreloadScene from './game/init/preloadScene';
import ScoreScene from './game/score/scoreScene';
import GameOverScene from './game/gameOver/gameOverScene';

import Scenes from './game/scenes';

let preloadScene = new PreloadScene({active: true, key: Scenes.PRELOAD});
let playScene = new PlayScene({active: false, key: Scenes.PLAY});
let scoreScene = new ScoreScene({active: false, key: Scenes.SCORE});
let gameOverScene = new GameOverScene({active: false, key: Scenes.GAME_OVER});

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scene: [ preloadScene, playScene, scoreScene, gameOverScene ]
};

const game = new Phaser.Game(config);