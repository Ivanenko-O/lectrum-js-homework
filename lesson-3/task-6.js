/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение
function isEven(n) {
  if (isNumber(n)) {
    return !(n % 2);
  } else {
    throw new Error("parameter type is not a Number");
  }
}

function isNumber(value) {
  return typeof value === "number";
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven("Content"));

/* не удалять */
isEven(3); // false
isEven(4); // true
isEven("Content"); // Error: parameter type is not a Number

exports.isEven = isEven;
/* не удалять */
