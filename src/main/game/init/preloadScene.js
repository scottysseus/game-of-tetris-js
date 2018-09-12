import Phaser from 'phaser';

export default function PreloadScene() {
    Object.assign(new Phaser.Scene({
        key: 'preload',
        active: true
    }), this);

    const loadFonts = function() {
        let callback = function() {
            this.scene.start('play');
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
    }.bind(this);

    this.preload = function() {
        this.load.image('background', 'src/assets/img/background.png');
        this.load.spritesheet('tetromino', 'src/assets/img/test-tetromino.png', {frameWidth: 25, frameHeight: 25});
        loadFonts();
    }

}