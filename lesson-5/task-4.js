/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = "$120";

// Решение
function extractCurrencyValue(source) {
  if (isValidType(source)) {
    return Number(source.slice(1));
  }
}

function isValidType(a) {
  if (typeof a === "string") {
    return true;
  } else {
    throw new Error("Invalid type of parametr");
  }
}

console.log(typeof extractCurrencyValue(PRICE)); // 120
extractCurrencyValue(PRICE); // 120

exports.extractCurrencyValue = extractCurrencyValue;
