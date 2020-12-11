function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();

let hasChildrenListA = document.querySelectorAll(".buger-menu_item-has-children .buger-menu_item-has-children_header");
let hasChildrenList = document.querySelectorAll(".buger-menu_item-has-children");

for (let i = 0; i < hasChildrenListA.length; i++) {
    hasChildrenListA[i].addEventListener('click',()=>{
        if(hasChildrenList[i].classList.contains("buger-menu_item-has-children-active")){
            hasChildrenList[i].classList.remove("buger-menu_item-has-children-active");
        }else{
            hasChildrenList[i].classList.add("buger-menu_item-has-children-active");
        }
    });      
}

let burgerOpen = document.querySelector(".navigation_burger");
let burger = document.querySelector(".navigation_buger-menu")
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    burger.classList.add("navigation_buger-menu-active");
    burger.classList.remove("navigation_buger-menu");
});
burgerClose.addEventListener('click',()=>{
    burger.classList.remove("navigation_buger-menu-active");
    burger.classList.add("navigation_buger-menu");
});
