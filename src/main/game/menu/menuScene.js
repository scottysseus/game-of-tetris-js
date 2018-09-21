import Phaser from 'phaser';

import Scenes from '../scenes';

import TextConstants from '../textConstants';
import {makeTextInteractive, getTextOptions} from '../phaserUtils';

const titleStyle = getTextOptions(TextConstants.TITLE_SIZE);
const optionStyle = getTextOptions(TextConstants.MENU_OPTION_SIZE);

let startButton;

export default class MenuScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    create() {
        let centerX = this.game.canvas.width / 2;
        let centerY = this.game.canvas.height / 2;

        this.add.text(centerX, centerY - 100, "GAME OF TETRIS", titleStyle).setOrigin(0.5, 0.5);
        startButton = this.add.text(centerX, centerY + 50, "START", optionStyle).setOrigin(0.5, 0.5);
        makeTextInteractive(startButton);

        startButton.on('pointerup', function() {
            this.scene.get(Scenes.SCORE).scene.start();
            this.scene.get(Scenes.PLAY).scene.start();
            this.scene.stop();
        }.bind(this));
    }
}