// roll button ------------------------------
let turn =true;
let rollBtn=document.querySelector('.roll_btn');
let p1=document.querySelector('.player1')
let p2=document.querySelector('.player2')
let dice=document.querySelector('.dice')
let p1currentScoreShow=p1.querySelector('.current_score');
let p2currentScoreShow=p2.querySelector('.current_score');

let currentScore=0;

rollBtn.addEventListener('click',function(){
  let val = Math.round((Math.random()*6));
  dice.textContent=val;
  if(val==0){
    currentScore=0;
  }
  else{
    currentScore+=val;
  }
  if(turn){
    p1currentScoreShow.textContent=currentScore;
  }
  else{
    p2currentScoreShow.textContent=currentScore;
  }
  if(currentScore==0){
    turn=!turn;
    p1.classList.toggle('active')
    p2.classList.toggle('active')
  }
})

// hold button --------------------------------

let hold=document.querySelector('.hold_btn');
let p1TotalScoreShow=p1.querySelector('.total_score');
let p2TotalScoreShow=p2.querySelector('.total_score');

let p1TotalScore=0;
let p2TotalScore=0;

hold.addEventListener('click',function(){
  if(turn){
    p1TotalScore+=currentScore;
    p1TotalScoreShow.textContent=p1TotalScore;
    p1.classList.toggle('active')
    p2.classList.toggle('active')
  }
  else{
    p2TotalScore+=currentScore;
    p2TotalScoreShow.textContent=p2TotalScore;
    p1.classList.toggle('active')
    p2.classList.toggle('active')
  }
  turn=!turn;
})

// new game button ---------------

let newGameBtn = document.querySelector('.new_game_btn');
newGameBtn.addEventListener('click',function(){
  turn =true;
  currentScore=0;
  p1TotalScore=0;
  p2TotalScore=0;

  p1currentScoreShow.textContent=0;
  p2currentScoreShow.textContent=0;
  p1TotalScoreShow.textContent=0;
  p2TotalScoreShow.textContent=0;

  p1.classList.add('active')
  p2.classList.remove('active')
})