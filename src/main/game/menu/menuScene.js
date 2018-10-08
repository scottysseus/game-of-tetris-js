import Phaser from 'phaser';

import Scenes from '../scenes';

import TextConstants from '../textConstants';
import {makeTextInteractive, getTextOptions} from '../phaserUtils';

const titleStyle = getTextOptions(TextConstants.TITLE_SIZE);
const optionStyle = getTextOptions(TextConstants.MENU_OPTION_SIZE);

let startButton, instructionsButton;

export default class MenuScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    init() {
    
    }

    create() {
        let centerX = this.game.canvas.width / 2;
        let centerY = this.game.canvas.height / 2;

        this.add.text(centerX, TextConstants.TITLE_Y, "GAME OF TETRIS", titleStyle).setOrigin(0.5, 0.5);
        startButton = this.add.text(centerX, TextConstants.MENU_OPTION_Y, "START", optionStyle).setOrigin(0.5, 0.5);
        instructionsButton = this.add.text(centerX, TextConstants.MENU_OPTION_Y + TextConstants.MENU_OPTION_OFFSET, "INSTRUCTIONS", optionStyle).setOrigin(0.5, 0.5);
        
        makeTextInteractive(startButton);
        makeTextInteractive(instructionsButton);

        startButton.on('pointerup', function() {
            this.scene.get(Scenes.SCORE).scene.start();
            this.scene.get(Scenes.PLAY).scene.start();
            this.scene.stop();
        }.bind(this));

        instructionsButton.on('pointerup', function() {
            this.scene.get(Scenes.INSTRUCTIONS).scene.start();
            this.scene.stop();
        }.bind(this));
        
    }
}