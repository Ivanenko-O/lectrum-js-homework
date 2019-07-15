/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(values, length) {
  if (arguments.length !== 2) {
    throw new Error(`Should be 2 arguments`);
  }

  switch (typeof arguments[0]) {
    case "number":
    case "string":
    case "object":
    case Array.isArray(arguments[0]):
      break;
    default:
      throw new Error(
        `The type of ${
          arguments[0]
        } should be a string, number, array or object`
      );
  }

  if (typeof arguments[1] !== "number") {
    throw new Error(`The type of ${arguments[1]} should be a number`);
  }

  return new Array(length).fill(values);
}

const result = createArray("x", 5);
console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
