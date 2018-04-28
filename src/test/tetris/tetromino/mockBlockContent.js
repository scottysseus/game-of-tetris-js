import Orientation from "./orientation";

export default function MockBlockContent(args) {
    let {content, orientation} = args;

    this.rotate = function(rotationalDirection) {
        orientation = Orientation.getRotatedOrientation(orientation, rotationalDirection);
    };

    this.getOrientation = function() {
        return orientation;
    }

    this.getContent = function() {
        return content;
    }

    this.equals = function(other) {
        console.log(other);
        if(other.getContent && other.getContent() !== content) {
            return false;
        } else if(!other.getContent && other.getContent !== content) {
            return false;
        }
        return true;
    }
}