import Phaser from 'phaser';

export function makeTextInteractive(textObject) {
    textObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, textObject.width, textObject.height), Phaser.Geom.Rectangle.Contains);
}