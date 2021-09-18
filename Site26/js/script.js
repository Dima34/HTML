console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

const designWidth = 1920;
const viewportMeta = document.querySelector("meta[name='viewport']");
const viewportText = "width=device-width, initial-scale=";

function checkWidth(designWidth,viewportMeta,viewportText){
  if(window.outerWidth > 500){
    
    let scale = window.outerWidth / 1920;
    viewportMeta.setAttribute("content", viewportText+scale);

  } else{

    viewportMeta.setAttribute("content", viewportText+"1");

  }
}

checkWidth(designWidth,viewportMeta,viewportText);

window.addEventListener("resize", ()=>{
  checkWidth(designWidth,viewportMeta,viewportText);
})