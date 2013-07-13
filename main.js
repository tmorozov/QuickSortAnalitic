#!/usr/bin/env node

var program = require('commander');
var farr = require('./load_array');
var INPUT_FILE_DEFAULT = "IntegerArray.txt";

var clone = function(fn) {
    // Workaround for commander.js issue.
    // http://stackoverflow.com/a/6772648
    return fn.bind({});
};

if(require.main == module) {
  program
    .option('-f, --file <file>', 'Path to file with data', clone(farr.assertFileExists), INPUT_FILE_DEFAULT)
    .option('-b, --brute ', 'use brute force')
    .parse(process.argv);

  var arr = farr.loadArray(program.file);
  var result = arr;
  console.log('Result: ', result);

} else {
//  exports.checkHtmlFile = countInversions;
}
