// npm   -- comes with Node
// npm --vwersion or --var
// local dependency - use it in this particular Project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)


//package.json - manifest file(stores important info abt project/package)
//ways
//manual approach (create package.json in the root,create properties etc)
//npm init(step by step, press enter to skip)
//npm init -y (everything) default


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
