import Phaser from 'phaser';
import Scenes from '../scenes';
import WorldConstants from '../world/worldConstants';

const ASSETS_DIR = 'src/assets/';
const IMG_DIR = ASSETS_DIR + 'img/';
const SOUND_DIR = ASSETS_DIR + 'sound/';

const FRAME_SIZE = WorldConstants.BLOCK_WIDTH;

const loadFonts = function() {
    let callback = function() {
        this.scene.start(Scenes.WORLD);
        this.scene.start(Scenes.MENU);
    }

    //  The Google WebFont Loader will look for this object, so create it before loading the script.
    global.WebFontConfig = {

        //  'active' means all requested fonts have finished loading
        //  We set a 1 second delay before calling 'createText'.
        //  For some reason if we don't the browser cannot render the text the first time it's created.
        active: function() {
            this.time.addEvent({
                delay: 1000, 
                callback: callback, 
                callbackScope: this
            });
        }.bind(this),

        //  The Google Fonts we want to load (specify as many as you like in the array)
        google: {
            families: ['VT323']
        }
    };

    //  Load the Google WebFont Loader script
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
};

const shapes = [
    'I',
    'J',
    'L',
    'O',
    'S',
    'T',
    'Z'
];

const filenameForShape = function (shapeName) {
    return IMG_DIR + shapeName + '.png';
};

export default class PreloadScene extends Phaser.Scene {

    constructor(args) {
        super(args);
    }

    preload() {
        this.load.image('background', IMG_DIR + 'background.png');
        this.load.spritesheet('jaime', IMG_DIR + 'jaime.png', {frameWidth: 84, frameHeight: 75});
        this.load.audio('theme', SOUND_DIR + 'theme.mp3');

        shapes.forEach(shapeName => {
            this.load.spritesheet(shapeName, filenameForShape(shapeName), { frameWidth: FRAME_SIZE, frameHeight: FRAME_SIZE });
            this.load.image(shapeName + 'Whole', filenameForShape(shapeName));
        });
        loadFonts.call(this);
    }

}