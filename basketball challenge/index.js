let homeScore=document.getElementById("home-Score");
let awayScore=document.getElementById("away-Score");
let winningColor
let countHomeScore=0;
let countAwayScore=0;

function plusHome(points){
    countHomeScore+=points;
    homeScore.textContent = countHomeScore;
    winningTeam()
}

function plusAway(points){
    countAwayScore+=points;
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