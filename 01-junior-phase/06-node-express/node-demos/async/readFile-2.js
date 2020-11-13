const fs = require('fs')

fs.readFile('nyancats.txt', 'utf8', (err, data) =>{
    if (err) throw err
    console.log('Data: ', data)
})

console.log('Do I execture first or last?')