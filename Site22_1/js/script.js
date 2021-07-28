const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.pageYOffset  > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOfsett || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
  
}

window.onload = function() {
  document.querySelector('.header__offer-figure').classList.add("active")
  document.querySelector('.figure-girl').setAttribute('src','./gif/girl_run.gif');

  if(window.innerWidth > 1080){
    setTimeout(()=>{
      document.querySelector('.figure-girl').setAttribute('src','./gif/girl_stay.gif');
    }, 1655)

  } else if(window.innerWidth > 560){
    
    document.querySelector('.figure-girl').setAttribute('src','./gif/girl_stay.gif');
    
  }else{
    document.querySelector('.figure-girl').setAttribute('src','./gif/girl_stay_mobile.gif');
    document.querySelector('.five__box-right .man').setAttribute('src','./gif/man_mob.gif');
  }
  
};

if(window.innerWidth < 560){
  
  document.querySelector('.figure-girl').setAttribute('src','./gif/girl_stay_mobile.gif');
  
}


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
  mouseParallax(document.querySelectorAll(".info__box-row.row-1 img"), 0.004);
  mouseParallax(document.querySelectorAll(".info__box-row.row-2 img"), 0.003, true);
  mouseParallax(document.querySelectorAll(".info__box-row.row-3 img"), 0.00355);
  mouseParallax(document.querySelectorAll(".info__box-row.row-4 img"), 0.001);
  mouseParallax(document.querySelectorAll(".info__box-row.row-5 img"), 0.0038, true);
  mouseParallax(document.querySelectorAll(".bumperCup"), 0.003);
}


