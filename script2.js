
//===== code for landing page =====

//=====random background for play button=====
function randomBG(){
   var colorComb=[
  "linear-gradient(to right, #2E3192 , #1BFFFF)",
  "linear-gradient(to right, #D4145A , #FBB03B)",
  "linear-gradient(to right, #662D8C , #ED1E79)",
  "linear-gradient(to right, #C6EA8D , #FE90AF)",
  "linear-gradient(to right, #EA8D8D , #A890FE)",
  "linear-gradient(to right, #A9F1DF , #FFBBBB)",
  "linear-gradient(to right, #000428 , #004e92)",
  "linear-gradient(to right, #43cea2 , #185a9d)",
  "linear-gradient(to right, #bdc3c7 , #2c3e50)",
  "linear-gradient(to right, #cc2b5e , #753a88)"
  ];
   var button=document.querySelector(".play-btn");
   n= Math.floor(Math.random()*10) +1;
   console.log(n);
   button.style.background=colorComb[n];
 }
 randomBG();
 
//==== play button ======
document.querySelector(".play-btn")
.addEventListener("click",function () {
  var url = "https://adwaith-anand-sr.github.io/bubbleGame/bubble_game.html";
  window.location.href = url;
} )

//=====rules button=====
document.querySelector(".rules-btn")
.addEventListener("click",function () {
  
  document.querySelector(".btn-container").
  style.display="none";
  
  document.querySelector(".rules-container")
  .style.animation="rulesOpen .5s linear forwards";
} )

 function gotit() {
  document.querySelector(".rules-container")
  .style.animation="rulesClose .65s linear forwards";
  
  setTimeout(function() {
    document.querySelector(".btn-container").
    style.display="flex";
  }, 700);
}

//====score button=====
document.querySelector(".score-btn")
.addEventListener("click", function() {
  
  document.querySelector(".btn-container").
  style.display="none";
  document.querySelector(".score-container").
  style.display="block";
})

