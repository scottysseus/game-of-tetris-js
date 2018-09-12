import Phaser from 'phaser';

export default function ScoreScene(args) {
    Object.assign(new Phaser.Scene({
        key: 'score',
        active: false
    }), this);

    const scoreX = 60;
    const scoreY = 60;

    const scoreStyle = {
        fontSize: "24px",
        color: "#FFFFFF",
        fontFamily: "VT323"
    };

    this.create = function() {

    }

    this.update = function() {
        this.add.text(scoreX, scoreY, "text", scoreStyle);
    }

}