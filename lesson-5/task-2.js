/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(src, spam) {
  if (isValidType(src, spam)) {
    let lowerSrc = src.toLowerCase();
    let lowerSpam = spam.toLowerCase();

    if (~lowerSrc.indexOf(lowerSpam)) return true;
    return false;
  } else {
    throw new Error("All Parameters type should be a string");
  }
}

function isValidType(a, b) {
  args = Array.from(arguments);
  return args.every(item => typeof item === "string");
}

checkSpam("pitterXXX@gmail.com", "xxx"); // true
checkSpam("pitterxxx@gmail.com", "XXX"); // true

exports.checkSpam = checkSpam;
