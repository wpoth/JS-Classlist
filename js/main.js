const div = document.querySelector(".box");
const btn = document.querySelector(".run");
const btn2 = document.querySelector(".remove");

// // opdr 1 , 2 en 3
// let toggle = true;

// function myfunction() {
//   if (toggle) {
//     div.classList.add("error");
//   } else {
//     div.classList.remove("error");
//   }
//   toggle = !toggle;
// }

// opdr 4

btn.addEventListener("click", myFunction);

function myFunction() {
  div.classList.toggle("error");
}


btn2.addEventListener("click" , yes)
function yes() {
    div.classList.remove("error");
}

const div2 = document.querySelector(".flashbang");
const animate = document.querySelector(".boom");
animate.addEventListener("click", qwerty);


function qwerty() {
    div2.classList.add("blinker");
  }