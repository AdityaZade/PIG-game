/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//CODE REFERENCES

//DOM manipulation
//dice=Math.floor(Math.random()*6)+1;
    //console.log(dice);

//prnting thr random scores ; assigning it to the current variables created in HTML document
   //  document.querySelector('#current-'+activePlayer).textContent=dice;
     
// instead of using 0, 1 notation for the current player we will make use of the active player variable and
//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+dice+'<\em>';

//querySelector is being used for DOM manipulation  as it is used to change the value of the objects

//it is used to read values of the objects 
  //var x= document.querySelector('#score-0').textContent;
//console.log(x);




var scores,roundScores, activePlayer,dice,gamePlaying;
//var pastdice=0;

init();

// adding event listners
//callback function is the function whoose name only is defined as argument to anothr method
//Anonymous function is the one whoose body is defined in  Argument list of another function/method

document.querySelector('.btn-roll').addEventListener('click',function(){
    
  if(gamePlaying)
      {
          
            //1.Random number
            dice=Math.floor(Math.random()*6)+1; 
          
            //2.Display result
         var diceDOM = document.querySelector('.dice');
            diceDOM.style.display='block';
            diceDOM.src='dice-'+dice+'.png';
            //3.update the roundscore if it is not a 1
        
             if(dice!==1){
                  //Add the roundscores
                    roundScores+=dice;
                    document.querySelector('#current-'+activePlayer).textContent= roundScores;
             }
                else{
                  //next Player
                   nextPlayer();
                }
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

                //check if player won the game
                if(scores[activePlayer]>=20){
                    document.querySelector('#name-'+activePlayer).textContent='Winner!!';
                    
                    document.querySelector('.dice').style.display='none';
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
        document.getElementById('.dice').style.display='none';      
            
         
        
    
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
 document.querySelector('.dice').style.display='none';

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






