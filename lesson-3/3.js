/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(a, b, c) {
  for (let argument of arguments) {
    if (typeof argument === "number") {
      console.log((a - b) / c);
      return (a - b) / c;
    } else {
      try {
        setTimeout(function(){
          throw new Error("all parameters type should be a Number");
        }, 0)
       
      } catch (err) {
        console.log(err.message);
        
      }
      console.log(2);
    }
  }
}

/* не удалять */
// f(9, 3, 2); // 3
f("s", 9, 3); // Error: all parameters type should be a Number

exports.f = f;
/* не удалять */
