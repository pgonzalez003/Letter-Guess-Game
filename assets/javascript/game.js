// variables 

let letters = randomLetterPicker();
let wins = 0;
let losses = 0;
let attempts = 10;
let guessedletters = [];
let player; 

function randomLetterPicker(){
    return String.fromCharCode(Math.floor(Math.random() * 25) + 97)
}

console.log(letters);

document.onkeyup = function(event){
    player = event.key;
    let reset = function(){
        letters =randomLetterPicker();
        attempts = 10;
        console.log (letters);
      }

console.log(player)
if (player === letters){
    wins++;
    guessedletters = [];
    alert("Winner, winner Chicken Dinner");
    attempts = 10;
    reset();
}

// I dont understand why the scores are not coming through on the other side // 


if(attempts === 0){
    losses ++;
    alert("Don't quit your day-job")
    guessedletters  = [];
    reset();
}

if (guessedletters.indexOf(player)>= 0){
} else {
    guessedletters.push(player);
    document.getElementById('guessedletters').innerHTML = guessedletters
}
};
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('attempts').innerHTML = guessedletters;
