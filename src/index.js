const LawnMower = require('./models/lawnMower')

const lawnMower = new LawnMower()
const results = lawnMower.run('../../input.txt')
console.log(results)