export default function MockBlockContent(arg) {
    let rotated = arg != null ? arg : false;

    this.rotate = function() {
        rotated = true;
    };

    this.isRotated = function() {
        return rotated;
    }
}