import TetrominoFactory from '../tetrominoFactory';
import TetrisGame from '../../tetris/tetrisGame';

const tetrominoFactory = new TetrominoFactory();

export default function PlayScene(args) {

    const tetrisGame = new TetrisGame({tetrominoFactory});

    this.preload = function() {
        
    }

    this.create = function() {
        this.add.image(0,0, 'background').setOrigin(0,0);
        this.add.image(0,0,'tetromino').setOrigin(0,0);
    }

    this.update = function() {

    }

};