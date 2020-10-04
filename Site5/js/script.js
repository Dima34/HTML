(function(){
    let serv_price_blocks = document.querySelectorAll(".serv-price-block-desktop")
    let serv_price_blocks_mobile = document.querySelectorAll(".serv-price-block-mobile")
    let qa_blocks = document.querySelectorAll(".qa-block")
    let serv_header = document.querySelectorAll(".serv_header-desktop")
    let serv_header_mobile = document.querySelectorAll(".serv_header-mobile")
    let qa_header = document.querySelectorAll(".qa-block_header")

    if(window.outerWidth<=550){
        serv_price_blocks=serv_price_blocks_mobile
        serv_header=serv_header_mobile
        console.log("Changed")
    }
    
    window.addEventListener("resize", ()=>{
        if(window.outerWidth>=550){
            serv_header = document.querySelectorAll(".serv_header-desktop")
            serv_price_blocks = document.querySelectorAll(".serv-price-block-desktop")
        }
        else{
            serv_price_blocks=serv_price_blocks_mobile
            serv_header=serv_header_mobile
        }
        for(let i = 0; i < serv_header.length; i++){
            serv_header[i].addEventListener("click",() => {
                classlist = Object.values(serv_price_blocks[i].classList)
                if(classlist.indexOf("serv-price-block-active") != -1){
                    serv_price_blocks[i].classList.remove("serv-price-block-active");
                }
                else{
                    serv_price_blocks[i].classList.add("serv-price-block-active");
                }
            })
        }
    })
    
    

    for(let i = 0; i < serv_header.length; i++){
        serv_header[i].addEventListener("click",() => {
            classlist = Object.values(serv_price_blocks[i].classList)
            if(classlist.indexOf("serv-price-block-active") != -1){
                serv_price_blocks[i].classList.remove("serv-price-block-active");
            }
            else{
                serv_price_blocks[i].classList.add("serv-price-block-active");
            }
        })
    }
    for(let i = 0; i < qa_header.length; i++){
        qa_header[i].addEventListener("click",() => {
            classlist = Object.values(qa_blocks[i].classList)
            if(classlist.indexOf("qa-block-active") != -1){
                qa_blocks[i].classList.remove("qa-block-active");
            }
            else{
                qa_blocks[i].classList.add("qa-block-active");
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