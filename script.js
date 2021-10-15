console.log("welcome");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change turn
const changeTurn = ()=>{
    // return turn === "X"?"O":"X"
    if(turn === "X"){
        return "O";
    }
    else{
        return "X";
    }
}

// Function to check win
const checkWin = ()=>{
    boxtext = document.querySelectorAll(".box");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)
         && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)
         && (boxtext[e[0]].innerText !== "")){
             document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won🎉!!";
             isgameover = true;
             gameover.play();
             document.querySelector(".img-box img").style.width = "200px";
         }
    })

}

// Game Logic
for(let i=0; i<9; i++){
    let boxtext = document.querySelectorAll(".box")[i];
    boxtext.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    })
}

// Reset 
reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll(".box");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".img-box img").style.width = "0px";
})