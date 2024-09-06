//synchronous approach

const { log } = require('console')
const {readFileSync,writeFileSync} = require('fs')
console.log('start')
//const fs = require('fs')
//fs.read ---------same thing

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    // if u want to open the file,u set it to a 
    {flag: 'a'}

)
console.log('done with this task')
console.log('starting the next step')