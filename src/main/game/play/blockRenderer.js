export default function BlockRenderer(args) {


    this.renderBlockCollection = function(startX, startY, blockWidth, blockCollection) {
        for(var row = 0; row < blockCollection.height(); ++row) {
            for(var col = 0; col < blockCollection.width(); ++col) {
                if(!blockCollection.isEmptyBlock(row, col)) {
                    let image = blockCollection.get(row, col).getContent();
                    image.setX(startX + col * blockWidth);
                    image.setY(startY + row * blockWidth);
                }
            }
        }
    }

}