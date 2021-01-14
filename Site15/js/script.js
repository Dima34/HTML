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


//
//  Contacts blocks
//

let productsBlks = document.querySelectorAll(".products_block-wrap"); 

if(productsBlks.length != 0){
    let productsBlocksInBlockAmount = 28;
    let productsBlocksAmount = Math.ceil(productsBlks.length/productsBlocksInBlockAmount);
    let productsBlocksArray = [];

    // Create divs
    for (let i = 0; i < productsBlocksAmount; i++) {
        
        productsBlocksArray.push(document.createElement("div"));
        
    }

    let productsMainBlock = document.querySelector(".products_blocks");

    // Append divs to main block
    for (let i = 0; i < productsBlocksAmount; i++) {
        
        productsMainBlock.append(productsBlocksArray[i])
        
    }

    // Append classes to divs
    let productsMainBlockDivs = productsMainBlock.querySelectorAll("div");

    for (let i = 0; i < productsMainBlockDivs.length; i++) {
        
        productsMainBlockDivs[i].className = "products_blockgroup";
        
    }

    // Append products block to their blockgroups
    let productsMainBlockGroups = productsMainBlock.querySelectorAll(".products_blockgroup");
    let productBlockToFillNumber = 0;
    let productsTempBlock = document.querySelector(".products-temp-block");
    productsTempBlock.remove();
    
    for (let i = 0; i < productsBlks.length; i++) {

        if(i % productsBlocksInBlockAmount == 0 && i!=0){
            productBlockToFillNumber++;
        }
        
        productsMainBlockGroups[productBlockToFillNumber].append(productsBlks[i].cloneNode(true));

    }

    // Separate blocks to lines
    productsBlks = document.querySelectorAll(".products_block-wrap");

    for (let i = 0; i < productsMainBlockGroups.length; i++) {
        
        firstLine = document.createElement("div");
        firstLine.className = "products_line1";
        secondLine = document.createElement("div");
        secondLine.className = "products_line2";
        thirdLine = document.createElement("div");
        thirdLine.className = "products_line3";

        inGroupBlocks = productsMainBlockGroups[i].querySelectorAll(".products_block-wrap");

        for (let b = 0; b < inGroupBlocks.length; b+=3) {
            
            firstLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 1; b < inGroupBlocks.length; b+=3) {
            
            secondLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 2; b < inGroupBlocks.length; b+=3) {
            
            thirdLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        productsMainBlockGroups[i].innerHTML = "";
        productsMainBlockGroups[i].append(firstLine);
        productsMainBlockGroups[i].append(secondLine);
        productsMainBlockGroups[i].append(thirdLine);

        // If block group is full add last element of first line to the end of third column
        if(inGroupBlocks.length == productsBlocksInBlockAmount){

            firstLineLastElement = productsMainBlockGroups[i].querySelector(".products_line1").querySelector(".products_block-wrap:last-child");
            productsMainBlockGroups[i].querySelector(".products_line3").append(firstLineLastElement);
            
        }
    }

    // Add classes to blocks
    for (let i = 0; i < productsMainBlockGroups.length; i++) {
        
        firstLine = productsMainBlockGroups[i].querySelector(".products_line1");
        secondLine = productsMainBlockGroups[i].querySelector(".products_line2");
        thirdLine = productsMainBlockGroups[i].querySelector(".products_line3");

        firstLineBlocks = firstLine.querySelectorAll(".products_block-wrap");
        tmp = 1

        for (let b = 0; b < firstLineBlocks.length; b++) {
            
            firstLineBlocks[b].classList.add("product_block" + tmp)
            tmp+=3;
            
        }

        secondLineBlocks = secondLine.querySelectorAll(".products_block-wrap");
        tmp = 2

        for (let b = 0; b < secondLineBlocks.length; b++) {
            
            secondLineBlocks[b].classList.add("product_block" + tmp)
            tmp+=3;
            
        }

        thirdLineBlocks = thirdLine.querySelectorAll(".products_block-wrap");
        tmp = 3

        for (let b = 0; b < thirdLineBlocks.length; b++) {
            
            thirdLineBlocks[b].classList.add("product_block" + tmp)
            tmp+=3;
            
        }

        // If line3 have 10 elems change block30 to 28
        if(thirdLineBlocks.length == 10){
            thirdLineBlocks[9].classList.add("product_block28");
            thirdLineBlocks[9].classList.remove("product_block30");
        }

    }


}


//
//  Services blocks
//

let servicesBlks = document.querySelectorAll(".services_block-wrap"); 

if(servicesBlks.length != 0){
    let servicesBlocksInBlockAmount = 8;
    let servicesBlocksAmount = Math.ceil(servicesBlks.length/servicesBlocksInBlockAmount);
    let servicesBlocksArray = [];

    // Create divs
    for (let i = 0; i < servicesBlocksAmount; i++) {
        
        servicesBlocksArray.push(document.createElement("div"));
        
    }

    let servicesMainBlock = document.querySelector(".services_blocks");

    // Append divs to main block
    for (let i = 0; i < servicesBlocksAmount; i++) {
        
        servicesMainBlock.append(servicesBlocksArray[i])
        
    }

    // Append classes to divs
    let servicesMainBlockDivs = servicesMainBlock.querySelectorAll("div");

    for (let i = 0; i < servicesMainBlockDivs.length; i++) {
        
        servicesMainBlockDivs[i].className = "services_blockgroup";
        
    }

    // Append services block to their blockgroups
    let servicesMainBlockGroups = servicesMainBlock.querySelectorAll(".services_blockgroup");
    let productBlockToFillNumber = 0;
    let servicesTempBlock = document.querySelector(".services-temp-block");
    servicesTempBlock.remove();
    
    for (let i = 0; i < servicesBlks.length; i++) {

        if(i % servicesBlocksInBlockAmount == 0 && i!=0){
            productBlockToFillNumber++;
        }
        
        servicesMainBlockGroups[productBlockToFillNumber].append(servicesBlks[i].cloneNode(true));

    }

    // Separate blocks to lines
    servicesBlks = document.querySelectorAll(".services_block-wrap");

    for (let i = 0; i < servicesMainBlockGroups.length; i++) {
        
        firstLine = document.createElement("div");
        firstLine.className = "services_line1";
        secondLine = document.createElement("div");
        secondLine.className = "services_line2";
        thirdLine = document.createElement("div");
        thirdLine.className = "services_line3";

        inGroupBlocks = servicesMainBlockGroups[i].querySelectorAll(".services_block-wrap");

        for (let b = 0; b < inGroupBlocks.length; b+=3) {
            
            firstLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 1; b < inGroupBlocks.length; b+=3) {
            
            secondLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        for (let b = 2; b < inGroupBlocks.length; b+=3) {
            
            thirdLine.append(inGroupBlocks[b].cloneNode(true));
            
        }

        servicesMainBlockGroups[i].innerHTML = "";
        servicesMainBlockGroups[i].append(firstLine);
        servicesMainBlockGroups[i].append(secondLine);
        servicesMainBlockGroups[i].append(thirdLine);

        // If block group is full add last element of first line to the end of third column
        if(inGroupBlocks.length == servicesBlocksInBlockAmount){

            firstLineLastElement = servicesMainBlockGroups[i].querySelector(".services_line1").querySelector(".services_block-wrap:last-child");
            servicesMainBlockGroups[i].querySelector(".services_line3").append(firstLineLastElement);
            
        }
    }

    // Add classes to blocks
    for (let i = 0; i < servicesMainBlockGroups.length; i++) {
        
        firstLine = servicesMainBlockGroups[i].querySelector(".services_line1");
        secondLine = servicesMainBlockGroups[i].querySelector(".services_line2");
        thirdLine = servicesMainBlockGroups[i].querySelector(".services_line3");

        firstLineBlocks = firstLine.querySelectorAll(".services_block-wrap");
        tmp = 1

        for (let b = 0; b < firstLineBlocks.length; b++) {
            
            firstLineBlocks[b].classList.add("service_block" + tmp)
            tmp+=3;
            
        }

        secondLineBlocks = secondLine.querySelectorAll(".services_block-wrap");
        tmp = 2

        for (let b = 0; b < secondLineBlocks.length; b++) {
            
            secondLineBlocks[b].classList.add("service_block" + tmp)
            tmp+=3;
            
        }

        thirdLineBlocks = thirdLine.querySelectorAll(".services_block-wrap");
        tmp = 3

        for (let b = 0; b < thirdLineBlocks.length; b++) {
            
            thirdLineBlocks[b].classList.add("service_block" + tmp)
            tmp+=3;
            
        }

        // If line3 have 10 elems change block30 to 28
        if(thirdLineBlocks.length == 10){
            thirdLineBlocks[9].classList.add("product_block28");
            thirdLineBlocks[9].classList.remove("product_block30");
        }

    }


}


//
//  Animation
//

let loadingTime = 2500;

document.addEventListener("DOMContentLoaded", 
()=>{
    setTimeout(() => {
        scrolling()
    }, loadingTime);
    
});
document.querySelector("main").addEventListener('scroll',scrolling);
window.addEventListener('scroll',scrolling);


function isPartiallyVisible(el){
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
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
function animPartiallyVisible(elem,Class,duration = undefined){
    if(isPartiallyVisible(elem)){
        elem.classList.add(Class);
    }
    if(duration != undefined){
        elem.style.animationDuration = duration;
    }
}
function animPartiallyVisibleALL(elem,Class,duration = undefined){
    for(var i = 0; i < elem.length;i++){
        if(isPartiallyVisible(elem[i])){
            elem[i].classList.add(Class);
        }
        if(duration != undefined){
            elem[i].style.animationDuration = duration;
        }
    }
    
}
function animPartiallyVisibleReadress(elem,toElem,Class){
    if(isPartiallyVisible(elem)){
        toElem.classList.add(Class);
    }
}
function animPartiallyVisibleRaALL(elem,toElem,Class,arrLen){
    for(var i = 0; i < arrLen;i++){
        if(isPartiallyVisible(elem[i])){
            toElem[i].classList.add(Class);
        }
    }
    
}
function animPartiallyVisibleRaChildALL(elem,toElem,Class){
    for(var i = 0; i < toElem.length;i++){
        if(isPartiallyVisible(elem)){
            toElem[i].classList.add(Class);
        }
    }
    
}
function animPartiallyVisibleRaChild(elem,toElem,Class){
    if(isPartiallyVisible(elem)){
        toElem.classList.add(Class);
    }
}

let header = document.querySelector(".header");
let content_line1 = document.querySelectorAll(".content_line1 p");
let content_line2 = document.querySelectorAll(".content_line2 p");

function queryA(clas){
    tmp = document.querySelectorAll(clas);
    return tmp;
}
function query(clas){
    tmp = document.querySelector(clas);
    return tmp;
}

// Movementole.log('working');

function scrolling(e){
    animPartiallyVisibleALL(header,"animate__fadeInRight");
    animPartiallyVisibleALL(content_line1,"animate__backInLeft");
    animPartiallyVisibleALL(content_line2,"animate__backInRight");
    animPartiallyVisibleALL(queryA(".content_line3 p"),"animate__backInLeft");
    animPartiallyVisibleALL(queryA(".content_line4 a"), "animate__flipInX" );
    animPartiallyVisibleALL(queryA(".footer_col1_logo"), "animate__flipInY", "1.2s");
    animPartiallyVisibleALL(queryA(".footer_col1_title"), "animate__jackInTheBox", "2s");
    animPartiallyVisibleALL(queryA(".footer_col1_desc"), "animate__backInLeft", "1.5s");
    animPartiallyVisibleALL(queryA(".footer_col1_payments img"), "animate__backInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".footer_col2_title"), "animate__fadeInDown", "2s");
    animPartiallyVisibleALL(queryA(".footer_col2_navitem"), "animate__fadeInDown", "2s" );
    animPartiallyVisibleALL(queryA(".footer_col3_galleryItem"), "animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".footer_col3_subscribe"), "animate__zoomInRight", "1s");
    animPartiallyVisibleALL(queryA(".footer_col4_title"), "animate__zoomIn", "1s");
    animPartiallyVisibleALL(queryA(".footer_col4 p"), "animate__lightSpeedInRight", "2s" );
    animPartiallyVisibleALL(queryA(".player_btn img"), "animate__zoomIn", "1s");
    animPartiallyVisibleALL(queryA(".player_title"), "animate__lightSpeedInLeft", "1.3s");
    animPartiallyVisibleALL(queryA(".swiper-container .swiper-slide"), "animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".index_text"), "animate__backInLeft", "1.3s");
    animPartiallyVisibleALL(queryA(".index_last_blk"), "animate__bounceInDown", "2s" );
    animPartiallyVisibleALL(queryA(".index_last_header h2"), "animate__fadeInRight", "1.3s");
    // here must be sale
    animPartiallyVisibleALL(queryA(".index_map"), "animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_textblock1"),"animate__backInDown", "2s" );
    animPartiallyVisibleALL(queryA(".line1_dots2"),"animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_ledder1"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_textblock2 "),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line1_half-circle1 "),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_half-circle2"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_ledder2"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_ledder3"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line1_stage"),"animate__lightSpeedInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line1_footer_main-text"),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line1_footer_small-text"),"animate__zoomIn", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox1 h2"),"animate__flipInX", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox1 p"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox2_item"),"animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox3"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line2_textbox4"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text1"),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder1"),"animate__rotateInDownLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_dots1"),"animate__rotateInDownRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder2"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text2"),"animate__jackInTheBox", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text3"),"animate__zoomInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_books"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow1"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow2"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow3"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text4"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_textbox1 p:first-child"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_textbox1 p:last-child"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text5"),"animate__rotateInUpLeft", "2s" );
    animPartiallyVisibleALL(queryA(".attention_header"),"animate__zoomIn", "2s" );
    animPartiallyVisibleALL(queryA(".attention_blk img"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".attention_blk p"),"animate__slideInRight", "2s" );
    animPartiallyVisibleALL(queryA(".attention_footer "),"animate__rotateInDownRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_square"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text6"),"animate__slideInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_arrow4"),"animate__rotateInUpLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text7"),"animate__jackInTheBox", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder3"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder4"),"animate__rollIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_ledder5"),"animate__rotateIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text8"),"animate__flip", "2s" );
    animPartiallyVisibleALL(queryA(".line3_illustrations"),"animate__fadeInUp", "2s" );
    animPartiallyVisibleALL(queryA(".line3_triangles1"),"animate__rotateInDownRight", "2s" );
    animPartiallyVisibleALL(queryA(".line3_triangles2"),"animate__rotateInDownLeft", "2s" );
    animPartiallyVisibleALL(queryA(".line3_triangles3"),"animate__zoomIn", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text9"),"animate__bounceIn", "2s" );
    animPartiallyVisibleALL(queryA(".outcome_title"),"animate__backInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".outcome_heart"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".outcome_text"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".outline_imagetext"),"animate__fadeInRightBig", "2s" );
    animPartiallyVisibleALL(queryA(".line3_text10"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".design_btn"),"animate__tada", "2s" );
    animPartiallyVisibleALL(queryA(".design_btn-up p"),"animate__flip", "2s" );
    animPartiallyVisibleALL(queryA(".products_block-wrap"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".services_block-wrap"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".fr_block"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".fr_welcome"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".fr_stages"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".block_main"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".blk_left"),"animate__fadeInLeft", "2s" );
    animPartiallyVisibleALL(queryA(".must-be_title"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".must-be_images"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".right_stages"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".guide_header"),"animate__fadeInRight", "2s" );
    animPartiallyVisibleALL(queryA(".guide_main"),"animate__fadeIn", "2s" );
    animPartiallyVisibleALL(queryA(".guide_footer"),"animate__fadeInLeft", "2s" );


}


function loading(){
    let loading = document.querySelector(".loading");

    if(loading){
        opacity = 1;
        let ID = setInterval(() => {
            if (opacity >= 0){  
                opacity-=0.1;
                loading.style.opacity = opacity;
            }
            if(opacity < 0){
                loading.style.display = "none";
                clearInterval(ID)
            }
        }, 30);
    }
    
}

setTimeout(()=>{
    loading();
}, loadingTime);