let db = new Localbase('db');
var scores=[];
var highScore;

function addData(s) {
  console.log("adding datas");
  db.collection('users').add({
    score: s
  });
  setTimeout(function() {
    calcH();
    consoleData();
    db.collection('users').get().then(users => {
      console.log(scores);
    });
  }, 500);
}
function consoleData(){
  db.collection('users').get().then(users => {
    console.log(users);
    
  });
}
function deleteAll() {
  db.collection('users').delete();
  console.log("data deleted");
}
// calculating and adding highest score
function calcH(){
  db.collection('users').get().then(users => {
    for (let i = 0; i < users.length; i++) {
      scores[i]= users[i].score;
    }
    scores.sort((a, b) => b - a);
    highScore= scores[0];
    console.log("highScore : " + highScore);
    document.querySelector(".highScore").textContent=highScore;
  });
  current_score=document.getElementById("score").innerHTML;
  if (current_score> highScore) {
    document.querySelector(".highScore").textContent=current_score;
  }
  
}
