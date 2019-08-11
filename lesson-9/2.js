function Increment() {
  let c = 0;
  this.valueOf = function() {
    return ++c;
  };
}

var increment = new Increment();

console.log("val: " + increment); // val: 1
console.log("val: " + increment); // val: 2
console.log("val: " + increment); // val: 3
