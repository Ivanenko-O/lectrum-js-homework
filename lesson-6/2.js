/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ["Доброе утро!", "Добрый вечер!", 3, 512, "#", "До свидания!"];

// Решение
var filter = function(array, callback) {
  const result = [];

  if (arguments.length !== 2) {
    throw new Error("Invalid number of arguments");
  } else if (!Array.isArray(array)) {
    throw new Error("Expected an array");
  } else if (typeof callback !== "function") {
    throw new Error("Expected a function");
  }

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
};

const filteredArray = filter(array, function(item, i, arrayRef) {
  console.log(item); // элемент массива
  console.log(i); // индекс элемента
  console.log(arrayRef); // ссылка на обрабатываемый массив

  return item === "Добрый вечер!";
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
