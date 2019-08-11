/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(arr, callback, initialValue) {
  if (arguments.length !== 3) {
    throw new Error(`Invalid number of arguments`);
  } else if (!Array.isArray(arr)) {
    throw new Error(`${arr} should be an Array type`);
  } else if (typeof callback !== "function") {
    throw new Error(`${callback} should be a function`);
  } else if (typeof initialValue !== "number") {
    throw new Error(`${initialValue} is not a number`);
  }

  let accumulator = initialValue;

  arr.forEach((element, i) => {
    accumulator = callback(accumulator, element, i, arr);
  });

  return accumulator;
}

const result = reduce(
  array,
  function(accumulator, item, i, arrayRef) {
    console.log(accumulator); // значение-аккумулятор
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return accumulator + item;
  },
  INITIAL_ACCUMULATOR
);

console.log(result); // 21
