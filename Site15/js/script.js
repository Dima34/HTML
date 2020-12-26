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
//  Sidebar
//

hasChild = document.querySelectorAll(".has_child");

if(hasChild){ 
    function setSubMenuPos(child){
        let hasChildToBottom = window.innerHeight - (child.getBoundingClientRect().height + child.getBoundingClientRect().y);
        childList  = child.querySelector(".listitem_child");
        childHeight = childList.getBoundingClientRect().height;
    
        if(hasChildToBottom <= (childHeight - child.getBoundingClientRect().height)){
    
            childList.style.top = "unset";
            childList.style.bottom = "0";
    
            if(window.innerHeight <= childHeight){
                childList.style.overflowY = "scroll";
                childList.style.maxHeight = window.innerHeight + "px";
            }
            else{
                childList.style.overflowY = "unset";
                childList.style.maxHeight = "unset";
            }
        }
        else{
            if(window.innerWidth > 1200){
                childList.style.top = child.getBoundingClientRect().top + pageYOffset + "px";
                childList.style.bottom = "unset";
                if(window.innerHeight >= childHeight){
                    childList.style.overflowY = "unset";
                    childList.style.maxHeight = "unset";
                }
            }
        } 
    }
    
    for (let i = 0; i < hasChild.length; i++) {
        
        window.addEventListener("resize", ()=>{
            if(window.innerWidth > 1200){
                setSubMenuPos(hasChild[i]);
    
                hasChild[i].addEventListener("mouseover", ()=>{
                    setSubMenuPos(hasChild[i]);
                })
            }
        })
    
        if(window.innerWidth > 1200){
            setSubMenuPos(hasChild[i]);
    
            hasChild[i].addEventListener("mouseover", ()=>{
                setSubMenuPos(hasChild[i]);
            })
        }
        
    }
}



//
// Sidebar class change
//

if(window.innerWidth < 1200){
    needToChange = document.querySelectorAll(".has_child");
    for (let b = 0; b < needToChange.length; b++) {
        needToChange[b].classList.add("has_child-mob"); 
        needToChange[b].classList.remove("has_child");
    }
}
else{
    needToChange = document.querySelectorAll(".has_child-mob");
    for (let b = 0; b < needToChange.length; b++) {
        needToChange[b].classList.add("has_child");
        needToChange[b].classList.remove("has_child-mob"); 
    }  
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth < 1200){
        needToChange = document.querySelectorAll(".has_child");
        for (let b = 0; b < needToChange.length; b++) {
            needToChange[b].classList.add("has_child-mob"); 
            needToChange[b].classList.remove("has_child");
        }
    }
    else{
        needToChange = document.querySelectorAll(".has_child-mob");
        for (let b = 0; b < needToChange.length; b++) {
            needToChange[b].classList.add("has_child");
            needToChange[b].classList.remove("has_child-mob"); 
        }  
    }
})




//
//  Text copy
//

let textCopyBlk = document.querySelector(".header_mail");
//let textToCopy = textCopyBlk.querySelector("a").innerHTML;
let textCopyBtn = textCopyBlk.querySelector("span");

textCopyBtn.addEventListener('click',()=>{
    let textToCopy = textCopyBlk.querySelector("a");
    textToCopy.select
    document.execCommand("copy");
    alert("Copied the text: " + textToCopy.value);
});

//
//  Burger
//

let burgerOpen = document.querySelector(".burger");
let burger = document.querySelector(".sidebar_nav");
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    burger.classList.add("active");
});
burgerClose.addEventListener('click',()=>{
    burger.classList.remove("active");
});



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
document.querySelector("main").addEventListener('scroll',scrolling);
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
    for(var i = 0; i < elem.length;i++){
        if(isPartiallyVisible(elem[i])){
            elem[i].classList.add(Class);
        }
        if(duration != undefined){
            elem[i].style.animationDuration = duration;
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

let header = document.querySelector(".header");
let content_line1 = document.querySelectorAll(".content_line1 p");
let content_line2 = document.querySelectorAll(".content_line2 p");

function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}
function query(clas){
    tmp = document.querySelector(clas);
    return tmp;
}

// Movementole.log('working');

function scrolling(e){
    animPartiallyVisible(header,"animate__fadeInRight");
    animPartiallyVisibleALL(content_line1,"animate__backInLeft");
    animPartiallyVisibleALL(content_line2,"animate__backInRight");
    animPartiallyVisibleALL(queryA(".content_line3 p"),"animate__backInLeft")
    animPartiallyVisibleALL(queryA(".content_line4 a"), "animate__flipInX" )
    animPartiallyVisible(query(".footer_col1_logo"), "animate__flipInY", "1.2s")
    animPartiallyVisible(query(".footer_col1_title"), "animate__jackInTheBox", "2s")
    animPartiallyVisible(query(".footer_col1_desc"), "animate__backInLeft", "1.5s")
    animPartiallyVisibleALL(queryA(".footer_col1_payments img"), "animate__backInLeft", "2s" )
    animPartiallyVisible(query(".footer_col2_title"), "animate__fadeInDown", "2s")
    animPartiallyVisibleALL(queryA(".footer_col2_navitem"), "animate__fadeInDown", "2s" )
    animPartiallyVisibleALL(queryA(".footer_col3_galleryItem"), "animate__rotateIn", "2s" )
    animPartiallyVisible(query(".footer_col3_subscribe"), "animate__zoomInRight", "1s")
    animPartiallyVisible(query(".footer_col4_title"), "animate__zoomIn", "1s")
    animPartiallyVisibleALL(queryA(".footer_col4 p"), "animate__lightSpeedInRight", "2s" )
}

function loading(){
    let loading = document.querySelector(".loading");
    opacity = 1;
    let ID = setInterval(() => {
        if (opacity >= 0){  
            opacity-=0.1;
            loading.style.opacity = opacity;
        }
        if(opacity < 0){
            loading.style.display = "none";
            clearInterval(ID)
        }
    }, 30);

    

}

setTimeout(()=>{
    loading();
}, loadingTime);