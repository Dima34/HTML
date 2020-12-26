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
    
    // top__card_desc resize
    const topPlaces__card_imageBlock = document.querySelector(".top__card-pic")
    const topPlaces__card_desc = document.querySelectorAll(".top__card-desc")
    const topPlaces__card_more = document.querySelectorAll(".top__card-more")
    var window_width = window.innerWidth;
    const amountOfCards = topPlaces__card_desc.length

    if(window_width <=579){
        var topPlaces__card_imageBlock_width = topPlaces__card_imageBlock.clientWidth;
        var topPlaces__card_imageBlock_marginLeft = getComputedStyle(topPlaces__card_imageBlock).marginLeft;
        
        console.log(topPlaces__card_imageBlock_width);
        for(let i = 0; i < amountOfCards; i++){
            topPlaces__card_desc[i].style.width = topPlaces__card_imageBlock_width + "px";
            topPlaces__card_more[i].style.margin = "15px 0 0 " + topPlaces__card_imageBlock_marginLeft;
            topPlaces__card_more[i].style.width = topPlaces__card_imageBlock_width + "px";
        };
    }
    
    
    window.addEventListener("resize", () => {
        window_width = window.innerWidth;
        if(window_width <=579){
            topPlaces__card_imageBlock_width = topPlaces__card_imageBlock.clientWidth;
            topPlaces__card_imageBlock_marginLeft = getComputedStyle(topPlaces__card_imageBlock).marginLeft;
            for(var i = 0; i < amountOfCards; i++){
                topPlaces__card_desc[i].style.width = topPlaces__card_imageBlock_width + "px";
                topPlaces__card_more[i].style.margin = "15px 0 0 " + topPlaces__card_imageBlock_marginLeft;
                topPlaces__card_more[i].style.width = topPlaces__card_imageBlock_width + "px";
            };
        }
        else{
            for(var i = 0; i < amountOfCards; i++){
                topPlaces__card_desc[i].style.width = "100%";
                topPlaces__card_more[i].style.margin = "0";
                topPlaces__card_more[i].style.width = "auto";
            };
            
        }

    });

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
    function animPartiallyVisibleALL(elem,Class){
        for(var i = 0; i < elem.length;i++){
            if(isPartiallyVisible(elem[i])){
                elem[i].classList.add(Class);
            } else{
                elem[i].classList.remove(Class);
            }
        }
        
    }
    function animPartiallyVisibleReadress(elem,toElem,Class){
        if(isPartiallyVisible(elem)){
            toElem.classList.add(Class);
        } else{
            toElem.classList.remove(Class);
        }
    }
    function animPartiallyVisibleRaALL(elem,toElem,Class,arrLen){
        for(var i = 0; i < arrLen;i++){
            if(isPartiallyVisible(elem[i])){
                toElem[i].classList.add(Class);
            } else{
                toElem[i].classList.remove(Class);
            }
        }
        
    }
    function animPartiallyVisibleRaChildALL(elem,toElem,Class){
        for(var i = 0; i < toElem.length;i++){
            if(isPartiallyVisible(elem)){
                toElem[i].classList.add(Class);
            } else{
                toElem[i].classList.remove(Class);
            }
        }
        
    }
    function animPartiallyVisibleRaChild(elem,toElem,Class){
        if(isPartiallyVisible(elem)){
            toElem.classList.add(Class);
        } else{
            toElem.classList.remove(Class);
        }
    }

    let introTitle = document.querySelector(".intro__title")
    let introSubtitle = document.querySelector(".intro__subtitle");
    let introSearchForm_wrap = document.querySelector(".search-form__wrap");
    let introSearchForm = introSearchForm_wrap.querySelector(".search-form__intro")
    let benefitsTitle = document.querySelector(".benefits__title");
    let benefitsTitle_span = document.querySelectorAll(".benefits__title span")
    let benefitsCardThumb = document.querySelectorAll(".benefits__card-thumb")
    let benefitsCardTitle = document.querySelectorAll(".benefits__card-title")
    let benefitsCardDesc = document.querySelectorAll(".benefits__card-desc")
    let benefitsCardMore = document.querySelectorAll(".benefits__card-more")
    let placesTitle = document.querySelector(".places__title")
    let sectionTitle = document.querySelectorAll(".section-title")
    let placesTitle_span = document.querySelectorAll(".places__title span")
    let placesCard = document.querySelectorAll(".places__card")
    let placesCard_wrap = document.querySelectorAll(".places__card-wrap")
    let toursTour = document.querySelectorAll(".tour__pic, .tour__info")
    let toursTour_leftSide = [toursTour[0], toursTour[2]];
    let toursTour_rightSide = [toursTour[1], toursTour[3]];
    let topTitle = document.querySelector(".top-title")
    let topTitle_span = document.querySelectorAll(".top-title span")
    let topCard = document.querySelectorAll(".top__card")
    let videos = document.querySelector(".videos")
    let videosWrapper = document.querySelector(".videos__wrapper")


    // Movement
    function scrolling(){
        animPartiallyVisible(introTitle,"intro__title-anim")
        animPartiallyVisible(introSubtitle,"intro__subtitle-anim")
        animPartiallyVisibleReadress(introSearchForm_wrap,introSearchForm,"serch-form-anim")
        animPartiallyVisibleRaChildALL(benefitsTitle,benefitsTitle_span, "benefits__title-anim", benefitsTitle_span.length)
        animPartiallyVisibleALL(benefitsCardThumb, "benefits__card-thumb-anim")
        for(let i = 0; i < benefitsCardTitle.length; i++){
            animPartiallyVisibleRaChildALL(benefitsCardTitle[i],benefitsCardTitle[i].querySelectorAll("span"),"benefits__card-text-anim")
        }
        for(let i = 0; i < benefitsCardDesc.length; i++){
            animPartiallyVisibleRaChildALL(benefitsCardDesc[i],benefitsCardDesc[i].querySelectorAll("span"),"benefits__card-text-anim")
        }
        for(let i = 0; i < benefitsCardMore.length; i++){
            animPartiallyVisibleRaChildALL(benefitsCardMore[i],benefitsCardMore[i].querySelectorAll("span"),"benefits__card-text-anim")
        }
        
        
        
        animPartiallyVisibleRaChildALL(placesTitle,placesTitle_span, "section-title-anim")
        animPartiallyVisible(sectionTitle[0], "section-title-after-anim")
        animPartiallyVisibleRaALL(placesCard,placesCard_wrap, "places__card-anim", placesCard.length)
        animPartiallyVisibleALL(toursTour_leftSide,"tours__tour_leftSide-anim")
        animPartiallyVisibleALL(toursTour_rightSide,"tours__tour_rightSide-anim")
        animPartiallyVisibleRaChildALL(topTitle,topTitle_span, "section-title-anim")
        animPartiallyVisible(sectionTitle[1], "top-title-after-anim")
        animPartiallyVisibleRaChild(videos, videosWrapper, "videos__wrapper-anim")
        
        if(window.innerWidth > 1015){
            for(let i = 0; i < topCard.length; i+=3){ //left side
                animPartiallyVisible(topCard[i],"top__card-left-side-anim")
            }
            for(let i = 1; i < topCard.length; i+=3){ //center
                let cardInner = topCard[i].querySelectorAll(".top__card-pic, .top__card-desc, .top__card-more")
                animPartiallyVisibleRaChildALL(topCard[i],cardInner,"top__card-center-anim")
            }
            for(let i = 2; i < topCard.length; i+=3){ // right side
                animPartiallyVisible(topCard[i],"top__card-right-side-anim")
            }
        }
        else {
            for(let i = 0; i < topCard.length; i++){
                let cardInner = topCard[i].querySelectorAll(".top__card-pic, .top__card-desc, .top__card-more")
                animPartiallyVisible(cardInner[0],"top__card-all-anim")
                animPartiallyVisible(cardInner[1],"top__card-all-anim")
                animPartiallyVisible(cardInner[2],"top__card-all-anim")
            }
        }


        
    }
    
} ()


    



