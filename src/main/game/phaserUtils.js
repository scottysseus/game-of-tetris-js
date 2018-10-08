import Phaser from 'phaser';
import TextConstants from './textConstants';

export function makeTextInteractive(textObject) {
    textObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, textObject.width, textObject.height), Phaser.Geom.Rectangle.Contains);
}

export function getTextOptions(fontsize) {
    return {
        fontSize: fontsize,
        color: TextConstants.PRIMARY_COLOR,
        fontFamily: TextConstants.FONT_FAMILY,
        stroke: TextConstants.OUTLINE_COLOR,
        strokeThickness: 6
    }
}