var bubbles="";
var hit,i,display=true,score=0;
var value, clicked_val;

// =====bubbles making=====
function bubble_maker(){
  document.querySelector(".panel").innerHTML="";
	for( i=1;i<=50;i++){
		bubbles += '<div class="bubble" >'+''+'</div>';
	}
	document.querySelector(".panel").innerHTML=bubbles;
	getValues();
}
bubble_maker();

//===== setting values for all bubbles=====
function getValues() {
  var panel=document.querySelector(".panel");
  var bubble=document.querySelectorAll(".bubble");
  for( i=0;i<50;i++){
    value=Math.floor(Math.random()*10);
    bubble[i].textContent=value;		
	}
}

// =====set timeout======
function timeout(){
	var time =30;
	var time_intervel=setInterval(function(){
		if(time>0){
			time--;
			document.querySelector("#time").textContent=time;
			if(time<6) {
		    document.querySelector("#time").style.color="red";
		  }
		}
		else{
			document.querySelector(".panel").style.display="none";
			document.querySelector(".game-over").style.display="flex";
			clearInterval(time_intervel);
			newscore();
		}
	},1000);
}
timeout();

// =====hit list=====
function hitlist(){
	hit=Math.floor(Math.random()*10);
	document.querySelector("#hit").textContent=hit;
}
hitlist();

// getting val of clicked elem
var panel=document.querySelector(".panel");
panel.addEventListener("click", function(dets){
	clicked_val=Number(dets.target.textContent);
	if(dets.target.textContent.length==1){
		dets.target.style.animation="0.25s anim linear 1";
		setTimeout(function(){
			dets.target.style.animation="";
		},300);
		score_update();
		getValues();
		hitlist();
	}
});

//score updation 
function score_update(){
	if(clicked_val==hit){
		score+=1;
		document.querySelector("#score").textContent=score;
	}else{
		if(score>0){
			score-=2;
			document.querySelector("#score").textContent=score;
			document.getElementById("neg-score").style.display="block";
			document.getElementById("neg-score").style.animation=".5s neg-score linear 1";
			setTimeout(function(){
				document.getElementById("neg-score").style.display="none";
				document.getElementById("neg-score").style.animation="";
			},550);
		}
			if(score<0){
				document.querySelector("#score").textContent=0;
			}
	}
}

//score 
 function newscore() {
  current_score= document.getElementById("score").innerHTML;
  document.querySelector(".your-score").textContent=current_score;
  addData(current_score);
  
 }

document.querySelector(".continue-btn")
.addEventListener("click", function() {
  var url = "/index.html";
  window.location.href = url;
})