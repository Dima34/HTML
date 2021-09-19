console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

const designWidth = 1920;
const viewportMeta = document.querySelector("meta[name='viewport']");
const viewportText = "width=device-width, initial-scale=";

function checkWidth(designWidth,viewportMeta,viewportText){
  if(window.outerWidth > 500){
    
    let scale = window.outerWidth / 1920;
    viewportMeta.setAttribute("content", viewportText+scale);

  } else{

    viewportMeta.setAttribute("content", viewportText+"1");

  }
}

checkWidth(designWidth,viewportMeta,viewportText);

window.addEventListener("resize", ()=>{
  checkWidth(designWidth,viewportMeta,viewportText);
})

//
//  Animation
//

let loadingTime = 2500;

document.addEventListener("DOMContentLoaded", 
()=>{
  scrolling()
});

window.addEventListener('scroll',scrolling);


function isPartiallyVisible(el){
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// Elements
function animPartiallyVisible(elem,Class,duration = undefined, delay = undefined){
    if(isPartiallyVisible(elem)){
        elem.classList.add(Class);
    }
    if(duration != undefined){
        elem.style.animationDuration = duration;
        elem.style.animationDelay = delay;
    }
}
function animPartiallyVisibleALL(elem,Class,duration = undefined, delay = undefined){
    
    if(elem){

        for(var i = 0; i < elem.length;i++){
            if(isPartiallyVisible(elem[i])){
                elem[i].classList.add(Class);
            }
            if(duration != undefined){
                elem[i].style.animationDuration = duration;
                elem[i].style.animationDelay = delay;
            }
        }

    }
    
    
}


function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}

let first = true;

function scrolling(e){
  animPartiallyVisibleALL(queryA(".dinos__dino-left"),"animate__fadeInLeft", "1.2s");
  animPartiallyVisibleALL(queryA(".dinos__dino-right"),"animate__fadeInRight", "1.2s");
  animPartiallyVisibleALL(queryA(".dinos__dino-center"),"animate__fadeIn", "2.5s", "1.2s");
  animPartiallyVisibleALL(queryA(".ship-container_ship"),"animate__slideInRight", "2.5s");
}

// 
// Ticker
// 

const textWrapepr = document.querySelector(".runline__wrapper");
const textLine= document.querySelector(".runline__line");

if(textWrapepr){

  const innerElemLenght = Number(getComputedStyle(textLine.querySelector('p')).width.slice(0,-2));
  const innerElemAmount = Number(textLine.querySelectorAll('p').length);

  const lineLength = innerElemLenght * innerElemAmount;
  console.log(lineLength);
  
  let currPos = 0;
  textLine.style.transform = "translateX("+0+"px)";

  let timer = setInterval(() => {
    if(window.innerWidth > 500){
      currPos-=3;
      textLine.style.transform = "translateX("+currPos+"px)";

      if(currPos <= -(lineLength-innerElemLenght)){
        currPos = 0
      }
    }    
  }, 25);
}
