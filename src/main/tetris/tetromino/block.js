export default function Block(args) {
    let {content} = args;

    this.getContent = function() {
        return content;
    };

    this.clearContent = function() {
        content.destroy();
    }

    this.rotate = function(rotationalDirection) {
        if(!this.isEmpty()) {
            content.rotate(rotationalDirection);
        }
    };

    this.isEmpty = function() {
        return content === null || Object.keys(content).length < 1;
    }

    this.equals = function(other) {
        if(other.getContent && (other.getContent() === content || 
        (content.equals && content.equals(other.getContent())))) {
            return true;
        }
        return false;
    }
}