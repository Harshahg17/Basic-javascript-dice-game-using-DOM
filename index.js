var randomnumber1=Math.floor(Math.random() * 6) + 1;
var randomimg1source="images/dice"+randomnumber1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute( "src", randomimg1source);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg2source="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2source);


if(randomnumber1>randomnumber2)
{
  document.querySelector("h2").innerHTML="  🏆🎉🥇  player 1 wins!";

} 
else if(randomnumber2>randomnumber1)
 {
     document.querySelector('h2').innerHTML="Player 2 Wins! 🏆🎉🥇";
 } 
 else
 {
      document.querySelector('h2').innerHTML="Both of you got 2nd Chance";

 }

function refresh()
{
  location.reload();
}