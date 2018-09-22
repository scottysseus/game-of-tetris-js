import Phaser from 'phaser';

import Scenes from '../scenes';

import TextConstants from '../textConstants';
import {makeTextInteractive, getTextOptions} from '../phaserUtils';
import {getBackButton} from './menuUtils';
import textConstants from '../textConstants';

const titleStyle = getTextOptions(TextConstants.TITLE_SIZE);
const instructionsStyle = getTextOptions(TextConstants.BODY_TEXT_SIZE);

const instructions = 'Jaime Lannister is pushing Bran out the window! Due to \n'
                   + 'magic or something, they have been caught in a \n'
                   + 'life-or-death GAME OF TETRIS.\n\n\n'
                   + 'KEYS:\n' 
                   + '<-    Shift Bran to the LEFT\n' 
                   + '->    Shift Bran to the RIGHT\n'
                   + 'Z     Rotate Bran COUNTERCLOCKWISE\n'
                   + 'X     Rotate Bran CLOCKWISE';

let backButton;

export default class InstructionsScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    create() {
        let centerX = this.game.canvas.width / 2;
        let centerY = this.game.canvas.height / 2;

        this.add.text(centerX, TextConstants.TITLE_Y, "INSTRUCTIONS", titleStyle).setOrigin(0.5, 0.5);
        backButton = getBackButton(this.add, Scenes.MENU, this);

        this.add.text(TextConstants.MARGIN_X, TextConstants.MENU_OPTION_Y, instructions, instructionsStyle).setOrigin(0, 0.5);
    }
}