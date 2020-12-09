function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();


let hasChildrenList = document.querySelectorAll(".buger-menu_item-has-children");

for (let i = 0; i < hasChildrenList.length; i++) {
    hasChildrenList[i].addEventListener('click',()=>{
        if(hasChildrenList[i].classList.contains("buger-menu_item-has-children-active")){
            hasChildrenList[i].classList.remove("buger-menu_item-has-children-active");
        }else{
            hasChildrenList[i].classList.add("buger-menu_item-has-children-active");
        }
    });      
}

