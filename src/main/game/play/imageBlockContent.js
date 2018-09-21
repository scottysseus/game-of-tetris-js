import RotationalDirection from '../../tetris/direction/rotationalDirection';

export default function ImageBlockContent(args) {

    let {image} = args;

    this.rotate = function(rotationalDirection) {
        let newAngle = (image.angle + RotationalDirection.properties[rotationalDirection].multiplier * 90);
        image.angle = newAngle % 360;            
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

    this.destroy = function() {
        return image.destroy();
    }

    this.width = function() {
        return image.width;
    }

    this.height = function() {
        return image.height;
    }
}