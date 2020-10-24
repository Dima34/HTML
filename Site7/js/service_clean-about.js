(function(){
    let menu_items = document.querySelectorAll(".main-menu_list-item");
    let menu_block = document.querySelectorAll(".service-about_intro__sub-page");
    let back_btn = document.querySelectorAll(".sub-page_header_back-btn");
    
    for(let i = 0; i < menu_items.length; i++){
        menu_items[i].addEventListener("click", ()=>{
            menu_block[i].classList.add("x_active");
        });
        back_btn[i].addEventListener("click", ()=>{
            menu_block[i].classList.remove("x_active");
        });
    }

    // Dropdown menu
    let dropdown_header = document.querySelectorAll(".dropdown_header");
    let dropdown_main = document.querySelectorAll(".dropdown_main");
    let dropdown_main_height = [];

    for(let i = 0; i < dropdown_main.length; i++){
        dropdown_main_height[i] = dropdown_main[i].style.height;
        console.log(dropdown_main_height[i])
    }

}())

