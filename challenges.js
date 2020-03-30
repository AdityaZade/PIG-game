
var scores,roundScores, activePlayer,dice1,dice2,gamePlaying;
//var pastdice=0;

init();
//var lastDice;

// adding event listners
//callback function is the function whoose name only is defined as argument to anothr method
//Anonymous function is the one whoose body is defined in  Argument list of another function/method

document.querySelector('.btn-roll').addEventListener('click',function(){
    
  if(gamePlaying)
      {
          
            //1.Random number
            dice1=Math.floor(Math.random()*6)+1; 
            dice2=Math.floor(Math.random()*6)+1; 

            //2.Display result
          document.getElementById('dice-1').style.display='block';
          document.getElementById('dice-2').style.display='block';
          document.getElementById('dice-1').src='dice-'+ dice1+'.png';
          document.getElementById('dice-2').src='dice-'+ dice2+'.png';
      

            //3.update the roundscore if it is not a 1
          
           if(dice1 !==1 && dice2 !== 1){
                  //Add the roundscores
                    roundScores+=dice1+dice2;
                    document.querySelector('#current-'+activePlayer).textContent= roundScores;
             }
                else{
                  //next Player
                   nextPlayer();
                }
//        
//              if( dice===6 && lastDice===6){               
//                 //player loses the score
//                  scores[activePlayer]=0;
//                  document.querySelector('#score-'+activePlayer).textContent='0';
//                  nextPlayer();
//                  
//              }else if(dice!==1){
//                  //Add the roundscores
//                    roundScores+=dice;
//                    document.querySelector('#current-'+activePlayer).textContent= roundScores;
//             }
//                else{
//                  //next Player
//                   nextPlayer();
//                }
//          
//          lastDice=dice;
            }

               
});

//Adding even listner for the HOLD button
document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying)
        {
               //add current score to the GLOBAL score
                scores[activePlayer]+=roundScores;

                //update the user interface
                document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

            var input= document.querySelector('.final-score').value;
            var winScore;
            if(input){
                winScore=input;
            }else{
                winScore=20;
            }
            
                //check if player won the game
                if(scores[activePlayer]>=winScore){
                    document.querySelector('#name-'+activePlayer).textContent='Winner!!';
                    document.getElementById('dice-1').style.display='none';
                    document.getElementById('dice-2').style.display='none';
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                    gamePlaying=false;
                }else{
                    //next player
                 nextPlayer();

                }   
        }
});

//DRY principle for the next fuunction for easy maintenance 
function nextPlayer()
{ activePlayer === 0 ? activePlayer= 1: activePlayer =0;
        roundScores=0;
        
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
     
/*
        if (activePlayer===1){
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
           
            
        }else{
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
           
        }
*/
//alternate code using toggle class
        
          document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.getElementById('dice-1').style.display='none';      
        document.getElementById('dice-2').style.display='none';      
        
    
}

//Adding event lister for the new btn
document.querySelector('.btn-new').addEventListener('click',init);

//init function
function init()
{
    scores=[0,0];
roundScores=0;
activePlayer=0;
gamePlaying=true;

//it is used to change the css style
 document.getElementById('dice-1').style.display='none';
 document.getElementById('dice-2').style.display='none';

//setting all the var to 0

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='Player-0';
document.getElementById('name-1').textContent='Player-1';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
    
document.querySelector('.player-0-panel').classList.add('active');

}