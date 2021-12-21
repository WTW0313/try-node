const EventEmitter = require('events')

const cunstomEmitter = new EventEmitter()

cunstomEmitter.on('response', (name, id) => {
  console.log(`data received user ${name}-${id}`)
})

cunstomEmitter.on('response', () => {
  console.log(`some other logic here`)
})

cunstomEmitter.emit('response', 'john', '117')
