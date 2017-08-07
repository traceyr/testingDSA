'use strict';

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
