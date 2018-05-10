export default function Block(args) {
    let {content} = args;
    let blockObj = {};

    blockObj.getContent = function() {
        return content;
    };

    blockObj.rotate = function(rotationalDirection) {
        if(!blockObj.isEmpty()) {
            content.rotate(rotationalDirection);
        }
    };

    blockObj.isEmpty = function() {
        return content === null || Object.keys(content).length < 1;
    };

    blockObj.equals = function(other) {
        if(other.getContent && (other.getContent() === content || 
        (content.equals && content.equals(other.getContent())))) {
            return true;
        }
        return false;
    };

    return blockObj;
}