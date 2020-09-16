(function () {
    const header = document.querySelector(".header");
    const header__nav_close = document.querySelector(".header__nav-close");
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
        }
    }
}());

(function() {
    const alertAcceptBtn = document.querySelector(".alert__accept-btn");
    const alert = document.querySelector(".alert");
    
    alertAcceptBtn.addEventListener("click", () =>{
        alert.style.display = "none";
    })
})
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


window.onload = function(){
    
    
    const topPlaces__card_imageBlock = document.querySelector(".top__card-pic")
    const topPlaces__card_desc = document.querySelectorAll(".top__card-desc")
    const topPlaces__card_more = document.querySelectorAll(".top__card-more")
    
    window_width = document.documentElement.clientWidth;
    topPlaces__card_imageBlock_width = topPlaces__card_imageBlock.clientWidth;
    topPlaces__card_imageBlock_marginLeft = getComputedStyle(topPlaces__card_imageBlock).marginLeft;

    const amountOfCards = topPlaces__card_desc.length
    window_width = document.documentElement.clientWidth;
    if(window_width <=579){
        for(var i = 0; i < amountOfCards; i++){
            topPlaces__card_desc[i].style.width = topPlaces__card_imageBlock.clientWidth + "px";
            topPlaces__card_more[i].style.margin = "15px 0 0 " + topPlaces__card_imageBlock_marginLeft;
            
        }
    }
    
    
    window.addEventListener("resize", () => {
        window_width = document.documentElement.clientWidth;
        if(window_width <=579){
            topPlaces__card_imageBlock_width = topPlaces__card_imageBlock.clientWidth;
            topPlaces__card_imageBlock_marginLeft = getComputedStyle(topPlaces__card_imageBlock).marginLeft;
            for(var i = 0; i < amountOfCards; i++){
                topPlaces__card_desc[i].style.width = topPlaces__card_imageBlock.clientWidth + "px";
                topPlaces__card_more[i].style.margin = "15px 0 0 " + topPlaces__card_imageBlock_marginLeft;
            };
        }
        else{
            for(var i = 0; i < amountOfCards; i++){
                topPlaces__card_desc[i].style.width = "100%";
                topPlaces__card_more[i].style.margin = "0";
            };
            
        }

    });
};

window.onload = function(){
    const defaultLanguage = "ru"
    const langEn_button = document.querySelector(".header__lang-en");
    const langRu_button = document.querySelector(".header__lang-ru");
    const langRu_elements = document.querySelectorAll(".lang-ru");
    const langEn_elements = document.querySelectorAll(".lang-en");
    const langElements_count = langEn_elements.length;

    if(defaultLanguage == "ru"){
        for(var i = 0; i < langElements_count; i++){
            langEn_elements[i].style.display = "none";
            langRu_elements[i].style.display = "inline-block";
        }
    }
    else if(defaultLanguage == "en"){
        for(var i = 0; i < langElements_count; i++){
            langEn_elements[i].style.display = "inline-block";
            langRu_elements[i].style.display = "none";
        }
    }
    langEn_button.addEventListener("click", () => {
        for(var i = 0; i < langElements_count; i++){
            langEn_elements[i].style.display = "inline-block";
            langRu_elements[i].style.display = "none";
        }
    });
    langRu_button.addEventListener("click", () => {
        for(var i = 0; i < langElements_count; i++){
            langEn_elements[i].style.display = "none";
            langRu_elements[i].style.display = "inline-block";
        }
    });
    
} ()

// Animation
document.addEventListener("DOMContentLoaded", scrolling);
document.addEventListener("scroll",scrolling);

function isPartiallyVisible(el){
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top - 71;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// Elements
function animPartiallyVisible(elem,Class){
    if(isPartiallyVisible(elem)){
        elem.classList.add(Class);
    } else{
        elem.classList.remove(Class);
    }
}
function animPartiallyVisibleALL(elem,Class,arrLen){
    for(var i = 0; i < arrLen;i++){
        if(isPartiallyVisible(elem[i])){
            elem[i].classList.add(Class);
        } else{
            elem[i].classList.remove(Class);
        }
    }
    
}

var introTitle = document.querySelector(".intro__title")
var introSubtitle = document.querySelector(".intro__subtitle");
var introSearchForm = document.querySelector(".search-form__intro");
var benefitsTitle = document.querySelectorAll(".benefits__title span")
var benefitsCardThumb = document.querySelectorAll(".benefits__card-thumb")
var benefitsCardText = document.querySelectorAll(".benefits__card-title, .benefits__card-desc, .benefits__card-more")
var sectionTitle = document.querySelectorAll(".section-title")
var sectionTitleAfter = document.querySelectorAll(".section-title:after")
var placesCard = document.querySelectorAll(".places__card")


// Movement
function scrolling(){
    animPartiallyVisible(introTitle,"intro__title-anim")
    animPartiallyVisible(introSubtitle,"intro__subtitle-anim")
    animPartiallyVisible(introSearchForm,"serch-form-anim")
    animPartiallyVisibleALL(benefitsTitle, "benefits__title-anim",benefitsTitle.length)
    animPartiallyVisibleALL(benefitsCardThumb, "benefits__card-thumb-anim", benefitsCardThumb.length)
    animPartiallyVisibleALL(benefitsCardText, "benefits__card-text-anim", benefitsCardText.length)
    animPartiallyVisibleALL(sectionTitle, "section-title-anim", sectionTitle.length)
    animPartiallyVisibleALL(sectionTitleAfter, ".section-title-anim:after", sectionTitleAfter.length)
    animPartiallyVisibleALL(placesCard, "places__card-anim", placesCard.length)
}
    


