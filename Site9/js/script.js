
(function(){
    let bepartner = document.querySelector(".partner__bepartner");
    let bepartner_show_btn = document.querySelector(".partner__be-partner-btn");
    let bepartner_close = document.querySelector(".bepartner_close-btn");
   
    if(bepartner != null){
        bepartner_show_btn.addEventListener("click", ()=>{
            bepartner.classList.add("visible-flex");
        })
        bepartner_close.addEventListener("click", ()=>{
            bepartner.classList.remove("visible-flex");
        })
    }
    

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

    let cardDescBtn = document.querySelectorAll(".services_learn-more-btn");
    let services_blk = document.querySelectorAll(".services_blk");

    if(cardDescBtn != null){
        for(let i = 0; i < cardDescBtn.length; i ++){
            cardDescBtn[i].addEventListener("click",()=>{
                services_blk[i].classList.add("services_blk-active");
                for(let b = 0; b < cardDescBtn.length; b++){
                    if(b != i){
                        services_blk[b].classList.remove("services_blk-active");
                    }
                    
                }
            })
        }
    }

    
    
    
}())
