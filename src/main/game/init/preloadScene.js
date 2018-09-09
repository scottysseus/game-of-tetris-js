export default function PreloadScene() {
    this.preload = function() {
        this.load.image('background', 'src/assets/img/background.png');
        this.load.image('tetromino', 'src/assets/img/test-tetromino.png');
    }

    this.create = function() {
        this.scene.start('play');
    }
}