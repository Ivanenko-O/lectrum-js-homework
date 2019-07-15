/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {
  if (isValidType(str)) {
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    return  result;
  }
}

function isValidType(arg) {
  if (typeof arg === "string") {
    return true;
  } else {
    throw new Error("Parametr type should be a string");
  }
}

console.log(upperCaseFirst("pitter"));
console.log(upperCaseFirst(""));

upperCaseFirst("pitter"); // Pitter
upperCaseFirst(""); // ''

exports.upperCaseFirst = upperCaseFirst;
