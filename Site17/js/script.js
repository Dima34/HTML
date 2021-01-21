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
// Programs cards layout
// 

let programsBlk = document.querySelector(".programs");
let blocksInSlide = 2;
if(programsBlk){

    if(window.innerWidth > 900){
        blocksInSlide = 2;
        AddSlidesToPrograms(blocksInSlide);
    }

    if(window.outerWidth <= 900){
        blocksInSlide = 1;
        AddSlidesToPrograms(blocksInSlide);
    }

    window.addEventListener("resize", ()=>{

        if(window.innerWidth > 900){
            blocksInSlide = 2;
            AddSlidesToPrograms(blocksInSlide);
        }
    
        if(window.outerWidth <= 900){
            blocksInSlide = 1;
            AddSlidesToPrograms(blocksInSlide);
        }

    })

    

}

function AddSlidesToPrograms(blocksInSlide){

    let sliderWrapper = programsBlk.querySelector(".swiper-wrapper");
    let block = programsBlk.querySelectorAll(".right_program");

    let slidesMustBe = Math.ceil(block.length / blocksInSlide);

    // Create slides
    for (let i = 0; i < slidesMustBe; i++) {
        
        wrapperBlock = document.createElement("div");
        wrapperBlock.className = "swiper-slide";

        sliderWrapper.append(wrapperBlock);
    }

    let slides = sliderWrapper.querySelectorAll(".swiper-slide");

    let slideNumber = 0;
    for (let i = 0; i < block.length; i++) {

        if(blocksInSlide > 1){

            if(i != 0 && i%slidesMustBe == 0){
                slideNumber ++;
            }

            slides[slideNumber].append(block[i]);
        }

        else{
            slideNumber ++; 
            
            slides[slideNumber-1].append(block[i]);
            
        }
        
    }

}

// 
// Burger
// 

let burgerOpen = document.querySelector(".burger");
let burger = document.querySelector(".header_nav");
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    
    burger.classList.add("header_nav-active");
});

burgerClose.addEventListener('click',()=>{
    burger.classList.remove("header_nav-active");
});

// 
// Pop ups
// 

// Authorization

let AuthorizePopupOpen = document.querySelector(".login_log-in");
let AuthorizePopupOpen1 = document.querySelectorAll(".enter-acc");
let AutorizePopup = document.querySelector(".authorize__popup");


let RegPopupOpen = document.querySelector(".login_register");
let RegPopupOpen1 = document.querySelectorAll(".create-acc");
let RegPopup = document.querySelector(".reg__popup");

let RemindPopupOpen = document.querySelectorAll(".remind-link");
let RemindPopup = document.querySelector(".remind__popup");

let RecoveryPopupOpen = document.querySelectorAll(".link_forgot-pass");
let RecoveryPopup = document.querySelector(".remind__popup");


let AllPopups = document.querySelectorAll(".popup")
let popupClose = document.querySelectorAll(".pp_close");

if(popupClose){

    AuthorizePopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        AutorizePopup.classList.add("popup-active");
        checkHeight(AutorizePopup);
    });

    for (let i = 0; i < AuthorizePopupOpen1.length; i++) {
        
        AuthorizePopupOpen1[i].addEventListener('click',()=>{
            closeAllPopups();
            AutorizePopup.classList.add("popup-active");
            checkHeight(AutorizePopup);
        });
        
    }

    for (let i = 0; i < RegPopupOpen1.length; i++) {
        
        RegPopupOpen1[i].addEventListener('click',()=>{
            closeAllPopups();
            RegPopup.classList.add("popup-active");
            checkHeight(RegPopup);
        });
        
    }

    for (let i = 0; i < RecoveryPopupOpen.length; i++) {
        
        RecoveryPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            RecoveryPopup.classList.add("popup-active");
            checkHeight(RecoveryPopup);
        });
        
    }

    for (let i = 0; i < RemindPopupOpen.length; i++) {
        
        RemindPopupOpen[i].addEventListener('click',()=>{
            closeAllPopups();
            RemindPopup.classList.add("popup-active");
            checkHeight(RemindPopup);
        });
        
    }
    

    RegPopupOpen.addEventListener('click',()=>{
        closeAllPopups();
        RegPopup.classList.add("popup-active");
        checkHeight(RegPopup);
    });



    function closeAllPopups(){
        popupClose = document.querySelectorAll(".pp_close");
        
        for (let i = 0; i < popupClose.length; i++) {
            
            AllPopups[i].classList.remove("popup-active");
            
        }
    }

    function checkHeight(el){

        insideBlock = el.querySelector(".popup_popup_blk");

        if(insideBlock){
            elHeight = Number(window.getComputedStyle(insideBlock).height.slice(0,-2));

            if(elHeight >window.innerHeight){
                
                el.style.alignItems = "flex-start";
                el.style.overflowY = "scroll";

            }
            

        }
    }

    for (let i = 0; i < popupClose.length; i++) {
            
        popupClose[i].addEventListener('click',()=>{
            AllPopups[i].classList.remove("popup-active");
        });
        
    }

}


// Header page selection

let forBText = document.querySelector(".for-b");
let forEText = document.querySelector(".for-e");

let SelectionSlider = document.querySelector(".selection_slider");

let loginE = document.querySelector(".login-e");
let loginB = document.querySelector(".login-b");

if (loginE){

    forEText.classList.add("text_selected");

    forBText.onmouseover = ()=>{
        forEText.classList.remove("text_selected");
        SelectionSlider.classList.add("slider-active");
    }
    forBText.onmouseout = ()=>{
        forEText.classList.add("text_selected");
        SelectionSlider.classList.remove("slider-active");
    }

}

if (loginB){

    forBText.classList.add("text_selected");
    SelectionSlider.classList.add("slider-active");

    forEText.onmouseover = ()=>{
        forBText.classList.remove("text_selected");
        SelectionSlider.classList.remove("slider-active");
    }
    forEText.onmouseout = ()=>{
        forBText.classList.add("text_selected");
        SelectionSlider.classList.add("slider-active");
    }

}


