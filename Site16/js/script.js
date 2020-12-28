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
//  Burger
//


let burgerOpen = document.querySelector(".header_mobile_burger");
let burger = document.querySelector(".header_mobile_nav");
let burgerClose = document.querySelector(".burger_close");

burgerOpen.addEventListener('click',()=>{
    burger.classList.add("header_mobile_nav-active");
});
burgerClose.addEventListener('click',()=>{
    burger.classList.remove("header_mobile_nav-active");
});


let hasChild = document.querySelectorAll(".has-child");
let backBtn = document.querySelectorAll(".childmenu_back");

for (let i = 0; i < hasChild.length; i++) {
    console.log(hasChild[i].querySelector("a"));
    hasChild[i].querySelector("a").addEventListener('click',()=>{
        hasChild[i].classList.add("has-child-active");
    });
}
for (let i = 0; i < backBtn.length; i++) {
    backBtn[i].addEventListener('click',()=>{
        hasChild[i].classList.remove("has-child-active");
    });
}



let childHasChild = document.querySelectorAll(".child-has-child");

for (let i = 0; i < childHasChild.length; i++) {
    
    childHasChild[i].addEventListener('click',()=>{
        for (let b = 0; b < childHasChild.length; b++) {
            if(b != i){
                childHasChild[b].classList.remove("child-has-child-active");
            }
        }
        childHasChild[i].classList.add("child-has-child-active");

        
    });
    
}