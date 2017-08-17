'use strict';

function LinkedList() {
  let Node = function(ele){
    this.ele = ele;
    this.next = null;
  };

  let length = 0,
    head = null;

  this.append = function(ele) {
    let node = new Node(ele),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.insert = function(position, ele) {
    if (position >= 0 && position <= length) {
      let node = new Node(ele),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.toString = function() {
    let current = head,
      string;

    while (current) {
      string += current.ele;
      current = current.next;
    }
    return string;
  };

  this.indexOf = function(ele) {
    let current = head,
      index = -1;

    while (current) {
      if (ele === current.ele) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.remove = function(ele) {
    let index = this.indexOf(ele);
    return this.removeAt(index);
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };
}
