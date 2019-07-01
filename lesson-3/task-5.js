/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

// Решение

const array = [1, 2, -4, 3, -9, -1, 7];

function filterArray() {
  let positiveArr = [];
  for (let i = 0; i < array.length; i++) {
    if (isPositive(array[i])) {
      positiveArr.push(array[i]);
    }
  }
  return positiveArr;
}

function isPositive(n) {
  if (isNumber(n)) {
    return n > 0;
  } else {
    throw new Error("parameter type is not a Number");
  }
}

function isNumber(value) {
  return typeof value === "number";
}

console.log("Oтсортированный массив: ", filterArray())

/* не удалять */
isPositive(-3); // false
isPositive(3); // true
isPositive("s"); // Error: parameter type is not a Number

exports.isPositive = isPositive;
/* не удалять */
