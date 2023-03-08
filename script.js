let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let msg4 = document.getElementById("message4");
let ranNum = Math.floor(Math.random()*100)+1;
let chance = 0;
let score = 100;
var guessed_num = [];

function play(){
    let guesses = document.getElementById("guess").value;
    

    if(guesses < 1 || guesses > 100){
        alert("Please Enter a number between 1 to 100");
    }
    else{
        guessed_num.push(guesses);
        chance++;
        if(ranNum > guesses){
            msg1.textContent = "Your guess is Low..";
            msg2.textContent = "No. of Guesses : "+chance;
            msg3.textContent = "Guessed number are : "+guessed_num;
        }
        else if(ranNum < guesses){
            msg1.textContent = "YOur guess id High..";
            msg2.textContent = "No. of Guesses : "+chance;
            msg3.textContent = "Guessed Number are : "+guessed_num;
        }
        else if(ranNum == guesses){
            let final = score - chance;
            msg1.textContent = "Awesome, Yahhh You won It!!";
            msg2.textContent = "the Number was : "+ranNum;
            msg3.textContent = "You guessed it in "+ chance + " chances.";
            msg4.textContent = "Your score is "+ final;
        }
    }
}