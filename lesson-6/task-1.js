/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение
var forEach = function(arr, callback, thisArg) {
  if (isValidType(arr, callback)) {
    for (let i = 0; i < arr.length; i++) {
      callback.call(thisArg, arr[i], i, arr);
    }
  }
};

function isValidType(arr, func) {
  if (arguments.length !== 2) {
    throw new Error("Invalid number of arguments");
  }
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array");
  }
  if (Object.prototype.toString.call(func) !== "[object Function]") {
    throw new Error("Expected a function");
  }

  return true;
}

const result = forEach(array, function(item, index, arrayRef) {
  console.log(item); // элемент массива
  console.log(index); // индекс элемента
  console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
