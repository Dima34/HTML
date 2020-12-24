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

function setSubMenuPos(child){
    let hasChildToBottom = window.innerHeight - (child.getBoundingClientRect().height + child.getBoundingClientRect().y);
    childList  = child.querySelector(".listitem_child");
    childHeight = childList.getBoundingClientRect().height;

    if(hasChildToBottom <= (childHeight - child.getBoundingClientRect().height)){

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
        console.log(child.getBoundingClientRect())
        childList.style.top = child.getBoundingClientRect().top + pageYOffset + "px";
        childList.style.bottom = "unset";
        if(window.innerHeight >= childHeight){
            childList.style.overflowY = "unset";
            childList.style.maxHeight = "unset";
        }
    } 
}

for (let i = 0; i < hasChild.length; i++) {

    setSubMenuPos(hasChild[i]);

    hasChild[i].addEventListener("mouseover", ()=>{
        setSubMenuPos(hasChild[i]);
    })
}

//
//  Text copy
//

let textCopyBlk = document.querySelector(".header_mail");
//let textToCopy = textCopyBlk.querySelector("a").innerHTML;
let textCopyBtn = textCopyBlk.querySelector("span");

textCopyBtn.addEventListener('click',()=>{
    let textToCopy = textCopyBlk.querySelector("a");
    textToCopy.select
    document.execCommand("copy");
    alert("Copied the text: " + textToCopy.value);
});