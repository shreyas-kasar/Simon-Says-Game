let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");

let colors = ["yellow", "red", "green", "purple"];

let isStarted = false;
let level = 0;
let highestScore = 0;

let body = document.querySelector("body");
body.addEventListener("keypress", function() {
    if(isStarted == false) {
        isStarted = true;
        levelUp();
        setTimeout(generateRandColor, 1000);
    }
});

function generateRandColor() {
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = colors[randIdx];

    let btn = document.querySelector(`#${randCol}`);

    btnFlash(btn);

    gameSeq.push(randCol);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

let btns = document.querySelectorAll(".btn");         //If we use btn at {1}&{2} insted to this then code behaves randomly boz of
for(btn of btns) {                                    //when for loop runs then it register the eventListener to its respective btn objects from 
    btn.addEventListener("click", function() {        //btns collections. and at the end of the loop btn variable refers to last btn object of collection
        btnFlash(this);//{1}                            lets say purple.. but eventListener triggers when we click .. and when we click, at that time btn 
        let btnCol = this.getAttribute("id");//{2}      is refering towards to purple button object that's why no matter on which button we click only 
        userSeq.push(btnCol);                         //purple button register the event and fire callback fn .. thats why always use this operator in callbacks
        checkSeq();                                   //this operator will select the button who fired the event not to whom refered by btn variable
    });
}

function checkSeq() {
    if(userSeq.length >= gameSeq.length) {
        if(userSeq.length > gameSeq.length) {
            reset();
        } else if(gameSeq[gameSeq.length-1] === userSeq[userSeq.length-1]) {
            levelUp();
            userSeq = [];
            setTimeout(function() {
                generateRandColor();
            }, 1000);
        } else {
            reset();
        } 
    }
}

function levelUp() {
    setTimeout(function() {
         level++;
        h2.innerText = `Level ${level}`;
    }, 150);
}

function reset() {
    highestScore = level;
    h2.innerHTML = `Game Over ! Your Score is <b>${level}<b><br> Press any key to start again.<br>HighScore Was ${highestScore}`;
    level = 0;
    gameSeq = [];
    userSeq = [];
    isStarted = false;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
}













// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "green", "purple"];

// let isStarted = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if(isStarted == false) {
//         isStarted = true;
//         levelUp();
//     }
// });

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * 4);
//     let randCol = btns[randIdx];
//     gameSeq.push(randCol);

//     let randBtn = document.querySelector(`.${randCol}`);

//     btnFlash(randBtn);
// }

// function checkAns(idx) {
//     if(userSeq[idx] === gameSeq[idx]) {
//         if(userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//             h2.innerHTML = `Game Over ! Your Score Was <b>${level}<b><br> Press any key to start again`;

//             document.querySelector("body").style.backgroundColor = "red";
//             setTimeout(function() {
//                 document.querySelector("body").style.backgroundColor = "white";
//             },150);

//             reset();
//         }
// }

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function btnPress() {
//     btnFlash(this);
   
//     let userColor = this.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     gameSeq = [];
//     userSeq = [];
//     isStarted = false;
//     level = 0;
// }













































