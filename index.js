const { EventEmitter } = require('events');

class EventedArray extends Array {
  constructor() {
    super();
    this.events = new EventEmitter();
  }

  push(element) {
    super.push(element);
    this.events.emit('item:pushed', element);
  }
}

module.exports = EventedArray;
