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
// Burger open
// 

let OpenBtn = document.querySelector(".header-burger");

if(OpenBtn){

    let menu = document.querySelector(".header-burger-menu");
    let CloseBtn = document.querySelector(".burger-close");

    OpenBtn.addEventListener('click',()=>{
        menu.classList.add("active-x")
        document.getElementById("closeSVG").style.display = "none"
        document.getElementById("openSVG").style.display = "block"
    });

    CloseBtn.addEventListener('click',()=>{
        menu.classList.remove("active-x")
        document.getElementById("closeSVG").style.display = "block"
        document.getElementById("openSVG").style.display = "none"
    });

}