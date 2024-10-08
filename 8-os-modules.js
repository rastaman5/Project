// os modules

const os = require('os')

//  info about current user
const user = os.userInfo()
console.log(user)

// returns how long the system  is running
console.log(`The system uptime is ${os.uptime()} seconds`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
