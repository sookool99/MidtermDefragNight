#Voweler Challenge
------------------
##Part 1: Disemvoweler
Disemvoweling means removing the vowels from text. (For this challenge, the letters a, e, i, o, and u are considered vowels, and the letter y is not.) The idea is to make text difficult but not impossible to read, for when somebody posts something so idiotic you want people who are reading it to get extra frustrated.
To make things even harder to read, we'll remove spaces too. For example, this string:

    two drums and a cymbal fall off a cliff

can be disemvoweled to get:

    twdrmsndcymblfllffclff

We also want to keep the vowels we removed around (in their original order), which in this case is:

    ouaaaaoai

###Input
A string consisting of a series of words to disemvowel. It will be all lowercase (letters a-z) and without punctuation. The only special character you need to handle is spaces.

###Output
Two strings, one of the disemvoweled text (spaces removed), and one of all the removed vowels.

#####Sample Input 1
    all those who believe in psychokinesis raise my hand

#####Sample Output 1
    llthswhblvnpsychknssrsmyhnd
    aoeoeieeioieiaiea

#####Sample Input 2
    did you hear about the excellent farmer who was outstanding in his field

#####Sample Output 2
    ddyhrbtthxcllntfrmrwhwststndngnhsfld
    ioueaaoueeeeaeoaouaiiiie


###Instructions
Create your Disemvoweler in any language you prefer, it may be as visual as you like aswell. Once you are satisfied with the result put your program in a folder named your github username in the Challenge3/Submission/Part1 directory. Then make a pull request and we will add it to the society repo.

---------------------------

##Part 2: Re-Emvolweler
given the two strings produced via disemvowelment, output one possibility for the original string. 

1. Your output must be such that if you put it through the previous challenge, you'll recover exactly the input you were given. 
2. You don't need to output the same string as the one that was originally disemvoweled, just some string that disemvowels to your input.
3. Use the Enable word list(enable1.txt included in the repo), or some other reasonable English word list. Every word in your output must appear in your word list.
4. For the sample inputs, all words in originally disemvoweled strings appear in Enable. In particular, I'm not using any words with punctuation, and I'm not using the word "a".
5. As before, ignore punctuation and capitalization.

###Input
Two strings, one containing only non-vowel letters, and one containing only vowels.

###Output
A space-separated series of words that could be disemvoweled into the input, each word of which must appear in your word list.

#####Sample Input 1
    wwllfndffthstrds
    eieoeaeoi

#####Sample Output 1
There are, in general, many correct outputs. Any of these is valid output for the sample input (using the Enable word list to verify words):

    we wile lo fen daff et host rids 
    we wile lo fend aff eths tor ids 
    we wile lo fen daff the sot rids 
    we will fend off eths tare do si 
    we will fend off the asteroids

#####Sample Input 2
    bbsrshpdlkftbllsndhvmrbndblbnsthndlts
    aieaeaeieooaaaeoeeaeoeaau

#####Sample Output 2
    ab bise ars he ae pi ed look fa tab all sned hove me ar bend blob ens than adults 
    ai be base rash pe die look fat bal la sned hove me ar bend blob ens than adults 
    babies ae rash pe die loo ka fat balls end ho vee mar bend blob ens than adults 
    babies rash pedal kef tie bolls nod aah ave omer bendable bones than adults 
    babies are shaped like footballs and have more bendable bones than adults

#####Sample Input 3
    llfyrbsshvtsmpntbncnfrmdbyncdt
    aoouiaeaeaoeoieeoieaeoe


###Instructions
Create your Re-emvoweler in any language you prefer, it may be as visual as you like aswell. Once you are satisfied with the result put your program in a folder named your github username in the Challenge3/Submission/Part2 directory. Then make a pull request and we will add it to the society repo.