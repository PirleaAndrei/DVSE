let homeScore=document.getElementById("home-Score");
let awayScore=document.getElementById("away-Score");
let winningColor
let countHomeScore=0;
let countAwayScore=0;

function plus1Home(){
    countHomeScore+=1;
    homeScore.textContent = countHomeScore;
    winningTeam()
}
function plus2Home(){
    countHomeScore+=2;
    homeScore.textContent = countHomeScore;
    console.log(awayScore.id);
    winningTeam()
}
function plus3Home(){
    countHomeScore+=3;
    homeScore.textContent = countHomeScore;
    winningTeam()
}
function plus1Away(){
    countAwayScore+=1;
    awayScore.textContent = countAwayScore;
    winningTeam()
}
function plus2Away(){
    countAwayScore+=2;
    awayScore.textContent = countAwayScore;
    winningTeam()
}
function plus3Away(){
    countAwayScore+=3;
    awayScore.textContent = countAwayScore;
    winningTeam()
}
function playAgain(){
    countHomeScore=0;
    countAwayScore=0;
    homeScore.textContent=countHomeScore;
    awayScore.textContent=countAwayScore;
    document.getElementById("away-Name-Id").style.color="black";
    document.getElementById("home-Name-Id").style.color="black";
}
function winningTeam(){
   
    if(countHomeScore>countAwayScore){
        document.getElementById("home-Name-Id").style.color="cyan";
        document.getElementById("away-Name-Id").style.color="black";
    }
    else if(countAwayScore>countHomeScore){
        document.getElementById("away-Name-Id").style.color="cyan";
        document.getElementById("home-Name-Id").style.color="black";
    }
    else if(countAwayScore===countHomeScore){
        document.getElementById("away-Name-Id").style.color="yellow";
        document.getElementById("home-Name-Id").style.color="yellow";
    }
}