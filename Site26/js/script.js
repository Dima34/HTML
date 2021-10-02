console.log('%cDeveloped by Djigit', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34',
  'color: #c434c4; background: #eee; font-size: 30px '
);


//
//  Animation
//


document.addEventListener("DOMContentLoaded", ()=>{
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
//
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

//
//  Single Range
//

const rangeLabel = document.querySelector(".single-range__label")

if(rangeLabel){

  const rangeLine = rangeLabel.querySelector(".range-line");
  const range = rangeLabel.querySelector("input");
  const MSex = document.querySelector(".percent-left");
  const WSex = document.querySelector(".percent-right");

  let rangeWidth = Number(getComputedStyle(rangeLabel).width.slice(0,-2));

  let syncLine = (rangeLine, range, msex, wsex) => {
    rangeLine.style.width = (rangeWidth) / Number(range.getAttribute("max")) * range.value + "px";
    msex.firstChild.data = range.value + "%";
    wsex.firstChild.data = (100 - range.value) + "%";
  }

  syncLine(rangeLine, range,MSex, WSex)

  range.addEventListener("input", ()=>{
    syncLine(rangeLine, range,MSex, WSex)
  }) 
  
}

//
// girl anim
// 

const girl = document.querySelector(".illustrarion_girl")

if(girl){

  if(window.innerWidth > 500){
    const firstSrc = girl.getAttribute("src")
    const secondSrc = girl.getAttribute("secondSrc")
    let changed = false

    setInterval(()=>{
      changed ? girl.setAttribute("src", firstSrc) : girl.setAttribute("src", secondSrc);
      changed = !changed;
    }, 1000)  
  }
}

// 
// dual range
// 

window.addEventListener('DOMContentLoaded', () => {
	new dualRangeSlider(document.querySelector(".dual-range"))
})


class dualRangeSlider {
	constructor(rangeElement) {
		this.range = rangeElement
		this.min = Number(rangeElement.dataset.min)
		this.max = Number(rangeElement.dataset.max)
		this.handles = [...this.range.querySelectorAll(".handle")]
		this.startPos = 0;
		this.activeHandle;
		
		this.handles.forEach(handle => {
			handle.addEventListener("mousedown", this.startMove.bind(this))
			handle.addEventListener("touchstart", this.startMoveTouch.bind(this))
		})
		
		window.addEventListener("mouseup", this.stopMove.bind(this))
		window.addEventListener("touchend", this.stopMove.bind(this))
		window.addEventListener("touchcancel", this.stopMove.bind(this))
		window.addEventListener("touchleave", this.stopMove.bind(this))
		
		const rangeRect = this.range.getBoundingClientRect();
		const handleRect = this.handles[0].getBoundingClientRect()
		this.range.style.setProperty("--x-1", "0px");
		this.range.style.setProperty("--x-2", rangeRect.width - handleRect.width/2 + "px");
		this.handles[0].dataset.value = this.range.dataset.min;
		this.handles[1].dataset.value = this.range.dataset.max;
	}
	
	startMoveTouch(e) {
		const handleRect = e.target.getBoundingClientRect()
		this.startPos = e.touches[0].clientX - handleRect.x;
		this.activeHandle = e.target;
		this.moveTouchListener = this.moveTouch.bind(this)
		window.addEventListener("touchmove", this.moveTouchListener);
	}
	
	startMove(e) {
		this.startPos = e.offsetX;
		this.activeHandle = e.target;
		this.moveListener = this.move.bind(this)
		window.addEventListener("mousemove", this.moveListener);
	}
	
	moveTouch(e) {
		this.move({clientX: e.touches[0].clientX})
	}
	
	move(e) {
		const isLeft = this.activeHandle.classList.contains("left")
		const property = isLeft ? "--x-1" : "--x-2";
		const parentRect = this.range.getBoundingClientRect();
		const handleRect = this.activeHandle.getBoundingClientRect();
		let newX = e.clientX - parentRect.x - this.startPos;
		if(isLeft) {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
			newX = Math.min(newX, otherX - handleRect.width)
			newX = Math.max(newX, 0 - handleRect.width/2)
		} else {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
			newX = Math.max(newX, otherX + handleRect.width)
			newX = Math.min(newX, parentRect.width - handleRect.width/2)
		}
		this.activeHandle.dataset.value = this.calcHandleValue((newX + handleRect.width/2) / parentRect.width)
		this.range.style.setProperty(property, newX + "px");
    document.getElementById(this.activeHandle.getAttribute("toId")).value = this.calcHandleValue((newX + handleRect.width/2) / parentRect.width)
	}
	
	calcHandleValue(percentage) {
		return Math.round(percentage * (this.max - this.min) + this.min)
	}
	
	stopMove() {
		window.removeEventListener("mousemove", this.moveListener);
		window.removeEventListener("touchmove", this.moveTouchListener);
	}
}