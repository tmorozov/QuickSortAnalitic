#!/usr/bin/env node

var program = require('commander');
var farr = require('./load_array');
var sort = require('./qsort');
var INPUT_FILE_DEFAULT = "QuickSort.txt";

function clone(fn) {
    // Workaround for commander.js issue.
    // http://stackoverflow.com/a/6772648
    return fn.bind({});
};

function testSorted(arr) {
  var len = arr.length;
  var j=0;
  for (var i=1; i<len; i++) {
    if (arr[j] > arr[i]) {
      return false;
    }
    j++;
  }
  return true;
}

if(require.main == module) {
  program
    .option('-f, --file <file>', 'Path to file with data', clone(farr.assertFileExists), INPUT_FILE_DEFAULT)
    .option('-b, --brute ', 'use brute force')
    .parse(process.argv);

  var arr = farr.loadArray(program.file);
//  console.log('before', testSorted(arr));
  sort.qsort(arr);
  console.log('Result: ', arr);
//  console.log('after', testSorted(arr));
} else {
//  exports.checkHtmlFile = countInversions;
}
