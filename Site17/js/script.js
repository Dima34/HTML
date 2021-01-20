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
    
    console.log(window.outerWidth);

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
            console.log('cha');
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