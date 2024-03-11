correctScore = 10;
incorrectScore = 0;
let firstQuestionValues = [];
let secondQuestionValues = [];

function ninethquestion() {
let mainform = document.querySelector(".formnine");
let allinput = mainform.querySelectorAll('input[type=radio');
allinput.forEach(eachInput => {
eachInput.addEventListener("click", (e) => {
let clickedContent = e.target.parentElement.innerHTML;
let valueToAdd = clickedContent.includes('id="correct"') ? correctScore : incorrectScore;
firstQuestionValues = [];
firstQuestionValues.push(valueToAdd);
    }); 
  });
};

function tenthquestion() {
  let form2 = document.querySelector(".formten");
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

ninethquestion();
tenthquestion();


function result() {
 let storedArray = JSON.parse(localStorage.getItem("newArray"));
let mergedArray = storedArray.concat(firstQuestionValues, secondQuestionValues);
console.log(mergedArray);
//localStorage.setItem("newArray", JSON.stringify(mergedArray));
//window.location.href = "quiz4.html";
};