 // Modules ------Encapsulated code(only share minimum)
 // common js --- every file is a module by default

 const names = require('./4-names');
 const sayHi = require('./5-utils');
 const data = require('./6-alternative')
 
 require('./7-mind-grenade')


//  sayHi('susan')
//  sayHi(names.john)
//  sayHi(names.peter)