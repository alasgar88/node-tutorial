// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./3-module_names');
const { sayHi } = require('./3-module_utils');

sayHi('susan');
sayHi(john);
sayHi(peter);

const blankExports = require('./4-mind-granade');
console.log(blankExports, 'blankExports');
