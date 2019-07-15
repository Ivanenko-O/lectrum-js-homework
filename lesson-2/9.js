const arr = [1, 2, 3, 4, 5, 6];
let done = false;

while (!done) {
  done = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      done = false;
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
    }
  }
}

console.log(arr);
