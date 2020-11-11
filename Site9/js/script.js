
(function(){
    let bepartner = document.querySelector(".partner__bepartner");
    let bepartner_show_btn = document.querySelector(".partner__be-partner-btn");
    let bepartner_close = document.querySelector(".bepartner_close-btn");
   

    bepartner_show_btn.addEventListener("click", ()=>{
        bepartner.classList.add("visible-flex");
    })
    bepartner_close.addEventListener("click", ()=>{
        bepartner.classList.remove("visible-flex");
    })

    let burger = document.querySelector(".burger");
    let header_nav = document.querySelector(".nav_item-list");
    let burger_active = false;
    burger.addEventListener("click", ()=>{
        if(burger_active == false){
            header_nav.classList.add("max-height");
            burger.classList.add("burger-active");
            burger_active = true;
        }
        else{
            header_nav.classList.remove("max-height");
            burger.classList.remove("burger-active");
            burger_active = false;
        }
       
        
    })
    
    
    
}())
