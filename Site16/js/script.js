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


//
//  Gallery
//

let mainImage = document.querySelector(".main-img");
let mainImageLink = document.querySelector(".gallery_right_main-img a");
let undermainImages = document.querySelectorAll(".gallery_right_undermain-imgs img");

if(mainImage){

    for (let i = 0; i < undermainImages.length; i++) {
        
        undermainImages[i].addEventListener('click',()=>{
            let icoWay = undermainImages[i].getAttribute("src");
            mainImage.src = icoWay;
            mainImageLink.href = icoWay;
            ibg();
        });
    }
}


//
//  Counters
//

let counter = document.querySelectorAll(".counter_counter");
let plus = document.querySelectorAll(".counter_plus");
let minus = document.querySelectorAll(".counter_minus");

for (let b = 0; b < plus.length; b++) {
    
    plus[b].addEventListener('click',()=>{
        tmp = counter[b].innerHTML;
        if(tmp >= 0){
            tmp ++;
            counter[b].innerHTML = tmp;
        }
    });
}

for (let b = 0; b < minus.length; b++) {
    
    minus[b].addEventListener('click',()=>{
        tmp = counter[b].innerHTML;
        if(tmp > 0){
            tmp --;
            counter[b].innerHTML = tmp;
        }
    });
}


//
//  Cathalog filter dropdown
//

let ddBlock = document.querySelectorAll(".cathalog_sidebar_section");
let ddHeader = document.querySelectorAll(".cathalog_sidebar_section_title");
let ddList = document.querySelectorAll(".cathalog_sidebar_section_itemlist")

for (let i = 0; i < ddHeader.length; i++) {
    
    ddHeader[i].addEventListener('click',()=>{
        if(ddBlock[i].classList.contains("cathalog_sidebar_section-active")){
            ddBlock[i].classList.remove("cathalog_sidebar_section-active")
        }
        else{
            ddBlock[i].classList.add("cathalog_sidebar_section-active")
        }
    });
    
}


//
//  Cathalog filter dropdown
//

let ddBlock1 = document.querySelectorAll(".all-products_popup_dd-blk");
let ddHeader1 = document.querySelectorAll(".all-products_popup_dd-blk_header");
let ddList1 = document.querySelectorAll(".all-products_popup_dd-blk_main")

for (let i = 0; i < ddHeader1.length; i++) {
    
    ddHeader1[i].addEventListener('click',()=>{
        ddBlock1[i].classList.add("all-products_popup_dd-blk-active")

        for (let b = 0; b < ddHeader1.length; b++) {
            if(b != i){
                ddBlock1[b].classList.remove("all-products_popup_dd-blk-active");
            }
        }
        
    });
    
}


let cathalogPPOpen = document.querySelector(".all-products");
let cathalogPP = document.querySelector(".all-products_popup");
let cathalogPPClose = document.querySelector(".all-products_popup_close");

if(cathalogPPOpen){
    cathalogPPOpen.addEventListener('click',()=>{
        cathalogPP.classList.add("all-products_popup-active");
    });
    cathalogPPClose.addEventListener('click',()=>{
        cathalogPP.classList.remove("all-products_popup-active");
    });
}

let filteringPPOpen = document.querySelector(".cathalog_filtering");
let filteringPP = document.querySelector(".cathalog_filtering_pp");
let filteringPPClose = document.querySelector(".filtering_close");

if(filteringPPOpen){
    filteringPPOpen.addEventListener('click',()=>{
        filteringPP.classList.add("cathalog_filtering_pp-active");
    });
    filteringPPClose.addEventListener('click',()=>{
        filteringPP.classList.remove("cathalog_filtering_pp-active");
    });
}




//
//  Call me pp
//

let callmeOpen1 = document.querySelectorAll(".header_mobile_callme");
let callmeOpen2 = document.querySelectorAll(".footer_callme");
let callmeOpen3 = document.querySelectorAll(".desktop_header_callme");
let callme = document.querySelector(".pp__popup");
let callmeClose = document.querySelector(".pp_close");

for (let i = 0; i < callmeOpen1.length; i++) {
    callmeOpen1[i].addEventListener('click',()=>{
        callme.classList.add("pp__popup-active");
    });
    callmeClose.addEventListener('click',()=>{
        callme.classList.remove("pp__popup-active");
    }); 
}

for (let i = 0; i < callmeOpen2.length; i++) {
    callmeOpen2[i].addEventListener('click',()=>{
        callme.classList.add("pp__popup-active");
    });
    callmeClose.addEventListener('click',()=>{
        callme.classList.remove("pp__popup-active");
    }); 
}

for (let i = 0; i < callmeOpen3.length; i++) {
    callmeOpen3[i].addEventListener('click',()=>{
        callme.classList.add("pp__popup-active");
    });
    callmeClose.addEventListener('click',()=>{
        callme.classList.remove("pp__popup-active");
    }); 
}


//
//  Preorder pp
//

let preOrderOpen = document.querySelector(".none");
let preOrder = document.querySelector(".pre-order__popup");
let preOrderClose = document.querySelector(".pre-order_close");

if(preOrderOpen){
    preOrderOpen.addEventListener('click',()=>{
        preOrder.classList.add("pre-order__popup-active");
    });
    preOrderClose.addEventListener('click',()=>{
        preOrder.classList.remove("pre-order__popup-active");
    });
}



