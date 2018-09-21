export default function BlockRenderer(args) {


    this.renderBlockCollection = function(startX, startY, blockWidth, blockCollection) {
        for(var row = 0; row < blockCollection.height(); ++row) {
            for(var col = 0; col < blockCollection.width(); ++col) {
                if(!blockCollection.isEmptyBlock(row, col)) {
                    let image = blockCollection.get(row, col).getContent();
                    image.setX(startX + (image.width() / 2) + (col * blockWidth));
                    image.setY(startY + (image.height() / 2) + (row * blockWidth));
                }
            }
        }
    }

}