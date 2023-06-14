/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let pow = 0;
    while (2**pow <= n) {
        if (2**pow === n) return pow;
        else if (2**pow > n) return undefined;
        pow++;
    }
    // return Math.log2(n)
}

module.exports = getPower;
