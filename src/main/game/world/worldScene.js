import Phaser from 'phaser';
import DJ from './dj';

let dj;

export default class WorldScene extends Phaser.Scene {
    constructor(args) {
        super(args);
    }

    init() {
        let playList = [];
        playList.push(this.sound.add('theme'));
        playList.push(this.sound.add('castamere'));
        dj = new DJ({scene: this, playList: playList});
        dj.startPlayList();
    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0,0);
    }
}