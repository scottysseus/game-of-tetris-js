export function arrayEquals(a1, a2) {
    var i = a1.length;
    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true
};

export function createMatrix(height, width) {
    var a = [], b;
    while (a.push(b = []) < height) while (b.push(null) < width);
    return a;
}