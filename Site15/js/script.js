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
//  Sidebar
//

hasChild = document.querySelectorAll(".has_child");

console.log(hasChild);
for (let i = 0; i < hasChild.length; i++) {

    hasChild[i].addEventListener("mouseover", ()=>{
        let hasChildToBottom = window.innerHeight - (hasChild[i].getBoundingClientRect().height + hasChild[i].getBoundingClientRect().y);
        childList  = hasChild[i].querySelector(".listitem_child");
        childHeight = childList.getBoundingClientRect().height;

        if(hasChildToBottom <= (childHeight - hasChild[i].getBoundingClientRect().height)){

            childList.style.top = "unset";
            childList.style.bottom = "0";

            if(window.innerHeight <= childHeight){
                childList.style.overflowY = "scroll";
                childList.style.maxHeight = window.innerHeight + "px";
            }
            else{
                childList.style.overflowY = "unset";
                childList.style.maxHeight = "unset";
            }
        }
        else{
            childList.style.top = hasChild[i].getBoundingClientRect().y + "px";
            childList.style.bottom = "unset";
            if(window.innerHeight >= childHeight){
                console.log('unset');
                childList.style.overflowY = "unset";
                childList.style.maxHeight = "unset";
            }
        }

        
    
    })


}