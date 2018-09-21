import Phaser from 'phaser';

export default class WorldScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0,0);
    }
}