/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
  false,
  "Привет.",
  2,
  "Здравствуй.",
  [],
  "Прощай.",
  {
    name: "Уолтер",
    surname: "Уайт"
  },
  "Приветствую."
];

// Решение

function isValidType(arr) {
  if (Array.isArray(arr) && arguments.length) {
    return true;
  } else {
    throw new Error("Invalid parametr");
  }
}

function inspect(array) {
  if (isValidType(array)) {
    let result = [];

    result = array
      .filter(item => {
        return typeof item === "string";
      })
      .map(item => item.length);

    return result;
  }
}

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
