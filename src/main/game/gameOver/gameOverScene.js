import Phaser from 'phaser';
import Scenes from '../scenes';
import TextConstants from '../textConstants';

import {makeTextInteractive, getTextOptions} from '../phaserUtils';

let menuButton, restartButton;

const gameOverStyle = getTextOptions(TextConstants.TITLE_SIZE);
const optionStyle = getTextOptions(TextConstants.MENU_OPTION_SIZE);

export default class GameOverScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    create() {
        let centerX = this.game.canvas.width / 2;
        let centerY = this.game.canvas.height / 2;

        this.add.text(centerX, centerY - 100, "GAME OVER", gameOverStyle).setOrigin(0.5, 0.5);
        
        menuButton = this.add.text(centerX, centerY + 50, "MENU", optionStyle).setOrigin(0.5, 0.5);
        makeTextInteractive(menuButton);

        restartButton = this.add.text(centerX, centerY + 150, "RESTART", optionStyle).setOrigin(0.5, 0.5);
        makeTextInteractive(restartButton);

        menuButton.on('pointerup', function() {
            this.scene.get(Scenes.SCORE).scene.stop();
            this.scene.get(Scenes.PLAY).scene.stop();
            this.scene.get(Scenes.MENU).scene.start();
            this.scene.stop();
        }.bind(this));

        restartButton.on('pointerup', function() {
            this.scene.get(Scenes.SCORE).scene.restart();
            this.scene.get(Scenes.PLAY).scene.restart();
            this.scene.stop();
        }.bind(this));
    }
}