// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("我最喜欢巧克力冰淇淋了！");
// } else {
//   alert("但是巧克力才是我的最爱呀……");
// }
// document.querySelector("html").addEventListener("click", function(){
//   alert("别戳我，我怕疼！");
// });
const myImage = document.querySelector("img");
myImage.onclick = ()=> {
  const mySrc = myImage.getAttribute("src");
  if(mySrc == "images/firefox-icon.png")
    myImage.setAttribute("src", "images/firefox-icon2.png")
  else
    myImage.setAttribute("src", "images/firefox-icon.png")
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  const myName = prompt("Please enter your name:");
  if(!myName){
    setUserName()
  }
  else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if(!localStorage.getItem("name")){
  setUserName();
}
else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};

const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});