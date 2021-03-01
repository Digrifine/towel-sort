// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let arr = [];
    for (i = 0; i < matrix.length; i++) {
        if (i == 0 || i % 2 == 0) {
            for (j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        } else if (i == 1 || i % 2 == 1) {
            for (j = matrix[i].length - 1; j >= 0; j--) {
                arr.push(matrix[i][j]);
            }
        }
    }
    return arr;
};
