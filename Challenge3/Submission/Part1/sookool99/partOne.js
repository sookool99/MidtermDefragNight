var fs = require('fs');
var test = 'did you hear about the excellent farmer who was outstanding in his field';


var newMessage = test.replace(/[aeiou ]/ig,"");
var voules=test.replace(/[^aeiou]/ig,"");
console.log('\ntext with removed voules:\n\t'+newMessage+'\n\n');
console.log('text with the voules:\n\t'+voules+'\n\n');