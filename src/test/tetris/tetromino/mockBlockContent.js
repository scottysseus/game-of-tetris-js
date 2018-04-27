export default function MockBlockContent() {
    let rotated = false;

    this.rotate = function() {
        rotated = true;
    };

    this.isRotated = function() {
        return rotated;
    }
}