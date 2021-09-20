const Queue = function () {
  this.arr = [];
  this.count = 0;

  this.add = function (x) {
    this.arr[this.count] = x;
    this.count++;
  };
  this.remove = function () {
    if (this.count === 0) return undefined;
    this.count--;
    let val = this.arr.shift();
    return val;
  };
  this.peek = function () {
    if (this.count === 0) return undefined;
    return this.arr[0];
  };
};

const arr = new Queue();
arr.add(11);
arr.add(12);
arr.add(13);
arr.add(14);

console.log("peek", arr.peek());

console.log(arr.remove());
console.log(arr.remove());
console.log(arr.remove());
console.log(arr.remove());
