const arr = [6, 5, 4, 3, 2, 1];
let done = false;

while (!done) {
  done = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      done = false;
      let tmp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = tmp;
    }
  }
}

console.log(arr);