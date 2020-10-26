(function(){
    let slider_blk = document.querySelectorAll(".feedback__slider-block");
    let blk_width = Number(window.getComputedStyle(slider_blk[0]).width.substr(0,window.getComputedStyle(slider_blk[0]).width.length-2)) + Number(window.getComputedStyle(slider_blk[0]).marginRight.substr(0,window.getComputedStyle(slider_blk[0]).marginRight.length-2));
    let slider__line_width = blk_width * slider_blk.length;
    
    let next_btn = document.querySelector(".feedback__slider-btn-right");
    let prev_btn = document.querySelector(".feedback__slider-btn-left");
    let slider_line = document.querySelector(".slider__line");
    let curr_translate = 0;

    window.addEventListener("resize", () => {
        slider_blk = document.querySelectorAll(".feedback__slider-block");
        blk_width = Number(window.getComputedStyle(slider_blk[0]).width.substr(0,window.getComputedStyle(slider_blk[0]).width.length-2)) + Number(window.getComputedStyle(slider_blk[0]).marginRight.substr(0,window.getComputedStyle(slider_blk[0]).marginRight.length-2));
        slider__line_width = blk_width * slider_blk.length;
        console.log(blk_width);
        slider_line.style.transform = "translateX(0px)";
    })

    next_btn.addEventListener("click", () => {
        
        if(curr_translate - blk_width >= -slider__line_width+Number(window.getComputedStyle(slider_line).width.substr(0,window.getComputedStyle(slider_line).width.length-2))){
            curr_translate-=blk_width;
            console.log("curr "+curr_translate)
            console.log("slider width "+-slider__line_width)
            slider_line.style.transform = "translateX(" + curr_translate + "px)";
        }
        
    })
    prev_btn.addEventListener("click", () => {
        
        if(-curr_translate >0){
            curr_translate+=blk_width;
            slider_line.style.transform = "translateX(" + curr_translate + "px)";
        }
        
    })
}())


