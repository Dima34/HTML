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

if(hasChild){ 
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
            if(window.innerWidth > 1200){
                console.log('that else');
                childList.style.top = child.getBoundingClientRect().top + pageYOffset + "px";
                childList.style.bottom = "unset";
                if(window.innerHeight >= childHeight){
                    childList.style.overflowY = "unset";
                    childList.style.maxHeight = "unset";
                }
            }
        } 
    }
    
    for (let i = 0; i < hasChild.length; i++) {
        
        window.addEventListener("resize", ()=>{
            if(window.innerWidth > 1200){
                setSubMenuPos(hasChild[i]);
    
                hasChild[i].addEventListener("mouseover", ()=>{
                    setSubMenuPos(hasChild[i]);
                })
            }
        })
    
        if(window.innerWidth > 1200){
            setSubMenuPos(hasChild[i]);
    
            hasChild[i].addEventListener("mouseover", ()=>{
                setSubMenuPos(hasChild[i]);
            })
        }
        
    }
}



//
// Sidebar class change
//

if(window.innerWidth < 1200){
    needToChange = document.querySelectorAll(".has_child");
    for (let b = 0; b < needToChange.length; b++) {
        needToChange[b].classList.add("has_child-mob"); 
        needToChange[b].classList.remove("has_child");
    }
}
else{
    needToChange = document.querySelectorAll(".has_child-mob");
    for (let b = 0; b < needToChange.length; b++) {
        needToChange[b].classList.add("has_child");
        needToChange[b].classList.remove("has_child-mob"); 
    }  
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth < 1200){
        needToChange = document.querySelectorAll(".has_child");
        for (let b = 0; b < needToChange.length; b++) {
            needToChange[b].classList.add("has_child-mob"); 
            needToChange[b].classList.remove("has_child");
        }
    }
    else{
        needToChange = document.querySelectorAll(".has_child-mob");
        for (let b = 0; b < needToChange.length; b++) {
            needToChange[b].classList.add("has_child");
            needToChange[b].classList.remove("has_child-mob"); 
        }  
    }
})




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

//
//  Burger
//

let burgerOpen = document.querySelector(".burger");
let burger = document.querySelector(".sidebar_nav");
let burgerClose = document.querySelector(".burger-close");

burgerOpen.addEventListener('click',()=>{
    burger.classList.add("active");
});
burgerClose.addEventListener('click',()=>{
    burger.classList.remove("active");
});

