'use strict';

function Queue () {
  let items = [];
  this.enqueue = (ele) => {
    items.push(ele);
  };
  this.dequeue = () => {
    return items.shift();
  };
  this.peekFront = () => {
    return items[0];
  };
  this.isEmpty = () => {
    return items.length === 0;
  };
  this.size = () => {
    return items.length;
  };
  this.print = () => {
    console.log(items.toString());
  };
}

//This is the same as above, but created if you Queue needed to incorporate priority

function priorityQueue () {
  let items = [];

  function QueueEle (ele, priority){
    this.ele = ele;
    this.priority = priority;
  }

  this.enqueue = (ele, priority) => {
    let queueEle = new QueueEle(ele, priority);

    if(this.isEmpty()){
      items.push(queueEle);
    } else {
      let added = false;
      for(let i = 0; i < items.length; i++) {
        if(queueEle.priority < items[i].priority) {
          items.splice(i, 0, queueEle);
          added = true;
          break;
        }
      }
      if(!added) items.push(queueEle);
    }
  };
  this.dequeue = () => {
    return items.shift();
  };
  this.peekFront = () => {
    return items[0];
  };
  this.isEmpty = () => {
    return items.length === 0;
  };
  this.size = () => {
    return items.length;
  };
  this.print = () => {
    console.log(items.toString());
  };
}

//Hot Potato Queue

function hotPotato (nameList, num) {
  let queue = new Queue(),
    eliminated = '';

  nameList.map(name => {
    queue.enqueue(name);
  });

  while(queue.size > 1){
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated}  was eliminated.`);
  }
  return queue.dequeue();
}
