var letters = [];
var word = "hallelujah"
var rword = ""

//push, pop, peek, length

for(let i = 0; i < word.length; i++){
  letters.push(word[i]);
}

//pop
for(let i = 0; i < word.length; i++){
  rword += letters.pop();
}
console.log(rword);

if(rword === word){
  console.log(word + " is a palindrome.")
}else{
  console.log(word + " is not a palindrome")
}

var Stack = function(){
  this.count = 0;
  this.storage = {}

//adds a value to the end of the stack
this.push = function(value){
  this.storage[this.count] = value;
  this.count++;
}

//remove a value off the end of the stack
this.pop = function(){
  if(this.count === 0){
    return undefined;
  }
  this.count--;
  let result  = this.storage[this.count]
  delete this.storage[this.count];
  return result;
}

this.size = function(){
  return this.count;
}

this.peek = function(){
  return this.storage[this.count-1];
}

}

var myStack = new Stack;
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
myStack.peek();
myStack.pop();
myStack.peek();
myStack.push("zebra");
myStack.peek();
myStack.pop();
myStack.peek();