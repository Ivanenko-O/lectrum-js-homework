const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i] % 2 === 0 ? array[i] : 0;
}

console.log(sum);
