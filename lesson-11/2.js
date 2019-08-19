/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
// function createFibonacciGenerator() {
// 	let a = 0;
// 	let b = 1;

// 	return function() {
// 		let sum = a + b;

// 		if (a === 0) {
// 			a = b;
// 			return sum;
// 		}

// 		a = b;
// 		b = sum;

// 		return b;
// 	};
// }

function createFibonacciGenerator() {
  let numbers = [];
  return function() {
    let res;
    let numbersLength = numbers.length;

    if (numbersLength < 2) {
      numbers.push(1);
      res = 1;
    } else {
      res = numbers[numbersLength - 1] + numbers[numbersLength - 2];
      numbers.push(res);
    }
    return res;
  };
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;
