(function(){
    let page_number = 0;
    let next_btn = document.querySelectorAll(".next-btn");
    let prev_btn = document.querySelectorAll(".prev-btn");
    let page = document.querySelectorAll(".calc_main__page");
    let bottom_nav = document.querySelectorAll(".bottom-nav");
    let header_btn = document.querySelectorAll(".calc_header__close-btn");
    let header_title = document.querySelectorAll(".main_title");
    let header_stage = document.querySelectorAll(".main_stage");

    function pageCheck(p_num){
        for(let i = 0; i < page.length; i++){
            if(i == p_num){
                page[i].classList.add("page_active");
            }
            else{
                page[i].classList.remove("page_active");
            }
        }
    }
    function bottomCheck(p_num){
        
        console.log(p_num, "pnum");
        if(p_num == 0 || p_num == 1){
            b_num = 0;
        } else if(p_num == 2){
            b_num = 1;
        } else if(p_num > 2){
            b_num = 2;
        }
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
            console.log("ok")
            btn_num = 1;
            t_num = 1;
            s_num = 1;
        } else if(p_num == 2){
            btn_num = 1;
            t_num = 2;
            s_num = 2;
        } else if(p_num == 3){
            btn_num = 3;
            t_num = 3;
            s_num = 0;
        }
        else if(p_num == 4){
            btn_num = 3;
            t_num = 3;
            s_num = 1;
        }
        else if(p_num == 5){
            btn_num = 3;
            t_num = 4;
            s_num = 2;
        }
        for(let i = 0; i < header_btn.length; i++){
            if(i == b_num){
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
                console.log(page_number)
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
                console.log(page_number)
                pageCheck(page_number);
                bottomCheck(page_number);
                headerCheck(page_number);
            }
        })
    }
}())

