//alert ("Welcome to Our Gaming Website");
var player1="player1";
var player2="player2";
player1=prompt("type your name");
player2=prompt("type your name");
document.querySelector("p.player1").innerHTML=player1;
document.querySelector("p.player2").innerHTML=player2;
var ranNum1=Math.floor(Math.random()*6)+1;
var ranNum2=Math.floor(Math.random()*6)+1;
var randomimg1= "./images/"+"dice"+ranNum1+".png"
var randomimg2= "./images/"+"dice"+ranNum2+".png"
document.querySelector(".img1").setAttribute("src", randomimg1);
document.querySelector(".img2").setAttribute("src", randomimg2);
if (ranNum1==ranNum2) {
    document.querySelector("h1").innerHTML="Draw!!"
}
else if (ranNum1>ranNum2) {
    document.querySelector("h1").innerHTML=player1+" Wins🥳";
} else {
    document.querySelector("h1").innerHTML=player2+" Wins🥳";
}
