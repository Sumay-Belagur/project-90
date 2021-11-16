playerName_1= localStorage.getItem("player1");
playerName_2= localStorage.getItem("player2");

var player1_score= 0;
var player2_score= 0;

document.getElementById("player1name").innerHTML= playerName_1 + ": ";
document.getElementById("player2name").innerHTML= playerName_2 + ": ";
document.getElementById("Qturn_name").innerHTML= playerName_1;
document.getElementById("Aturn_name").innerHTML= playerName_2;

function back() {
    window.location= "index.html";
}