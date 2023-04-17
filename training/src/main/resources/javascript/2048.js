'use strict'

let board = [
  ['','','',''],
  ['','','',''],
  ['','','',''],
  ['','','',''],
];

let score = 0;
document.getElementById('score').innerHTML = score;
const textWinLose = document.getElementById("text");
let checkNum = false;      



function drawBoard(){
  randomNumber();
  for (let row = 0; row < board.length; row++){
    for (let col = 0; col < board[row].length; col++){
      let cell = document.getElementById("cell" + row + col);
      cell.innerHTML = board[row][col]; 
    }    
  }
};
drawBoard();




function generateNum(){
  let randomIndexRow, randomIndexCol;
  do{
    randomIndexRow = Math.floor(Math.random()*board.length);
    randomIndexCol = Math.floor(Math.random()*board.length);
  }
  while (board[randomIndexRow][randomIndexCol] !='');
   board[randomIndexRow][randomIndexCol]= 2;
}; 




function randomNumber(){
  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board.length; col++){
      if(board[row][col]==''){
        return generateNum();
      }
    }
  }
};




function controlArrow(button) {
  if(button.keyCode === 37) {
    keyLeft();
    mergeLeft();
  } else if (button.keyCode === 38) {
    keyUp();
    mergeUp();
  } else if (button.keyCode === 39) {
    keyRight();
    mergeRight();
  } else if (button.keyCode === 40) {
    keyDown();
    mergeDown();
  }
  drawBoard();
  isGameOver();
};
document.addEventListener('keyup', controlArrow);




function keyLeft() {
  for(let h = 0; h < 3; h++){
    for(let row = 0; row < board.length; row++){
      for (let col = 0; col < board.length; col++){
        if (board[row][col] != ''){
          if (board[row][col-1] == '') {
          board[row][col-1] = board[row][col];
          board[row][col]='';
          } 
        }
      }
    }
  }
};



function keyRight() {
  for(let h = 0; h < 3; h++){
    for(let row = 0; row < board.length; row++){
      for (let col = 3; col >= 0; col--) {
        if (board[row][col] != ''){
          if (board[row][col+1] == '') {
            board[row][col+1] = board[row][col];
            board[row][col]='';
          } 
        }
      }
    }
  }
};




function keyDown() {
    for(let h = 0; h < 3; h++){
      for(let row = 0; row < 3; row++){
        for (let col = 0; col < board.length; col++){
          if (board[row][col] != 0){
            if (board[row+1][col] == '') {
            board[row+1][col] = board[row][col];
            board[row][col]=''; 
          } 
        }
      }
    }
  }
};





function keyUp() {
  for(let h = 0; h < 3; h++){
    for(let row = 3; row > 0; row--){
      for (let col = 0; col < board.length; col++){
        if(board[row][col] != 0){
          if(board[row-1][col] == '') {
            board[row-1][col] = board[row][col];
            board[row][col]='';
          } 
        }
      }
    }
  }
};
      


 
function mergeLeft() {
  for(let row = 0; row < board.length; row++){
    for (let col = 0; col < 3; col++){
      if (board[row][col] != 0){
        if (board[row][col] == board[row][col + 1]) {
          board[row][col] = board[row][col] * 2;
          score += board[row][col]
          document.getElementById('score').innerHTML = score;

          //Move all number to left
          if(col < 3){
            for(let k = col+1 ; k < 3; k++){
              board[row][k] = board[row][k + 1];
            }
          }
          board[row][3]='';
        }
      }
    }
  }
  checkForWin();
  isGameOver();
};




function mergeRight() {
  for(let row= 0; row < board.length; row++){
    for(let col = 3; col > 0; col--){
      if(board[row][col] != 0){
        if(board[row][col - 1] == board[row][col]) {
          board[row][col] = board[row][col] * 2;
          score += board[row][col]
          document.getElementById('score').innerHTML = score;

          // move all number to right
          if(col > 1){
            for(let k = col-1; k > 0; k--){
              board[row][k]=board[row][k-1];
            }
          }
          board[row][0]='';
        } 
      }
    }
  }
  checkForWin();
  isGameOver();
};



function mergeDown() {
  for(let row = 3; row > 0; row--){
    for (let col = 0; col < board.length; col ++){
      if (board[row][col] != ''){
        if(board[row-1][col]== board[row][col]){
          board[row][col] = board[row][col]*2;
          score += board[row][col]
          document.getElementById('score').innerHTML = score;
          
          //move all number down
          if(row > 1){
            for(let k = row-1; k > 0; k-- ){
              board[k][col] = board[k-1][col];
            }
          }
          board[0][col] = '';
        }
      } 
    }
  }
  checkForWin();
  isGameOver();
};



function mergeUp() {
  for(let row = 0; row < 3; row++){
    for (let col = 0; col < board.length; col ++){
      if (board[row][col] != ''){
        if(board[row+1][col] == board[row][col]){
          board[row][col] = board[row][col]*2;
          score += board[row][col]
          document.getElementById('score').innerHTML = score;
         

          //move all number down
          if(row < 3){
            for(let k = row + 1; k < 3; k++){
              board[k][col] = board[k+1][col];
            }
          }
          board[3][col] ='';
        }
      } 
    }
  }
  checkForWin();
  isGameOver();
};





function hasEmptySpace() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] =='') return true;
    }
  }
  return false;
};



function checkHorizontalGameOver() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length-1; col++) {
      if (board[row][col] == board[row][col + 1]){
       return false;
      }
    }
  }
  return true;
};



function checkVerticalGameOver() {
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board.length -1; row++) {
      if (board[row][col] == board[row+1][col]){ 
        return false;
      } 
    }
  }
  return true;
};



function isGameOver() {
  if (hasEmptySpace() == false){
    if((checkHorizontalGameOver()) && (checkVerticalGameOver())){  
      textWinLose.innerHTML = 'You Lose!';
      document.removeEventListener('keyup', controlArrow);
    }
  }
};



function checkForWin(){
  checkNum = false;
  for(let row = 0; row < board.length; row++){
    for (let col = 0; col < board.length; col ++){
      if(board[row][col] == 2048)
      checkNum = true;
    }
  }
  if(checkNum){
  textWinLose.innerHTML= 'You Win!';
  document.removeEventListener('keyup', controlArrow);
  }
};


function resetGame(){
  score = 0;
  board = [
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
  ];
  textWinLose.innerHTML = '';
  document.addEventListener('keyup', controlArrow);
  document.getElementById('score').innerHTML = score;
  drawBoard();
};

