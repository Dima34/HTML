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