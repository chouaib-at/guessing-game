

let guessedNumber=Math.floor(math.random()*100);
let A=prompt("guesse the number","entre a number")
while(guessedNumber!=A)

if (guessedNumber<A){
  console.log("try a lower number")
}
else if (guessedNumber>A){
  console.log("try a higher number")
}
  else{
    console.log("Congratulations,you guessed the right number")
    
  }