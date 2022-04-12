

var playerNumber = Math.floor((Math.random()*6) + 1);
var computerNumber = Math.floor((Math.random()*6) + 1);

var playerDice = document.getElementsByClassName("dot");

// for setting all dot hidden
for(let i = 0; i < playerDice.length; i++){
    playerDice[i].classList.add("dotH");
}



switch(playerNumber) {
    case 1: document.querySelector("#dot5").classList.remove("dotH");
            break;

    case 2: document.querySelector("#dot3").classList.remove("dotH");
            document.querySelector("#dot7").classList.remove("dotH");
            break;

    case 3: document.querySelector("#dot3").classList.remove("dotH");
            document.querySelector("#dot5").classList.remove("dotH");
            document.querySelector("#dot7").classList.remove("dotH");
            break;

    case 4: document.querySelector("#dot1").classList.remove("dotH");
            document.querySelector("#dot3").classList.remove("dotH");
            document.querySelector("#dot7").classList.remove("dotH");
            document.querySelector("#dot9").classList.remove("dotH");
            break;

    case 5: document.querySelector("#dot1").classList.remove("dotH");
            document.querySelector("#dot3").classList.remove("dotH");
            document.querySelector("#dot5").classList.remove("dotH");
            document.querySelector("#dot7").classList.remove("dotH");
            document.querySelector("#dot9").classList.remove("dotH");
            break;

    case 6: document.querySelector("#dot1").classList.remove("dotH");
            document.querySelector("#dot3").classList.remove("dotH");
            document.querySelector("#dot4").classList.remove("dotH");
            document.querySelector("#dot6").classList.remove("dotH");
            document.querySelector("#dot7").classList.remove("dotH");
            document.querySelector("#dot9").classList.remove("dotH");
            break;

    default: console.log("Wrong value generated");
}

switch(computerNumber) {
    case 1: document.querySelector("#dot15").classList.remove("dotH");
            break;

    case 2: document.querySelector("#dot13").classList.remove("dotH");
            document.querySelector("#dot17").classList.remove("dotH");
            break;

    case 3: document.querySelector("#dot13").classList.remove("dotH");
            document.querySelector("#dot15").classList.remove("dotH");
            document.querySelector("#dot17").classList.remove("dotH");
            break;

    case 4: document.querySelector("#dot11").classList.remove("dotH");
            document.querySelector("#dot13").classList.remove("dotH");
            document.querySelector("#dot17").classList.remove("dotH");
            document.querySelector("#dot19").classList.remove("dotH");
            break;

    case 5: document.querySelector("#dot11").classList.remove("dotH");
            document.querySelector("#dot13").classList.remove("dotH");
            document.querySelector("#dot15").classList.remove("dotH");
            document.querySelector("#dot17").classList.remove("dotH");
            document.querySelector("#dot19").classList.remove("dotH");
            break;

    case 6: document.querySelector("#dot11").classList.remove("dotH");
            document.querySelector("#dot13").classList.remove("dotH");
            document.querySelector("#dot14").classList.remove("dotH");
            document.querySelector("#dot16").classList.remove("dotH");
            document.querySelector("#dot17").classList.remove("dotH");
            document.querySelector("#dot19").classList.remove("dotH");
            break;


    default: console.log("Wrong value generated");
}

if(playerNumber > computerNumber){
    document.querySelector(".result").innerText = "Result: YOU WINS";
}
else if(computerNumber > playerNumber){
    document.querySelector(".result").innerText = "Result: COMPUTER WINS";
}
else{
    document.querySelector(".result").innerText = "Result: DRAW";
}