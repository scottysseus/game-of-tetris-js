export default function Block(args) {
    let {content} = args;

    this.getContent = function() {
        return content;
    };

    this.rotate = function() {
        if(!this.isEmpty()) {
            content.rotate();
        }
    };

    this.isEmpty = function() {
        return content === null;
    }
}