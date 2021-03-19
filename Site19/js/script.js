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
// Burger
// 

let OpenBtn = document.querySelector(".header-burger");

if(OpenBtn){

    let menu = document.querySelector(".header-burger-menu");
    let CloseBtn = document.querySelector(".burger-close");
    let burgerItems = document.querySelectorAll(".burger_item");

    OpenBtn.addEventListener('click',()=>{
        menu.classList.add("active-x")
        document.getElementById("closeSVG").style.display = "none";
        document.getElementById("openSVG").style.display = "block";

        let startS = 0.5;
        for (let i = 0; i < burgerItems.length; i++) {
            startS +=0.15;
            burgerItems[i].style.transitionDuration = startS + "s";
            burgerItems[i].style.transform = "translateX(0px)";
            opacityCounter(burgerItems[i],25);
        }
    });

    CloseBtn.addEventListener('click',()=>{
        menu.classList.remove("active-x")
        document.getElementById("closeSVG").style.display = "block";
        document.getElementById("openSVG").style.display = "none";

        for (let i = 0; i < burgerItems.length; i++) {
            opacityReversedCounter(burgerItems[i],5);
            setTimeout(() => {
                burgerItems[i].style.transitionDuration = "0";
                burgerItems[i].style.transform = "translateX(200%)";
            }, 200);
        }        
    });
}

opacityCounter = (element,speed) =>{
    let tmp = 0;
    let timer = setInterval(()=>{
        tmp+=0.1;
        element.style.opacity = tmp;
        console.log(tmp);
        if(tmp >=1){
            clearTimeout(timer)
        }
    },speed)
}

opacityReversedCounter = (element,speed) =>{
    let tmp = 1;
    let timer = setInterval(()=>{
        tmp-=0.1;
        element.style.opacity = tmp;
        console.log(tmp);
        if(tmp <=0){
            clearTimeout(timer)
        }
    },speed)
}


// 
// Cursor
// 

let cursor = document.querySelector(".cursor");


window.addEventListener("mousemove", (e)=>{
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+ window.pageYOffset +"px";
});

document.onmouseleave = function(event) {
    cursor.style.display = "none"
};

document.onmouseenter = function(event) {
    cursor.style.display = "block"
};


// 
// Parallax
// 

mouseParallax = (elem)=> {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let factor = -0.007
        let _depth1 = `${(_mouseX - _w) * factor}% ,${(_mouseY - _h) * factor}%`;
        
        let x = `${_depth1}`;
        elem.style.transform = `translate(${x})`;
    }

};


mouseParallax(document.querySelector(".line1_ring"));


