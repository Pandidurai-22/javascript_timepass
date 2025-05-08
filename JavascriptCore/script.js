/*let user = prompt("welcome to Rock, Paper , Scissor");
if(user){
    var playerOne = user.trim().toLowerCase();
    if(
      playerOne==='rock'||
      playerOne==='scissor'||
      playerOne==='paper'
    ){
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer =
            computerChoice === 1
                ? "rock"
                : computerChoice === 2
                    ? 'scissor'
                    : 'paper';

        let result =
            playerOne === computer
                ? "Tie Game"
                : playerOne === 'rock' && computer === 'paper'
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!` 
                :playerOne === 'paper' && computer === 'scissor'
                ?`playerOnr: ${playerOne}\nComputer:${computer}\nComputerWins`
                :playerOne === 'scissor' && computer === 'rock'
                ?`playerOne:${playerOne}\nComputer:${computer}\nComputerWins`
                :`playerOne:${playerOne}\nComputer:${computer}\nplayerOneWins`;
        alert(result);

        let playAgain = confirm("Play Again");
        playAgain ? location.reload():alert('ok,thanks for playing');
    }
    else{
        alert('you didnt enter rock,paper,scissor');
    }
} else{
    alert('i guess you changed mind');
}
*/

/*let v = 1;
while(v<=50){
    console.log(v);
    v++;
}

name = 'Surendhar'

for(i=0;i<name.length;i=i+3){
    console.log(name.charAt(i));
}

function sum(one,two){
    return one+two;
}

console.log(sum(2,3));

function getUserId(email){
    return(email.slice(0,email.indexOf("@")));
}
console.log(getUserId('surendhar@gmail.com'));
*/

function sentenceCase(name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}

console.log(sentenceCase('surendhar'))
