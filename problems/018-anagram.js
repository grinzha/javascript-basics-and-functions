/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {

    if (x === '' || y === '') return false;
    else {
        let arr1 = [];
        let arr2 = [];

        let arr1_Obj = {};
        let arr2_Obj = {};

        arr1 = x.toLowerCase().split('');
        arr2 = y.toLowerCase().split('');

        for (let i = 0; i < arr1.length; i++) {
            if (arr1_Obj[arr1[i]]) {
                arr1_Obj[arr1[i]]++;
            } else {
                arr1_Obj[arr1[i]] = 1;
            }
        }
        for (let k = 0; k < arr2.length; k++) {
            if (arr2_Obj[arr2[k]]) {
                arr2_Obj[arr2[k]]++;
            } else {
                arr2_Obj[arr2[k]] = 1;
            }
        }
        for (let key in arr1_Obj) {
            if (arr1_Obj[key] !== arr2_Obj[key]) {
                return false;
            }
        }

        return Object.keys(arr1_Obj).length === Object.keys(arr2_Obj).length;
    }

}

module.exports = anagram;
