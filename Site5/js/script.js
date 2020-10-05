(function(){
    let serv_header = document.querySelectorAll(".serv_header")
    let serv_main = document.querySelectorAll(".serv_main")
    let qa_header = document.querySelectorAll(".qa-block_header")
    let qa_main = document.querySelectorAll(".qa-block_main")
    let serv_header_mobile = document.querySelectorAll(".serv_header-mobile")
    let serv_main_mobile = document.querySelectorAll(".serv_main-mobile")

    for(let i = 0; i < serv_header.length; i++){
        serv_header[i].addEventListener("click",() => {
            classlist = Object.values(serv_main[i].classList)
            if(classlist.indexOf("serv_main-active") != -1){
                serv_main[i].classList.remove("serv_main-active");
                serv_header[i].classList.remove("serv_header-active");
            }
            else{
                serv_main[i].classList.add("serv_main-active");
                serv_header[i].classList.add("serv_header-active");
            }
        })
    }
    for(let i = 0; i < serv_header_mobile.length; i++){
        serv_header_mobile[i].addEventListener("click",() => {
            classlist = Object.values(serv_main_mobile[i].classList)
            if(classlist.indexOf("serv_main-mobile-active") != -1){
                serv_main_mobile[i].classList.remove("serv_main-mobile-active");
                serv_header_mobile[i].classList.remove("serv_header-mobile-active");
            }
            else{
                serv_main_mobile[i].classList.add("serv_main-mobile-active");
                serv_header_mobile[i].classList.add("serv_header-mobile-active");
            }
        })
    }
    for(let i = 0; i < qa_header.length; i++){
        qa_header[i].addEventListener("click",() => {
            classlist = Object.values(qa_main[i].classList)
            if(classlist.indexOf("qa-block_main-active") != -1){
                qa_main[i].classList.remove("qa-block_main-active");
                qa_header[i].classList.remove("qa-block_header-active");
            }
            else{
                qa_main[i].classList.add("qa-block_main-active");
                qa_header[i].classList.add("qa-block_header-active");
            }
        })
    }
    

    let info__nav_items = document.querySelectorAll(".info__nav_item-link");
    let nav_blocks = document.querySelectorAll(".nav__blocks_block");
    let info__nav_items_list = Object.values(info__nav_items);
    let nav_blocks_list = Object.values(nav_blocks);
    let defaultItemActive = 0;

    info__nav_items_list[defaultItemActive].classList.add("info__nav_item-link-active")
    nav_blocks_list[defaultItemActive].classList.add("block-active")

    for(let i = 0; i < info__nav_items_list.length;i++){
        info__nav_items_list[i].addEventListener("click", () => {
            for(let b = 0; b < info__nav_items_list.length; b++){
                if(i != b){
                    info__nav_items_list[b].classList.remove("info__nav_item-link-active")
                    nav_blocks_list[b].classList.remove("block-active")
                }
                else{
                    info__nav_items_list[b].classList.add("info__nav_item-link-active")
                    nav_blocks_list[b].classList.add("block-active")
                }
            }
        })
    }


    // Burger menu
    let burger = document.querySelector(".mobile__nav_burger")
    let burger_close = document.querySelector(".mobile__nav-list_burger-close")
    let nav_list = document.querySelector(".mobile__nav-list")
    
    burger.addEventListener("click", () => {
        nav_list.classList.add("mobile__nav-list-active");
    })
    burger_close.addEventListener("click", () => {
        nav_list.classList.remove("mobile__nav-list-active");
    })
}())