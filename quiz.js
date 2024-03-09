correctScore = 10;
incorrectScore = 0;
let storedData;
let theObjects = [];


function firstquestion() {
let mainform = document.querySelector(".formone");
let allinput = mainform.querySelectorAll('input[type=radio');
allinput.forEach(eachInput => {
eachInput.addEventListener("click", (e) => {
let clickedContent = e.target.parentElement.innerHTML;
if (clickedContent.includes('id="correct"')) {
  theObjects.push(correctScore)
} else {
theObjects.push(incorrectScore)
        }
   localStorage.setItem("scores", JSON.stringify(theObjects));
 //      console.log(theObjects)
    }); 
  });
}
function secondquestion(){
  console.log("hey")
}

function toSecond() {
localStorage.setItem("yes", JSON.stringify("yes"));
window.location.href = "quiz2.html";
let again = localStorage.getItem("yes");
  console.log(again);
}

/*
  //  firstquestion();
    // secondquestion();
 
  //let storedData = localStorage.getItem('scores');
 // console.log(storedData);
// console.log(theObjects)
*/



/*
let theObjects = localStorage.setItem("scores", JSON.stringify(eachsores)) || [];
*/

function toThird() {
  console.log("yes");
  window.location.href = "quiz3.html";
}
function toFourth() {
  console.log("yes");
  window.location.href = "quiz4.html";
}





// make an object for the scores


// final result
function result() { 
}






/*
let totry = {"one":"fatiu", "two":"toriq", "three": "yakubu", "four":"rokeeb"};
let randomi = "";

for (const x in totry) {
  randomi =+ totry;
  console.log(totry[x]);
}
*/

