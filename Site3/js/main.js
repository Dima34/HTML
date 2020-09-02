(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add("header__active")
            header.style.padding = '20px' + " 0 " + " 20px " + " 0"
        }
        else{
            header.classList.remove("header__active")
        }
        if(window.pageYOffset < 50){
            padding_top = 56 - (window.pageYOffset*0.72)
            header.style.padding = padding_top + 'px' + " 0 " + " 20px " + " 0"
        }
    }
}())

(function() {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    const menuCloseItem = document.querySelector(".header__nav-close");
    burgerItem.addEventListener("click", () => {
        menu.classList.add("header__nav_active")
    });
    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header__nav_active")
    })
    
} ())