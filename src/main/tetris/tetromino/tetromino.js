export default function Tetromino(args) {

    let {blockCollection} = args;

    this.rotate = function(rotationalDirection) {
        blockCollection.rotate(rotationalDirection);
    };

    this.height = blockCollection.height;
    this.width = blockCollection.width;
    this.contains = blockCollection.contains;
    this.get = blockCollection.get;
    this.isEmptyBlock = blockCollection.isEmptyBlock;

    this.getRotatedIndex = function(row, col, rotationalDirection, numRotations) {
        return blockCollection.getRotatedIndex(row, col, rotationalDirection, numRotations);
    };

    this.getBlockCollection = function() {
        return blockCollection;
    };

    this.equals = function(other) {
        if(other.getBlockCollection && blockCollection.equals(other.getBlockCollection())) {
            return true;
        }
        return false;
    };    
}