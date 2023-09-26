var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

var refreshMe = document.querySelector(".refresh");

function dice1(){
    image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2){
        refreshMe.innerHTML = "Player 1 Wins!"
    }
    else if (randomNumber2 > randomNumber1){
        refreshMe.innerHTML = "Player 2 Wins!"
    }
    else {
        refreshMe.innerHTML = "Draw! Try Again!"
    }
}

dice1();
