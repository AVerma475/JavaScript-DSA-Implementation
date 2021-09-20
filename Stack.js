const Stack = function() {
  this.st = []
  this.count = 0;

  this.push = function(x){
    this.st[this.count] = x;
    this.count++;
  }
  this.pop = function(){
    if(this.count === 0) return undefined;
    this.count--;
    let val = this.st[this.count];
    delete st[this.count]
    return val;
  }
  this.peek = function(){
    if(this.count === 0) return undefined;
    return this.st[this.count - 1];
  }
}


const st = new Stack();
st.push(11);
st.push(12);
st.push(13);
st.push(14);


console.log(st.peek());

console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
