// npm - global command, come with node
// npm --version
// npm init (step by step, press enter to skip)
// npm init --y (init with default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
