let submitPlayers = document.querySelector('.submitplayers');
let box = document.querySelectorAll('.box');
// let playerOne;
// let playerTwo;
let playerTurn = "O";
const boxValue = ["","","","","","","","",""];


function playerTurnChange(){
    if(playerTurn === playerOne.marker){
        playerTurn = playerTwo.marker;
    }else if (playerTurn === playerTwo.marker){
        playerTurn = playerOne.marker;
    }
    }


box.forEach(item=>{
    item.addEventListener('click',(e)=>{
        let data = e.target.dataset.box;
        e.target.textContent = playerTurn;
        boxValue[data] = playerTurn;
        playerTurnChange();
        console.log(playerTurn)
    })  })

submitPlayers.addEventListener('click',()=>{
    const playerTwoName = document.getElementById('playertwo').value;
    const playerOneName = document.getElementById('playerone').value;
    playerOne = playerMaker(playerOneName,"O");
    playerTwo = playerMaker(playerTwoName,"X");   
    return playerOne,playerTwo;
})


function playerMaker(name,marker){
    return {name,marker}
}

