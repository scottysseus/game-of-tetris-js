import Phaser from 'phaser';

import TextConstants from '../textConstants';
import {makeTextInteractive, getTextOptions} from '../phaserUtils';

const titleStyle = getTextOptions(TextConstants.TITLE_SIZE);
const optionStyle = getTextOptions(TextConstants.MENU_OPTION_SIZE);

export default class MenuScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    create() {

    }
}