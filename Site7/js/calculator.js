(function(){
    let page_number = 0;
    let next_btn = document.querySelectorAll(".next-btn");
    let prev_btn = document.querySelectorAll(".prev-btn");
    let page = document.querySelectorAll(".calc_main__page");
    let bottom_nav = document.querySelectorAll(".bottom-nav");

    let header_btn = document.querySelectorAll(".calc_header__btn");
    let header_title = document.querySelectorAll(".main_title");
    let header_stage = document.querySelectorAll(".main_stage");
    let calc_header = document.querySelector(".calc_header");

    console.log(header_stage)

    function pageCheck(p_num){
        for(let i = 0; i < page.length; i++){
            if(i == p_num){
                page[i].classList.remove("page_non-active");
            }
            else{
                page[i].classList.add("page_non-active");
            }
        }
    }
    function bottomCheck(p_num){
        if(p_num == 0 || p_num == 1){
            b_num = 0;
        } else if(p_num == 2){
            b_num = 1;
        } else if(p_num > 2 && p_num <=5){
            b_num = 2;
        } else if(p_num > 5){
            b_num = 3;
        }
        console.log(p_num)
        for(let i = 0; i < bottom_nav.length; i++){
            if(i == b_num){
                bottom_nav[i].classList.add("bottom-active");
            }
            else{
                bottom_nav[i].classList.remove("bottom-active");
            }
        }
    }
    function headerCheck(p_num){
        if(p_num == 0){
            btn_num = 0;
            t_num = 0;
            s_num = 0;
        } else if(p_num == 1){
            btn_num = 1;
            t_num = 1;
            s_num = 1;
        } else if(p_num == 2){
            btn_num = 1;
            t_num = 2;
            s_num = 2;
        } else if(p_num == 3){
            btn_num = 1;
            t_num = 3;
            s_num = 0;
        }
        else if(p_num == 4){
            btn_num = 1;
            t_num = 3;
            s_num = 1;
        }
        else if(p_num == 5){
            btn_num = 3;
            t_num = 4;
            s_num = 2;
        }
        if(p_num == 6){
            calc_header.style.display="none";
        }
        for(let i = 0; i < header_btn.length; i++){
            if(i == btn_num){
                header_btn[i].classList.add("header-active");
            }
            else{
                header_btn[i].classList.remove("header-active");
            }
        }
        for(let i = 0; i < header_title.length; i++){
            if(i == t_num){
                header_title[i].classList.add("header-active");
            }
            else{
                header_title[i].classList.remove("header-active");
            }
        }
        for(let i = 0; i < header_stage.length; i++){
            if(i == s_num){
                header_stage[i].classList.add("header-active");
            }
            else{
                header_stage[i].classList.remove("header-active");
            }
        }
    }

    pageCheck(page_number);
    bottomCheck(page_number);
    headerCheck(page_number);

    for(let i = 0; i < next_btn.length; i++){
        next_btn[i].addEventListener("click", () => {
            if(page_number < page.length-1){
                page_number++;
                pageCheck(page_number);
                bottomCheck(page_number);
                headerCheck(page_number);
            }
        })
    }
    for(let i = 0; i < prev_btn.length; i++){
        prev_btn[i].addEventListener("click", () => {
            if(page_number > 0){
                page_number--;
                pageCheck(page_number);
                bottomCheck(page_number);
                headerCheck(page_number);
            }
        })
    }

    //page1 block selector

    let slider_items = document.querySelectorAll(".page1_slider2 .main-menu_nav-item");
    let slider_blocks = document.querySelectorAll(".page1_slider2_blk");
    let default_slide = 0;
  
    slider_blocks[default_slide].classList.add("visible");
    slider_items[default_slide].classList.add("nav-item-active");
  
    for(let i = 0; i < slider_items.length; i++){
        slider_items[i].addEventListener("click",() => {
            classlist = Object.values(slider_blocks[i].classList)
            slider_blocks[i].classList.add("visible");
            slider_items[i].classList.add("nav-item-active");
            for(let b = 0; b < slider_items.length; b++){
                if(b != i){
                    slider_blocks[b].classList.remove("visible");
                    slider_items[b].classList.remove("nav-item-active");
                } 
            }
        })
    }

    // Date choose

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;
    let curr_translate1 = 0;
    let curr_translate2 = 0;

    let carousel_blk = document.querySelectorAll(".input_carousel label");
    let blk_width = Number(window.getComputedStyle(carousel_blk[0]).width.substr(0,window.getComputedStyle(carousel_blk[0]).width.length-2)) + Number(window.getComputedStyle(carousel_blk[0]).marginRight.substr(0,window.getComputedStyle(carousel_blk[0]).marginRight.length-2));
    
    let line1 = document.getElementById("carousel1_line");
    let line1_blk = line1.querySelectorAll(".input_carousel input");
    let line1_active = 2-1;

    let line2 = document.getElementById("carousel2_line");
    let line2_blk = line2.querySelectorAll(".input_carousel input");
    let line2_active = 3-1;

    function setActive(line_blks, line_active){
        line_blks[line_active].checked = true;
        line_blks[line_active].checked = "checked";
    }
    
    setActive(line1_blk, line1_active);
    setActive(line2_blk, line2_active);
    
    function lineSwipeLeft(line){
        curr_translate1-=blk_width;
        line.style.transform = "translateX(" + curr_translate1 + "px)";
    }
    function lineSwipeRight(line){
        curr_translate1+=blk_width;
        line.style.transform = "translateX(" + curr_translate1 + "px)";
    }
    function lineSwipeLeft2(line){
        curr_translate2-=blk_width;
        line.style.transform = "translateX(" + curr_translate2 + "px)";
    }
    function lineSwipeRight2(line){
        curr_translate2+=blk_width;
        line.style.transform = "translateX(" + curr_translate2 + "px)";
    }

    //First line
    const gestureZone = document.getElementById('carousel1');

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGestureFirst();
    }, false); 

    function handleGestureFirst() {
        if (touchendX < touchstartX) {
            if(line1_active < line1_blk.length-1){
                lineSwipeLeft(line1);
                line1_active++;
                setActive(line1_blk, line1_active);
            }
            
        }
        if (touchendX > touchstartX) {
            if(line1_active > 0){
                lineSwipeRight(line1);
                line1_active--;
                setActive(line1_blk, line1_active);
            }
        }
        
    }
    //Second line
    const gestureZone1 = document.getElementById('carousel2');

    gestureZone1.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone1.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGestureSecond();
    }, false); 

    function handleGestureSecond() {
        if (touchendX < touchstartX) {
            if(line2_active < line2_blk.length-1){
                lineSwipeLeft2(line2);
                line2_active++;
                setActive(line2_blk, line2_active);
            }
            
        }
        if (touchendX > touchstartX) {
            if(line2_active > 0){
                lineSwipeRight2(line2);
                line2_active--;
                setActive(line2_blk, line2_active);
            }
        }
        
        
    }

    
}())

