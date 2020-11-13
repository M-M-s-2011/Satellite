const fs = require('fs')

const data = fs.readFileSync('nyancats.txt', 'utf8')
console.log('Data: ', data)
console.log('Do I execute first or last?')
