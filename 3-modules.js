// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

const { Danny, Peter, Lee } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(data)
console.log(sayHi(Danny))
console.log(sayHi(Peter))
console.log(sayHi(Lee))
