console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);


function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();

// 
// Burger
// 

let OpenBtn = document.querySelector(".header-burger");

if(OpenBtn){

    let menu = document.querySelector(".header-burger-menu");
    let CloseBtn = document.querySelector(".burger-close");
    let burgerItems = document.querySelectorAll(".burger_item");

    OpenBtn.addEventListener('click',()=>{
        menu.classList.add("active-x")
        document.getElementById("closeSVG").style.display = "none";
        document.getElementById("openSVG").style.display = "block";

        let startS = 0.5;
        for (let i = 0; i < burgerItems.length; i++) {
            startS +=0.15;
            burgerItems[i].style.transitionDuration = startS + "s";
            burgerItems[i].style.transform = "translateX(0px)";
            opacityCounter(burgerItems[i],25);
        }
    });

    CloseBtn.addEventListener('click',()=>{
        menu.classList.remove("active-x")
        document.getElementById("closeSVG").style.display = "block";
        document.getElementById("openSVG").style.display = "none";

        for (let i = 0; i < burgerItems.length; i++) {
            opacityReversedCounter(burgerItems[i],5);
            setTimeout(() => {
                burgerItems[i].style.transitionDuration = "0";
                burgerItems[i].style.transform = "translateX(200%)";
            }, 200);
        }        
    });
}

opacityCounter = (element,speed) =>{
    let tmp = 0;
    let timer = setInterval(()=>{
        tmp+=0.1;
        element.style.opacity = tmp;
        console.log(tmp);
        if(tmp >=1){
            clearTimeout(timer)
        }
    },speed)
}

opacityReversedCounter = (element,speed) =>{
    let tmp = 1;
    let timer = setInterval(()=>{
        tmp-=0.1;
        element.style.opacity = tmp;
        console.log(tmp);
        if(tmp <=0){
            clearTimeout(timer)
        }
    },speed)
}


// 
// Cursor
// 

let cursor = document.querySelector(".cursor");


window.addEventListener("mousemove", (e)=>{
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+ window.pageYOffset +"px";
});

document.onmouseleave = function(event) {
    cursor.style.display = "none"
};

document.onmouseenter = function(event) {
    cursor.style.display = "block"
};


// 
// Crooked letters
// 

let croockedBlock = document.querySelectorAll(".crooked-letters");

if(croockedBlock.length > 0){
    
    croockedBlock.forEach((e)=>{
        let tmp = e.innerHTML;

        e.innerHTML = "";

        for (let i = 0; i < tmp.length; i++) {
            
            e.innerHTML+=`<span>${tmp[i]}</span>`
            
        }
    })
}


// 
// Parallax
// 

mouseParallax = (elem, factor = 0.1, reversed = false)=> {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth;

        if(reversed == true){
            _depth = `${(_mouseX - _w) * -factor}% ,${(_mouseY - _h) * -factor}%`;
        }
        else{
            _depth = `${(_mouseX - _w) * factor}% ,${(_mouseY - _h) * factor}%`;
        }

        
        
        let x = `${_depth}`;
        elem.style.transform = `translate(${x})`;
    }

};


mouseParallax(document.querySelector(".line1_ring"), 0.007);
mouseParallax(document.querySelector(".line2_ring"), 0.001, true);
mouseParallax(document.querySelector(".line2_explosion"), 0.001, true);



// 
// Ticker
// 

let tickerBlock = document.querySelectorAll(".ticker");

if(tickerBlock.length > 0){
    tickerBlock.forEach((elem)=>{
        let tickerLine = elem.querySelector(".ticker_line")
        let tmp = elem.querySelector("p").cloneNode(true);
        
        tickerLine.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            tickerLine.appendChild(tmp.cloneNode(true));
        }
        
        let strokeWidth = getComputedStyle(tickerLine.querySelector("p")).width.slice(0, -2);
        let tickAmount = 0;
        tiker = setInterval(()=>{
            tickerLine.style.transform = `translateX(${tickAmount}px)`;
            tickAmount++;

            if(tickAmount > strokeWidth){
                tickAmount = 0;
            }
        },7)
        
    })
}

//
//  Animation
//

let loadingTime = 2500;

document.addEventListener("DOMContentLoaded", 
()=>{
    setTimeout(() => {
        scrolling()
    }, loadingTime);
    
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
function animPartiallyVisible(elem,Class,duration = undefined){
    if(isPartiallyVisible(elem)){
        elem.classList.add(Class);
    }
    if(duration != undefined){
        elem.style.animationDuration = duration;
    }
}
function animPartiallyVisibleALL(elem,Class,duration = undefined){
    
    if(elem){

        for(var i = 0; i < elem.length;i++){
            if(isPartiallyVisible(elem[i])){
                elem[i].classList.add(Class);
            }
            if(duration != undefined){
                elem[i].style.animationDuration = duration;
            }
        }

    }
    
    
}
function animPartiallyVisibleReadress(elem,toElem,Class){
    if(isPartiallyVisible(elem)){
        toElem.classList.add(Class);
    }
}
function animPartiallyVisibleRaALL(elem,toElem,Class,arrLen){
    for(var i = 0; i < arrLen;i++){
        if(isPartiallyVisible(elem[i])){
            toElem[i].classList.add(Class);
        }
    }
    
}
function animPartiallyVisibleRaChildALL(elem,toElem,Class){
    for(var i = 0; i < toElem.length;i++){
        if(isPartiallyVisible(elem)){
            toElem[i].classList.add(Class);
        }
    }
    
}
function animPartiallyVisibleRaChild(elem,toElem,Class){
    if(isPartiallyVisible(elem)){
        toElem.classList.add(Class);
    }
}

function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}

let first = true;

function scrolling(e){
    animPartiallyVisibleALL(queryA(".goal:nth-child(2n-1)"),"animate__fadeInLeft", "2s");
    animPartiallyVisibleALL(queryA(".goal:nth-child(2n)"),"animate__fadeInRight", "2s");
    animPartiallyVisibleALL(queryA(".why-we .line1"),"animate__fadeInLeft", "2s");
    animPartiallyVisibleALL(queryA(".why-we .line2"),"animate__fadeInRight", "2s");
}



