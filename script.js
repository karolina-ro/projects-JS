/*
PROSTSZY SPOSÓB

// pobieranie elementów
const btnOrange = document.querySelector("div.orange");

//nasluchiwanie
btnOrange.addEventListener("click", function(){
    document.body.className = 'orange';
  })

  */




  /*

// MNIEJ KODU 

// pobieranie elementów
const btnOrange = document.querySelector(".orange");
const btnGreen = document.querySelector(".green");
const btnBlue = document.querySelector(".blue");
const btnYellow = document.querySelector(".yellow");
const btnRed = document.querySelector(".red");

// funkcja
function changeColor() {
    document.body.className = this.className;
  }

// nasłuchiwanie
btnOrange.addEventListener("click", changeColor);
btnGreen.addEventListener("click", changeColor);
btnBlue.addEventListener("click", changeColor);
btnYellow.addEventListener("click", changeColor);
btnRed.addEventListener("click", changeColor);
*/



//TRZECI SPOSÓB
const items = document.querySelectorAll('div');

function changeColor() {
    document.body.className = this.className;
  }
  
items.forEach(function(item){
    item.addEventListener("click", changeColor);
})