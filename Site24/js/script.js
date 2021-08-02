console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);


const hasChidItem = document.querySelectorAll(".has-child");

if (hasChidItem.length > 0) {
  
  hasChidItem.forEach((el)=>{
    el.addEventListener('click', ()=>{
      
      if (el.classList.contains('active')) {
        el.classList.remove('active')
      } else{
        el.classList.add('active')
      }

    })
  })

}

// 
// Burger active
// 

const header = document.getElementById('header');

if(header){
  
  const burger = header.querySelector(".header__burger");
  const nav =  header.querySelector("nav");

  burger.addEventListener('click', ()=>{
    
    if(burger.classList.contains('active')){
      burger.classList.remove("active")
      nav.classList.remove('active')
      document.querySelector("body").style.position = 'unset'
      document.querySelector("body").style.width = 'unset'
    } else{
      burger.classList.add("active")
      nav.classList.add('active')
      document.querySelector("body").style.position = 'fixed'
      document.querySelector("body").style.width = '100vw'
    }

  })

}