/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
function getDivisors(n) {
  if (isNumber(n)) {
    if (n > 0) {
      let newArr = [];
      for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
          newArr.push(i);
        }
      }
      return newArr;
    } else {
      throw new Error("parameter can't be a 0");
    }
  } else {
    throw new Error("parameter type is not a Number");
  }
}

function isNumber(value) {
  return typeof value === "number";
}

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors("Content"); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

exports.getDivisors = getDivisors;
/* не удалять */
