let submitPlayers = document.querySelector('.submitplayers');
let box = document.querySelectorAll('.box');
let header = document.querySelector('.header');
let playerOne;
let playerTwo;
let playerTurn = [];
let turn = "0";
let playerMarkerTurn;
const boxValue = ["","","","","","","","",""];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



function winCheck(){
    let gameWon = false
    for(i=0;i<winConditions.length;i++){
        const condition = winConditions[i];
        const a = boxValue[condition[0]]
        const b = boxValue[condition[1]]
        const c = boxValue[condition[2]]
        if(a ==="" && b ==="" && c==""){
            continue;
        }
        else if(a === b && b === c){
            gameWon = true
        }else{};
    }
    if(gameWon === true){
        header.textContent= `${playerTurn[turn-1].name} Wins!`
    }
}



// CHANGES PLAYER IN ARRAY
function playerTurnChange(){
    if(turn === "0"){
        turn = "1"
        header.textContent = `Your turn ${playerTurn[turn].name}`;
    }else if (turn === "1"){
        turn = "0"
        header.textContent = `Your turn ${playerTurn[turn].name}`;
    }else{
        turn = "0"
    }
}

// GETS BOX NUMBER TO PUSH TO ARRAY, THEN FILLS BOX WITH PLAYER MARKER AND RUNS TURNCHANGE FUNCTION
box.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if(e.target.textContent === ""){
        let data = e.target.dataset.box;
        boxValue[data] = playerTurn[turn].marker;
        e.target.textContent = playerTurn[turn].marker;
        playerTurnChange();
        winCheck()
        }else{
            header.textContent = `Choose another box ${playerTurn[turn].name}`
            

        }
    })  })

// TAKES INPUT AND RUNS IT THROUGH PLAYERMAKER AND UPDATES HEADER ON WHO GOES FIRST
submitPlayers.addEventListener('click',()=>{
    const playerTwoName = document.getElementById('playertwo').value;
    const playerOneName = document.getElementById('playerone').value;
    playerOne = playerMaker(playerOneName,"O");
    playerTwo = playerMaker(playerTwoName,"X");   
    playerTurn.unshift(playerOne);
    playerTurn.push(playerTwo);
    header.textContent = `${playerTurn[0].name} starts!`;
})

// CREATES PLAYER OBJECTS
function playerMaker(name,marker){
    return {name,marker}
}

