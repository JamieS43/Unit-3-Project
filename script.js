/* Declare variables below to save the different sections (divs) of your story*/
let first = document.querySelector(".first");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionOneTwoEnd = document.querySelector(".option-one-two-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionTwoTwoEnd = document.querySelector(".option-two-two-end");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-two-one")
let buttonFour = document.querySelector(".option-two-two")
let buttonFive = document.querySelector(".option-three-one")
let buttonSix = document.querySelector(".option-three-two")
let help = document.querySelector(".help-me")
let body = document.querySelector("body")
let title = document.querySelector("title")
let thing = document.querySelector(".log")
buttonOne.onclick = function() {
  optionOne.style.display = "block";
};
buttonTwo.onclick = function() {
  optionTwo.style.display = "block";
};

buttonFour.onclick = function() {
  optionOneEnd.style.display = "block";
};

buttonThree.onclick = function() {
  optionOneTwoEnd.style.display = "block";
};


buttonFive.onclick = function() {
  optionTwoEnd.style.display = "block";
  help.innerHTML = "Through the block";
};
buttonSix.onclick = function() {
  optionTwoTwoEnd.style.display = "block";
};




