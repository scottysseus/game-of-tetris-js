import Phaser from 'phaser';
import RegistryFields from '../registryFields';
import TextConstants from '../textConstants';

let scoreTextField;

const scoreX = 60;
const scoreY = 60;

const scoreStyle = {
    fontSize: "24px",
    color: "#FFFFFF",
    fontFamily: TextConstants.FONT_FAMILY
};

const updateScore = function(score) {
    scoreTextField.setText('Score: ' + score.toString().padStart(6, '0'));
};

const scoreChangedCallback = function(parent, key, data) {
    if(key === RegistryFields.SCORE) {
        updateScore(data);
    }
}

export default class ScoreScene extends Phaser.Scene {
    
    constructor(args) {
        super(args);
    }

    create() {
        scoreTextField = this.add.text(scoreX, scoreY, "", scoreStyle);
        updateScore(0);
    }

    update() {
        this.registry.events.on('changedata', scoreChangedCallback, this);
    }

}