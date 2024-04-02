var random_num=Math.floor((Math.abs(Math.random()*100+Math.random()*51-Math.random()*51)%100)+1);
const sbt_btn=document.getElementById('submit_btn');
const userGuess=document.querySelector('#guess');
const guessrem=document.querySelector('#guessrem');
const prevguess=document.querySelector('#prevguess');
const msg=document.getElementById('msg');
const endgamemsg=document.getElementById('endgame');
let container=document.querySelector('#container')
let playGame=true;
let rem=6;
console.log(random_num);
sbt_btn.addEventListener('click',function(e){
    e.preventDefault();
    
    if(playGame && rem){
        validate(userGuess.value);
    }
})
function validate(userGuess){
    if(userGuess<1 || userGuess>100 || isNaN(userGuess)){
        msg.innerHTML='Please enter a valid number ';
    }
    else{
        rem--;
        guessrem.innerHTML=`${rem}`
        check(userGuess);
    }
}
function check(userGuess){
    if(userGuess==random_num){
        msg.innerHTML='<h1>Correct!! You Won</h1>'
        playGame=false;
        displayprevguess(userGuess);
        endgamehelper();
        
    }
    else if(userGuess>random_num){
        displayprevguess(userGuess);
        msg.innerHTML='Too High!!! Try Again!'
        if(rem==0){
            displaymsg();
            endgamehelper();
        }
    }
    else{
        displayprevguess(userGuess);
        msg.innerHTML='Too Low!!! Try Again!'
        if(rem==0){
            displaymsg();
            endgamehelper();
        }
    }

}
function displayprevguess(userGuess){
    prevguess.appendChild(document.createTextNode(`${userGuess}, `))
}
function displaymsg(){
    msg.innerHTML=`<h1>Game Over. Random number was ${random_num}</h1>`;
}
function endgamehelper(){
    let newbtn=document.createElement('button');
    newbtn.innerHTML='Start New Game';
    container.appendChild(newbtn);
    newGame(newbtn);
}
function newGame(newbtn){
    newbtn.addEventListener('click',function(e){
        e.preventDefault();
        rem=6;
        playgame=true;
        prevguess.innerHTML='';
        guessrem.innerHTML='6';
        msg.innerHTML='';
        document.getElementById('form-').reset();
        random_num=Math.floor((Math.abs(Math.random()*100+Math.random()*51-Math.random()*51)%100)+1);
        console.log(random_num);
        container.removeChild(newbtn);
        
    })
}