const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event lsitener
myEmitter.on('event', () => console.log('Event Fired!'));

//init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');