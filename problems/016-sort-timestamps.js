/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    return list.sort((a, b) => {
        const arrA = a.split(':').map(Number);
        const arrB = b.split(':').map(Number);

        for (let i = 0; i < 3; i++) {
            if (arrA[i] !== arrB[i]) {
                return arrA[i] - arrB[i];
            }
        }
        return 0;
    });
}

module.exports = sortTimestamps;
