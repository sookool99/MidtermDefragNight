#Minesweeper Field Creator
Have you ever played Minesweeper? This little game comes with a certain operating system whose name we can't remember. The goal of the game is to find where all the mines are located within a M x N field.  


The game shows a number in a square which tells you how many mines there are adjacent to that square. Each square has at most eight adjacent squares. The 4 x 4 field on the top contains two mines, each represented by a `*` character. If we represent the same field by the hint numbers described above, we end up with the field on the bottom:

    *...
    ....
    .*..
    ....
    
    *100
    2210
    1*10
    1110


##Input

The input will consist of an arbitrary number of fields. The first line of each field contains two integers N and M (0 < N, M <= 100) which stand for the number of rows and columns of the field, respectively. Each of the next N lines contains exactly M characters, representing the field.

Safe squares are denoted by `.` and mine squares by `*`. The first field line where N = M = 0 represents the end of input and should not be processed.

#####Sample Input

    4 4
    *...
    ....
    .*..
    ....
    3 5
    **...
    .....
    .*...
    0 0


##Output

For each field, print the message Field #x: on a line alone, where x stands for the number of the field starting from 1. The next n lines should contain the field with the `.` characters replaced by the number of mines adjacent to that square. There must be an empty line between field outputs.

#####Sample Output
    
    Field #1:
    *100
    2210
    1*10
    1110
    
    Field #2:
    **100
    33200
    1*100


##Instructions

Create a program that will solve the task given above. There are no restrictions to language used or how visual you make your program. If this doesn't seem like enough of a challenge try doing it in an unfamiliar language. Have fun and be creative with your solution.

When finished, put your program in a folder named your github username in the Challenge1/Submission directory. Then make a pull request and we will add it to the society repo.