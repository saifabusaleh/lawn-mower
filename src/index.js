const LawnMower = require('./models/lawnMower')

const lawnMower = new LawnMower()
const filePath = '../../input.txt'
const results = lawnMower.run(filePath)
console.log(results)