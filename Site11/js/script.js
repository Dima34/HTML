function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();


let blog_blk = document.querySelector(".blog");
let blog_blks = document.querySelectorAll(".blog .blog__blks_blk");

if(blog_blk != null){
    //
    //  First line
    //
    let first_line_blks = document.createElement('div');
    first_line_blks.className = "blog__first-line-blks";

    // First line small block append
    let first_line_blks_s = document.createElement('div');
    first_line_blks_s.className = "blog__blks-small";
    first_line_blks_s.append(blog_blks[0])

    first_line_blks.append(first_line_blks_s);

    // First line big block append
    let first_line_blks_b = document.createElement('div');
    first_line_blks_b.className = "blog__blks-big";
    first_line_blks_b.append(blog_blks[1])

    first_line_blks.append(first_line_blks_b);

    //
    //  All another blocks
    //

    let new_blog_blks = document.createElement('div')
    new_blog_blks.className = "blog__blks";

    let new_blog_blks_b = document.createElement('div');
    new_blog_blks_b.className = "blog__blks-big";

    let new_blog_blks_s = document.createElement('div');
    new_blog_blks_s.className = "blog__blks-small";

    for(let i = 2; i < blog_blks.length; i++){

        if(i%2==0){
            new_blog_blks_b.append(blog_blks[i]);
        }
        else{
            new_blog_blks_s.append(blog_blks[i]);
        }

    }

    new_blog_blks.append(new_blog_blks_b)
    new_blog_blks.append(new_blog_blks_s)

    blog_blk.append(first_line_blks);
    blog_blk.append(new_blog_blks);

}




//
// Ticker block duplicator
//

let blockAmount = 10;
let Slider1 = document.querySelector(".ticker_slider");
let Slide1 = document.querySelector(".slide");


let Slider2 = document.querySelector(".ticker_slider1");
let Slide2 = document.querySelector(".slide1");

if(Slider1 != null){
    for(let i = 0; i < blockAmount-1; i++){
        copy = Slide1.cloneNode(true);
        Slider1.append(copy)
        copy = Slide2.cloneNode(true);
        Slider2.append(copy)
    }
}



//
// Auto margin bottom
//

let block_containers = document.querySelectorAll(".ways__right_block")
let serviceWays = document.querySelector(".service-ways");


if(block_containers != null && serviceWays == null){
    function waysMargin1(){
        if(window.innerWidth > 600){
            for(let i = 0; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0 0 3.958vw 0px";
            }
            for(let i = 1; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0px";
            }
            for(let i = 2; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0 0 2.569vw 0px";
            }
            for(let i = 3; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0 0 1.319vw 0px";
            }
        }
        else{
            for(let i = 0; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0 0 19.733vw 0px";
            }
            for(let i = 1; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0px 0 6.933vw 0px";
            }
            for(let i = 2; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0 0 20.267vw 0px";
            }
            for(let i = 3; i < block_containers.length; i+=5){
                block_containers[i].style.margin = "0 0 17.600vw 0px";
            }
        }
    }
    waysMargin1();
    
    window.addEventListener("resize", ()=>{
        waysMargin1();
    })
}


if(serviceWays != null){
    
    function waysMargin(){
        serviceWays = document.querySelector(".service-ways");
        if(window.innerWidth > 1439){
            for(let i = 0; i < block_containers.length; i+=3){
                block_containers[i].style.margin = "0 0 73px 0px";
            }
            for(let i = 1; i < block_containers.length; i+=3){
                block_containers[i].style.margin = "0px 0px 42px 0px";
            }
        }
        else if(window.innerWidth > 600){
            for(let i = 0; i < block_containers.length; i+=3){
                block_containers[i].style.margin = "0 0 5.069vw 0px";
            }
            for(let i = 1; i < block_containers.length; i+=3){
                block_containers[i].style.margin = "0px 0px 2.917vw 0px";
            }
            
        }
        else{
            for(let i = 0; i < block_containers.length; i+=3){
                
                block_containers[i].style.margin = "0 0 24vw 0px";
            }
            for(let i = 1; i < block_containers.length; i+=3){
                block_containers[i].style.margin = "0px 0px 24vw 0px";
            }
            
        }
    }
    waysMargin();
    
    window.addEventListener("resize", ()=>{
        waysMargin();
    })
}



//
//  More blocks
//
let moreBtn = document.getElementById("more_blk-items");

if(moreBtn != null){
    let blocksAmount = 2;
    let addAmount = 2;
    let ba = document.querySelectorAll(".blog__blks_blk");
    let ba_lenght = ba.length

    moreBtn.addEventListener("click", ()=>{
        ba = document.querySelectorAll(".blog__blks_blk");
        if(blocksAmount < ba_lenght && ba_lenght - blocksAmount > addAmount-1){
            blocksAmount+=addAmount;
            for(let i = addAmount; i < blocksAmount; i++){
                ba[i].style.display = "flex";
            }
        }
        else if(ba_lenght - blocksAmount == 1){
            blocksAmount+=1;
        }
        if(ba_lenght == blocksAmount){
            moreBtn.style.display = "none";
        }
    })

}

//
//  Blog more blocks
//
let moreBtn1 = document.getElementById("more_blk-item");

if(moreBtn1 != null){
    blocksAmount = 6;
    addAmount = 2;
    ba = document.querySelectorAll(".more-details_blk");
    ba_lenght = ba.length;
    
    moreBtn1.addEventListener("click", ()=>{
        ba = document.querySelectorAll(".more-details_blk");
        if(blocksAmount < ba_lenght && ba_lenght - blocksAmount > addAmount-1){
            blocksAmount+=addAmount;
            for(let i = addAmount; i < blocksAmount; i++){
                ba[i].style.display = "flex";
            }
        }
        else if(ba_lenght - blocksAmount == 1){
            blocksAmount+=1;
        }
        if(ba_lenght == blocksAmount){
            moreBtn1.style.display = "none";
        }
        ibg();
        console.log("1")
    })

}
let filterButtons = document.querySelectorAll(".fileter_blk");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click',()=>{
        ibg();
        console.log("1")
    });
}


//
//  Burger
//

let burgerOpen = document.querySelector(".siedebar__burger");
let burgerMenu = document.querySelector(".sidebar__nav-cont");
let burgerClose = document.querySelector(".burger_close");

burgerOpen.addEventListener("click", ()=>{
    burgerMenu.classList.add("active-x");
})
burgerClose.addEventListener("click", ()=>{
    burgerMenu.classList.remove("active-x");
})



