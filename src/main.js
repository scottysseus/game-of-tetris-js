import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

let createGame = function() {

    let game = Object.create(new Phaser.Game());

    const docElement = document.documentElement;
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;

    game.state.add('Boot', BootState, false);
    game.state.add('Splash', SplashState, false);
    game.state.add('Game', GameState, false);

    // with Cordova, need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
        game.state.start('Boot');
    }

    return game;
};

window.game = createGame();

if (window.cordova) {
    var app = {
        initialize: function () {
            document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
        )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
        this.receivedEvent('deviceready')

        // When the device is ready, start Phaser Boot state.
        window.game.state.start('Boot')
    },

    receivedEvent: function (id) {
        console.log('Received Event: ' + id)
    }
  }

    app.initialize()
}
