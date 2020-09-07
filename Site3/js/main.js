(function () {
    const header = document.querySelector(".header");
    const header__nav_close = document.querySelector(".header__nav-close");
    const header__nav_list = document.querySelector(".header__list");
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add("header__active");
            header.style.padding = '20px' + " 0 " + " 20px " + " 0";
            header__nav_close.style.top = "20px";
        }
        else{
            header.classList.remove("header__active");
        }
        if(window.pageYOffset < 50){
            padding_top = 56 - (window.pageYOffset*0.72);
            header.style.padding = padding_top + 'px' + " 0 " + " 20px " + " 0";
            header__nav_close.style.top = padding_top + "px";
            header__nav_list.style.margin = padding_top + 'px' + " 0 " + " 0 " + " 0";
        }
    }
}());

(function() {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    const menuCloseItem = document.querySelector(".header__nav-close");
    burgerItem.addEventListener("click", () => {
        menu.classList.add("header__nav_active");
        document.body.style.overflow = "hidden";
    });
    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
        document.body.style.overflow = "";
    });
    
} ());

(function(){
    const topPlaces__card_imageBlock = document.querySelector(".top__card-thumb")
    const topPlaces__card_desc = document.querySelectorAll(".top__card-desc")
    const topPlaces__card_more = document.querySelectorAll(".top__card-more")
    
    window_width = document.documentElement.clientWidth;
    topPlaces__card_imageBlock_width = getComputedStyle(topPlaces__card_imageBlock).width;
    console.log("Start width = ", topPlaces__card_imageBlock_width);
    
    window.addEventListener("resize", () => {
        window_width = document.documentElement.clientWidth;
        if(window_width <=579){
            /*topPlaces__card_imageBlock_width = getComputedStyle(topPlaces__card_imageBlock).width;*/
            topPlaces__card_imageBlock_width = topPlaces__card_imageBlock.clientWidth;
            console.log("Description width = ", topPlaces__card_desc[1].style.width)
        }
    });
 } ());

