var fs = require('fs');

exports.loadArray = function (fileName) {
  var data = fs.readFileSync(fileName).toString();
  return data.split("\n").filter(function (item) {
    return !!item.length
  }).map(function(item) {
    // use of ~~ to convert to int
    return ~~item;
  });
}

exports.assertFileExists = function(infile) {
    var instr = infile.toString();
    if(!fs.existsSync(instr)) {
        console.log("%s does not exist. Exiting.", instr);
        process.exit(1); // http://nodejs.org/api/process.html#process_process_exit_code
    }
    return instr;
};

