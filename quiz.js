correctScore = 10;
incorrectScore = 0;
let theObjects = [];
let firstQuestionValues = [];
let secondQuestionValues = [];

function firstquestion() {
let mainform = document.querySelector(".formone");
let allinput = mainform.querySelectorAll('input[type=radio');
allinput.forEach(eachInput => {
eachInput.addEventListener("click", (e) => {
let clickedContent =e.target.parentElement.innerHTML;
let valueToAdd = clickedContent.includes('id="correct"') ? correctScore : incorrectScore;
firstQuestionValues = [];
firstQuestionValues.push(valueToAdd);
    }); 
  });
}

function secondquestion(){
  let form2 = document.querySelector(".formtwo");
  let allinput2 = form2.querySelectorAll('input[type=radio]');
  allinput2.forEach(eachInput => {
    eachInput.addEventListener("click", (e) => {
let clickedContent2=e.target.parentElement.innerHTML;
let valueToAdd2 = clickedContent2.includes('id="correct"') ? correctScore : incorrectScore;
secondQuestionValues = [];
secondQuestionValues.push(valueToAdd2);
    })
  })
};

firstquestion();
secondquestion();

function toSecond() {
theObjects =
  [...firstQuestionValues, ...secondQuestionValues];
localStorage.setItem("newArray", JSON.stringify(theObjects));
window.location.href = "quiz2.html";
};