import Phaser from 'phaser'
import WebFont from 'webfontloader'
import config from '../config';

export default function Boot() {
    let bootState = Object.create(new Phaser.State());

    bootState.init = function() {
        bootState.fontsReady = false;
        bootState.fontsLoaded = bootState.fontsLoaded.bind(bootState);
    };

    bootState.preload = function() {
        if (config.webfonts.length) {
            WebFont.load({
                google: {
                    families: config.webfonts
                },
                active: bootState.fontsLoaded
            })
        }
      
          let text = bootState.add.text(bootState.world.centerX, bootState.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
          text.anchor.setTo(0.5, 0.5)
      
          bootState.load.image('loaderBg', './assets/images/loader-bg.png')
          bootState.load.image('loaderBar', './assets/images/loader-bar.png')
    };

    bootState.render = function() {
        if (config.webfonts.length && bootState.fontsReady) {
            bootState.state.start('Splash')
        }
        if (!config.webfonts.length) {
            bootState.state.start('Splash')
        }
    };

    bootState.fontsLoaded = function() {
        bootState.fontsReady = true;
    };

    return bootState;
};