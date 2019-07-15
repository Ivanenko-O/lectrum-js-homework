/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
const daysInMonth =
  33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate();
const today = new Date().getDate();

person.salary = daysInMonth - today > 20 ? "good salary" : "bad salary";

person.salary = person.salary; // good salary

exports.person = person;
