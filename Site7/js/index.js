
(function(){
    // Burger menu
    let burger = document.querySelector(".header-burger");
    let main_menu = document.querySelector(".header-menu");
    let main_menu_close = document.querySelector(".header_menu-close-btn");
    let main_menu_subpages = document.querySelectorAll(".items_sub-menu");
    let main_menu_subpages_links = document.querySelectorAll(".main-menu_first-list .main-menu_list-item");
    let main_menu_subpages_btn_back = document.querySelectorAll(".sub-menu_header-link");

    
    
    burger.addEventListener("click", () => {
        main_menu.classList.add("x_active")
    })
    main_menu_close.addEventListener("click", () => {
        main_menu.classList.remove("x_active");
        for(let b = 0; b < main_menu_subpages_links.length; b++){
            main_menu_subpages[b].classList.remove("x_active");
        }
    })

    for(let i = 0; i < main_menu_subpages_btn_back.length; i++){
        main_menu_subpages_btn_back[i].addEventListener("click",() => {
            for(let b = 0; b < main_menu_subpages_links.length; b++){
                main_menu_subpages[b].classList.remove("x_active");
            }
        })
    }

    for(let i = 0; i < main_menu_subpages_links.length; i++){
        main_menu_subpages_links[i].addEventListener("click",() => {
            classlist = Object.values(main_menu_subpages[i].classList)
            main_menu_subpages[i].classList.add("x_active");
            for(let b = 0; b < main_menu_subpages_links.length; b++){
                if(b != i){
                    main_menu_subpages[b].classList.remove("x_active");
                } 
            }
        })
    }

    // Main slider menu
    let slider_items = document.querySelectorAll(".main-menu_nav-item");
    let slider_blocks = document.querySelectorAll(".nav-block");
    let default_slide = 0;
  
    slider_blocks[default_slide].classList.add("x_active");
    slider_items[default_slide].classList.add("nav-item-active");
    slider_blocks[default_slide].classList.add("size_fix");
  
    for(let i = 0; i < slider_items.length; i++){
        slider_items[i].addEventListener("click",() => {
            classlist = Object.values(slider_blocks[i].classList)
            slider_blocks[i].classList.add("x_active");
            slider_items[i].classList.add("nav-item-active");
            slider_blocks[i].classList.add("size_fix");
            for(let b = 0; b < slider_items.length; b++){
                if(b != i){
                    slider_blocks[b].classList.remove("x_active");
                    slider_items[b].classList.remove("nav-item-active");
                    slider_blocks[b].classList.remove("size_fix");
                } 
            }
        })
    }


    // Main bottom menu
    let bottom_menu_popup = document.querySelector(".bottom-menu_contact-pop-up")
    let bottom_menu_connect = document.querySelector(".bottom-menu_contact");

    bottom_menu_connect.addEventListener("click", () => {
        bottom_menu_popup_classList = Object.values(bottom_menu_popup.classList);
        if(bottom_menu_popup_classList.indexOf("y_active") >= 0){
            bottom_menu_popup.classList.remove("y_active");
            bottom_menu_connect.classList.remove("bottom-menu_list-item-active");
        }
        else{
            bottom_menu_popup.classList.add("y_active");
            bottom_menu_connect.classList.add("bottom-menu_list-item-active");
        }
    })

    
}())