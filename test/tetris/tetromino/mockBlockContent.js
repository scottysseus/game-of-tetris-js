import Orientation from "./orientation";

export default function MockBlockContent(args) {
    let {content, orientation} = args;
    let mockBlockContentObj = {}

    mockBlockContentObj.rotate = function(rotationalDirection) {
        orientation = Orientation.getRotatedOrientation(orientation, rotationalDirection);
    };

    mockBlockContentObj.getOrientation = function() {
        return orientation;
    };

    mockBlockContentObj.getContent = function() {
        return content;
    };

    mockBlockContentObj.equals = function(other) {
        if(other.getContent() !== content || other.getOrientation() !== orientation) {
            return false;
        }
        return true;
    };

    return mockBlockContentObj;
}