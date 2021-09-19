console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
  var distance = document.querySelector("body").getBoundingClientRect().top;
  
  distance < 0 ? header.classList.add("not-at-top") : header.classList.remove("not-at-top")
})