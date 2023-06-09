/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let numLeft;
    let numRight;

    numLeft = number.slice(0, 3);
    numRight = number.slice(3, 6);
    let arrLeftString = numLeft.split("");
    let arrRightString = numRight.split("");

    let arrLeftSum = 0;
    let arrRightSum = 0;

    for (let i = 0; i < arrLeftString.length; i++) {
        arrLeftSum += +arrLeftString[i];
    }
    for (let i = 0; i < arrRightString.length; i++) {
        arrRightSum += +arrRightString[i];
    }

    return arrLeftSum === arrRightSum ? true : false;

}

module.exports = checkTicket;
