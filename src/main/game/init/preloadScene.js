export default function PreloadScene() {
    this.preload = function() {
        this.load.image('background', 'src/assets/img/background.png');
        this.load.spritesheet('tetromino', 'src/assets/img/test-tetromino.png', {frameWidth: 25, frameHeight: 25});
    }

    this.create = function() {
        this.scene.start('play');
    }
}