//scramble the message ...
// created by shawn macburnie
var test = 'did you hear about the excellent farmer who was outstanding in his field';

var voules='';
var newMessage;
for(var i=0; i<test.length;i++)
{
    if(test.charAt(i)==='a'|| test.charAt(i)==='E')
    {
        voules += 'a';
    }
    if(test.charAt(i)==='e'|| test.charAt(i)==='E')
    {
        voules += 'e';
    }
    if(test.charAt(i)==='i'|| test.charAt(i)==='I')
    {
        voules += 'i';
    }
    if(test.charAt(i)==='o'|| test.charAt(i)==='O')
    {
        voules += 'o';
    }
    if(test.charAt(i)==='u'|| test.charAt(i)==='U')
    {
        voules += 'u';
    }
}

test = test.replace(/\a/ig,'');
test = test.replace(/\e/ig,'');
test = test.replace(/\i/ig,'');
test = test.replace(/\o/ig,'');
test = test.replace(/\u/ig,'');
test = test.replace(/\s/g, "")
console.log('\ntext with removed voules:\n\t'+test+'\n\n');
console.log('text with the voules:\n\t'+voules+'\n\n');

