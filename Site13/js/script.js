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

console.log(hasChildrenListA);

for (let i = 0; i < hasChildrenListA.length; i++) {
    console.log("as")
    hasChildrenListA[i].addEventListener('click',()=>{
        console.log("as")
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
    console.log("ok")
    burger.classList.add("navigation_buger-menu-active");
});
burgerClose.addEventListener('click',()=>{
    console.log("ok")
    burger.classList.remove("navigation_buger-menu-active");
});
