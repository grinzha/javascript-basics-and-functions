/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {

    if (password.length < 7) return false;

    if (password.length < 7) {
        return false;
    }

    // Проверка наличия строчной английской буквы
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Проверка наличия заглавной английской буквы
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Проверка наличия цифры
    if (!/\d/.test(password)) {
        return false;
    }

    // Пароль прошел все проверки, считается криптостойким
    return true;
}

/*function validatePassword(password) {
    let arrFromStr = [...password];
    let ascii = arrFromStr.map((value) => {
        (value.charCodeAt(0));
    });
    const isUpperCase = ascii.find(value => (value >= 65 && value <= 90));
    const isLowerCase = ascii.find(value => (value >= 97 && value <= 122));
    const isDigit = ascii.find(value => (value >= 48 && value <= 57));
    return Boolean (isUpperCase && isLowerCase && isDigit);

}*/
module.exports = validatePassword;
