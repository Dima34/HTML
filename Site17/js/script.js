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

    AddSlidesToPrograms(blocksInSlide);

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

        console.log("i = ", i,"; i%slidesMustBe = ", i%slidesMustBe)
        if(i != 0 && i%slidesMustBe == 0){
            slideNumber ++;
        }
        
        slides[slideNumber].append(block[i]);
        
    }

}