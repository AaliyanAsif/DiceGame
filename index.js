var randomNumber1 = Math.floor( Math.random() * 6)+1;
var randomNumber2 = Math.floor( Math.random() * 6)+1;
// console.log(randomNumber1);
// document.querySelector("img").setAttribute("src","images/dice(randomNumber1).png");
document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // !st dice random pic selector
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 has won!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 has won!";
}
else{
    document.querySelector("h1").textContent = "Its A Draw :|"
}

