correctScore = 10;
incorrectScore = 0;
let firstQuestionValues = [];
let secondQuestionValues = [];
let thirdQuestionValues = [];

function fourthquestion() {
let mainform = document.querySelector(".formsix");
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

function fifthquestion() {
  let form2 = document.querySelector(".formseven");
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

function sixthquestion() {
  let form3 = document.querySelector(".formeight");
  let allinput3 = form3.querySelectorAll('input[type=radio]');
  allinput3.forEach(eachInput => {
    eachInput.addEventListener("click", (e) => {
let clickedContent3= e.target.parentElement.innerHTML;
let valueToAdd3 = clickedContent3.includes('id="correct"') ? correctScore : incorrectScore;
thirdQuestionValues = [];
thirdQuestionValues.push(valueToAdd3);
    })
  })
};

fourthquestion();
fifthquestion();
sixthquestion();

function toFourth() {
 let storedArray = JSON.parse(localStorage.getItem("newArray"));
let mergedArray = storedArray.concat(firstQuestionValues, secondQuestionValues, thirdQuestionValues);
localStorage.setItem("newArray", JSON.stringify(mergedArray));
window.location.href = "quiz4.html";
};