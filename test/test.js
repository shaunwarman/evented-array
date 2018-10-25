const test = require('ava');

const EventedArray = require('..');

test('init', t => {
  const arr = new EventedArray();
  t.true(arr instanceof EventedArray);
});

test('events', t => {
  const arr = new EventedArray();
  const num = 10;
  arr.events.on('item:pushed', element => {
    t.true(element === num)
  });
  arr.push(num);
  t.true(arr[0] === num);
});