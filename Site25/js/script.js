console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

// Child list

const hasChildElems = document.querySelectorAll(".has-child");

if(hasChildElems.length > 0){

  hasChildElems.forEach((el, index)=>{

    el.addEventListener("click", ()=>{
    
      el.classList.contains("active") ? el.classList.remove("active") : el.classList.add("active");

    })

  })
  
}

// burger

const headerBurger = document.querySelector(".header__burger");

if(headerBurger){
  const burgerSlider = document.querySelector(".header__burger-slider");

  headerBurger.addEventListener("click", ()=>{
    console.log("clk");
    if(headerBurger.classList.contains("active")){
      headerBurger.classList.remove("active");
      burgerSlider.classList.remove("active");
      document.body.style.overflow = "visible";
      document.body.style.height = "unset";
    } else{
      headerBurger.classList.add("active");
      burgerSlider.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
 
  })
}

// 
// Cathegories sidebar
// 

const cathegoriesOpen = document.querySelector(".cathegories__open");
const cathegoriesMain = document.querySelector(".cathegories__main");

if(cathegoriesMain && cathegoriesOpen){
  const cathegoriesClose = document.querySelector(".cathegories__close");

  cathegoriesOpen.addEventListener("click", ()=>{
    cathegoriesMain.classList.add("active");

    Number(getComputedStyle(cathegoriesMain).height.slice(0, -2)) > (window.innerHeight - 81) ? 
    cathegoriesMain.style.height = (window.innerHeight - 81) + "px" : 
    cathegoriesMain.style.height = "unset";

  })

  cathegoriesClose.addEventListener("click", ()=>{
    cathegoriesMain.classList.remove("active");
  })


}

// 
// Parallax
// 

mouseParallax = (elem, factor = 0.1, reversed = false)=> {
  // Add event listener
  if(elem.length>0){
      document.addEventListener("mousemove", parallax);
  
      // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth;

          if(reversed == true){
              _depth = `${(_mouseX - _w) * -factor}% ,${(_mouseY - _h) * -factor}%`;
          }
          else{
              _depth = `${(_mouseX - _w) * factor}% ,${(_mouseY - _h) * factor}%`;
          }

          let x = `${_depth}`;
          elem.forEach((e)=>{
              e.style.transform = `translate(${x})`;
          })
          
      }
  }
  

};

if(window.innerWidth > 1100){
  mouseParallax(document.querySelectorAll(".intro__confetti"), 0.0005);
  mouseParallax(document.querySelectorAll(".intro__confetti-flakes"), 0.0005);
}