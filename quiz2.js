correctScore = 10;
incorrectScore = 0;
let firstQuestionValues = [];
let secondQuestionValues = [];
let thirdQuestionValues = [];

function thirdquestion() {
let mainform = document.querySelector(".formthree");
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

function fourthquestion() {
  let form2 = document.querySelector(".formfour");
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

function fifthquestion(){
  let form3 = document.querySelector(".formfive");
  let allinput3 = form3.querySelectorAll('input[type=radio]');
  allinput3.forEach(eachInput => {
    eachInput.addEventListener("click", (e) => {
let clickedContent3=e.target.parentElement.innerHTML;
let valueToAdd3 = clickedContent3.includes('id="correct"') ? correctScore : incorrectScore;
thirdQuestionValues = [];
thirdQuestionValues.push(valueToAdd3);
    })
  })
};

thirdquestion();
fourthquestion();
fifthquestion();

function toThird() {
 let storedArray = JSON.parse(localStorage.getItem("newArray"));
let mergedArray = storedArray.concat(firstQuestionValues, secondQuestionValues, thirdQuestionValues);
localStorage.setItem("newArray", JSON.stringify(mergedArray));
window.location.href = "quiz3.html";
};