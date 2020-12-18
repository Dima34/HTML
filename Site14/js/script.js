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

let burgerOpen = document.querySelector(".burger");
let burger = document.querySelector(".header__nav");
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    burger.classList.add("active");
});
burgerClose.addEventListener('click',()=>{
    burger.classList.remove("active");
});

let header = document.querySelector("header");

window.onscroll = () => {
    if(window.pageYOffset > 10){
        header.classList.add("header-active");
    }
    else{
        header.classList.remove("header-active");
    }
}


//
//  DropDown
//

let dropdownHeader = document.querySelectorAll(".faq__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".faq__dropdown_block_main");

if(dropdownHeader){
    for (let i = 0; i < dropdownHeader.length; i++) {
        dropdownHeader[i].addEventListener('click',()=>{
            if(dropdownHeader[i].classList.contains("faq__dropdown_block_header-active")){
                dropdownHeader[i].classList.remove("faq__dropdown_block_header-active");
                dropdownMain[i].classList.remove("faq__dropdown_block_main-active");
            }else{
                dropdownHeader[i].classList.add("faq__dropdown_block_header-active");
                dropdownMain[i].classList.add("faq__dropdown_block_main-active");
                for (let b = 0; b < dropdownHeader.length; b++) {
                    if(b != i){
                        dropdownHeader[b].classList.remove("faq__dropdown_block_header-active");
                        dropdownMain[b].classList.remove("faq__dropdown_block_main-active"); 
                    }
                }
            }
        });
    }
    
    for (let b = 1; b < dropdownHeader.length; b+=6) {
        dropdownHeader[b].style.background="#FEDCC9";
    }
    for (let b = 2; b < dropdownHeader.length; b+=6) {
        dropdownHeader[b].style.background="#EBD0C1";
    }
    for (let b = 3; b < dropdownHeader.length; b+=6) {
        dropdownHeader[b].style.background="#F3D4CB";
    }
    for (let b = 4; b < dropdownHeader.length; b+=6) {
        dropdownHeader[b].style.background="#E9C6BA";
    }
    for (let b = 5; b < dropdownHeader.length; b+=6) {
        dropdownHeader[b].style.background="#E5C4B1";
    }
}

//
//  DropDown
//

let popupOpen = document.querySelector(".r-reviews-btn");
let popup = document.querySelector(".r-rewiews__popup");
let popupClose = document.querySelector(".r-rewiews__popup_btn");

if(popupOpen){

    popupOpen.addEventListener('click',()=>{
        if(window.innerWidth > 650){
            popup.classList.add("r-rewiews__popup-active");
        }
    });
    popupClose.addEventListener('click',()=>{
        if(window.innerWidth > 650){
            popup.classList.remove("r-rewiews__popup-active");
        }
        
    });

}


