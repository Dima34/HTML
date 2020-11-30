function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();


//
//  Sumbenu top
//

let submenu = document.querySelectorAll(".header__nav_item_submenu");
let header = document.querySelector(".header");

function BlocksToBottom(elemList, toElem){
    for(let i = 0; i < elemList.length; i++){
        elemList[i].style.top = window.getComputedStyle(toElem).height;
    }
}

if(submenu != null){
    BlocksToBottom(submenu, header);
    window.addEventListener("resize",()=>{
        BlocksToBottom(submenu, header);
    })
}