import RotationalDirection from '../../tetris/direction/rotationalDirection';

export default function ImageBlockContent(args) {

    let {image} = args;

    this.rotate = function(rotationalDirection) {
        image.angle = 360 % 
            (image.angle + RotationalDirection.properties[rotationalDirection].multiplier * 90);
    }

    this.setX = function(x) {
        return image.setX(x);
    }

    this.setY = function(y) {
        return image.setY(y);
    }

    this.getImage = function() {
        return image;
    }

}