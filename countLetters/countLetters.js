var letters = process.argv[2];
var result = countLetters(letters);
function countLetters(str) {
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char in obj) {
      obj[char] += 1;
    }
    else {
        obj[char] = 1;
    }
  }
  return obj;
}

var myArgs = (process.argv.slice(2));
var myInput = myArgs.join('' + '\n').replace(/\s/g,'');
console.log(countLetters(myInput))
