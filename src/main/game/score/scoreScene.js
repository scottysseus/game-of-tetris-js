import Phaser from 'phaser';
import RegistryFields from '../registryFields';
import TextConstants from '../textConstants';
import {getTextOptions} from '../phaserUtils';

const scoreX = 60;
const scoreY = 60;

const scoreStyle = getTextOptions(TextConstants.SCORE_TEXT_SIZE);

const updateScore = function(score) {
    this.scoreTextField.setText('SCORE: ' + score.toString().padStart(6, '0'));
};

const scoreChangedCallback = function(parent, key, data) {
    if(key === RegistryFields.SCORE) {
        updateScore.call(this, data);
    }
}

export default class ScoreScene extends Phaser.Scene {
    
    constructor(args) {
        super(args);
        this.scoreTextField;
    }

    init() {
        this.scoreTextField = this.add.text(scoreX, scoreY, "", scoreStyle);
    }

    create() {
        updateScore.call(this, 0);
    }

    update() {
        this.registry.events.on('changedata', scoreChangedCallback, this);
    }

}