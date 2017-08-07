'use strict';

//Stack class: LIFO

function Stack() {
  let items = [];
  this.pushItem = (ele) => {
    items.push(ele);
  };
  this.popItem = (ele) => {
    return items.pop(ele);
  };
  this.peek = () => {
    return items[items.length - 1];
  };
  this.isEmpty = () => {
    return items.length === 0;
  };
  this.size = () => {
    return items.length;
  };
  this.clear = () => {
    items = [];
  };
  this.print = () => {
    console.log(items.toString());
  };
}

//Decimal To Binary

function divideByTwo (num){
  let remStack = new Stack(),
    rem,
    binarySearch = '';

  while (num > 0){
    rem = Math.floor(num % 2);
    remStack.pushItem(rem);
    num = Math.floor(num / 2);
  }
  //Me checking to see if backwards
  remStack.print();

  while(!remStack.isEmpty()){
    binarySearch += remStack.popItem().toString();
  }
  return binarySearch;
}

console.log(divideByTwo(233));
console.log(divideByTwo(10));
console.log(divideByTwo(1000));

//decimal to any base

function anyBase (num, base){
  let remStack = new Stack(),
    rem,
    binarySearch = '',
    digits = '0123456789ABCDEF';

  while (num > 0){
    rem = Math.floor(num % base);
    remStack.pushItem(rem);
    num = Math.floor(num / base);
  }
  //To see backwards
  remStack.print();

  while(!remStack.isEmpty()){
    binarySearch += digits[remStack.popItem().toString()];
  }
  console.log(binarySearch);
  return binarySearch;
}

//Binary
console.log(anyBase(100345, 2));
//Octagonal
console.log(anyBase(100345, 8));
//Hexidecemial
console.log(anyBase(100345, 16));
