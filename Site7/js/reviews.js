(function(){

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
