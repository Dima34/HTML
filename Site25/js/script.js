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