(function(){
    burger = document.querySelector(".header__nav-burger")
    navItem = document.querySelectorAll(".header__nav-item")
    burger.addEventListener("click", () => {
        let class_arr = Object.values(burger.classList)
        if(class_arr.indexOf("header__nav-burger-active") != -1){
            burger.classList.remove("header__nav-burger-active")
            for(let i = 0; i < navItem.length; i++){
                navItem[i].classList.remove("header__nav-item-active")
            }
            
        }
        else{
            burger.classList.add("header__nav-burger-active")
            for(let i = 0; i < navItem.length; i++){
                navItem[i].classList.add("header__nav-item-active")
            }
        }
        
        
    })
}())