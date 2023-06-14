/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    // let arrFromStr = [];
    // arrFromStr = secret.split('');
    //
    // for (let i = 0; i < arrFromStr.length; i++) {
    //     arrFromStr[i] = String.fromCharCode(arrFromStr[i].charCodeAt(arrFromStr[i]) + 1);
    // }
    //
    // let strFromArr = arrFromStr.join('');
    //
    // return strFromArr.replace(/{/gi, 'a').replace(/!/g,String.fromCharCode(32));

    let arrFromStr = secret.split('');
    let result;

    result = arrFromStr.map(element => String.fromCharCode(element.charCodeAt(0) + 1)).join("");

    return result.replace(/{/g, 'a').replace(/!/g, String.fromCharCode(32));
}

module.exports = decrypt;
