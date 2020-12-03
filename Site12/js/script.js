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
//  Sumbenu top
//

let submenu = document.querySelectorAll(".header__nav_item_submenu");
let header = document.querySelector(".header");

function BlocksToBottom(elemList, toElem){
    for(let i = 0; i < elemList.length; i++){
        elemList[i].style.top = window.getComputedStyle(toElem).height;
    }
}

if(submenu != null){
    BlocksToBottom(submenu, header);
    window.addEventListener("resize",()=>{
        BlocksToBottom(submenu, header);
    })
    
    
}

//
//  dropdown
//

let dropdownHeader = document.querySelectorAll(".often-q__dropdown_block_header");
let dropdownMain = document.querySelectorAll(".often-q__dropdown_block_main");

for (let i = 0; i < dropdownHeader.length; i++) {
    dropdownHeader[i].addEventListener('click',()=>{
        if(dropdownHeader[i].classList.contains("often-q__dropdown_block_header-active")){
            dropdownHeader[i].classList.remove("often-q__dropdown_block_header-active");
            dropdownMain[i].classList.remove("often-q__dropdown_block_main-active");
        }else{
            dropdownHeader[i].classList.add("often-q__dropdown_block_header-active");
            dropdownMain[i].classList.add("often-q__dropdown_block_main-active");
        }
    });
}

//
//  popup
//

let popupOpen = document.querySelector(".menu__faq-btn");
let popup = document.querySelector(".menu__popup");
let popupClose = document.querySelector(".popup_btn");

popupOpen.addEventListener('click',()=>{
    popup.classList.add("menu__popup-active");
});
popupClose.addEventListener('click',()=>{
    popup.classList.remove("menu__popup-active");
});


let page1 = document.querySelectorAll(".menu__dish-list_item__popup_popup_blk_main_page1");
let page1Btn = document.querySelectorAll(".menu__dish-list_item__popup_popup_blk_header_next-btn");
let page2Btn = document.querySelectorAll(".menu__dish-list_item__popup_popup_blk_header_prev-btn");

let page2 = document.querySelectorAll(".menu__dish-list_item__popup_popup_blk_main_page2");
let popupsOpen = document.querySelectorAll(".menu__dish-list_item-popup");
let popups = document.querySelectorAll(".menu__dish-list_item__popup");
let popupsClose = document.querySelectorAll(".menu__popup_btn");
let body = document.querySelector(".body");

for (let i = 0; i < popups.length; i++) {
    popupsOpen[i].addEventListener('click',()=>{
        popups[i].classList.add("menu__dish-list_item__popup-active");
        body.style.overflow = "hidden";
        page2Btn[i].style.display = "none";
        page1Btn[i].style.display = "block";
        page1[i].style.display ="block";
        page2[i].style.display = "none";

    });
    popupsClose[i].addEventListener('click',()=>{
        popups[i].classList.remove("menu__dish-list_item__popup-active");
        body.style.overflow = "auto";
        page1[i].style.display ="none";
        page2[i].style.display = "none";
    });  
}

for (let d = 0; d < popups.length; d++) {
    page1Btn[d].addEventListener('click',()=>{
        page1[d].style.display ="none";
        page2[d].style.display = "block";
        page2Btn[d].style.display = "block";
        page1Btn[d].style.display = "none";
    });   
    page2Btn[d].addEventListener('click',()=>{
        page1[d].style.display ="block";
        page2[d].style.display = "none";
        page2Btn[d].style.display = "none";
        page1Btn[d].style.display = "block";
    }); 
}






