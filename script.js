const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");


var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = "Navi";
var count = 0;


startButton.addEventListener("click", () => {
    input = "Navi";

   
        document.head.innerHTML = "<meta charset='UTF-8'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Do You Like Me?</title>"+
        "<link rel='stylesheet' href='styleMain.css'/>"

        document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Hello Ms Cutie ❤️ ! Will you date me 💐 ?</h2>"+
        "<img class='gif' alt='gif' src='1.gif'/>"+
        "<div class='btn-group'><button class='yes-btn'>Yes</button>"+
        "<button class='no-btn'>No</button></div></div>"

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);

});

function yesButtonListener(){
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Yayyyy ! I Like you too ❤️, "+input+ "!</h2>"+
    "<img class='gif' alt='gif' src='4.gif'/></div><script src='scriptMain.js'></script>"
    gifMain.src = "4.gif";
}

function noButtonListener(){
    if (count < 3) {
        gifMain.src ="2.gif";
        questionMain.innerHTML = "You don't like me?";
    }
    else if (count >= 3 && count < 6){
        gifMain.src ="3.gif";
        questionMain.innerHTML = "Stop playing with me! Do you like me or not?!";
    }
    else {
    gifMain.src = "5.gif";
    questionMain.innerHTML = "JUST ANSWER IT! DO YOU LIKE ME?!";

    // Remove the No button
    noButton.remove();

    // Stop the function so it doesn't try to move the removed button
    return;
}
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count = count+1;
}
const music = new Audio("Record_2025-08-16-12-35-40.mp4");
music.loop = true;

document.addEventListener("pointerdown", () => {
    music.play();
}, { once: true });
