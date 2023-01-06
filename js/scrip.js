// let menu = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist")

// menu.addEventListener("click", function() {navlist.classList.toggle("active");
// });

// window.onscroll = () => {
//   navlist.classList.remove("active");
// };


const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};