console.log('%cDeveloped by Djigit', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34',
  'color: #c434c4; background: #eee; font-size: 30px '
);

// 
// Header profile dropdown
// 

let profileDropDown = document.querySelector(".profile_dropdown");
let profileDropDownOpen = document.querySelector(".profile-more");
let profileDropDownClose = document.querySelector(".close-dropdown");

if(profileDropDown){

  profileDropDownOpen.addEventListener("click",()=> {
    profileDropDown.classList.add("profile_dropdown-active");
  })

  profileDropDownClose.addEventListener("click",()=> {
    profileDropDown.classList.remove("profile_dropdown-active");
  })

}

// 
// Subscribe
// 

let SubscribeCheckbox = document.getElementById("subscribe");
let SubscribeBtn = document.getElementById("subscribe-btn");
let UnsubscribeBtn = document.getElementById("unsubscribe-btn");
let UnsubscribeBlk = document.querySelector(".subscribed");
let UnsubscibeDropDown = document.querySelector(".subscibed-menu");
let UnsubscibeDropDownOpen = document.querySelector(".subscribed>p");

if(UnsubscibeDropDown){

  UnsubscibeDropDownOpen.addEventListener("click",()=> {
    UnsubscibeDropDown.classList.add("subscribed-menu-active");
  })
}

function closeAllPopups(){
  let popupsList = document.querySelectorAll(".popup");
  
  for (let i = 0; i < popupsList.length; i++) {
      popupsList[i].classList.remove("popup-active");
  }
} 

function CheckExistClass(objList, classToFind){
  let exist = false;
  
  if(objList.length > 0){

      for (let b = 0; b < (objList.length-2); b++) {

          for (let i = 0; i < objList[b].classList.length; i++) {
              if(objList[b].classList[i] == classToFind){
                  exist = true;
              }
          }
      }
  }
  

  if(exist == true){
      return true;
  }
  else{
      return false;
  }
}

document.addEventListener("click", (e)=>{
  obj = e.path
  
  if(!CheckExistClass(obj, "subscribed")){
      console.log("close");
      UnsubscibeDropDown.classList.remove("subscribed-menu-active");
  }
  
})

SubscribeBtn.addEventListener("click", ()=>{
  SubscribeBtn.style.display = "none";
  UnsubscribeBlk.style.display = "block";
  SubscribeCheckbox.checked = true;
})

UnsubscribeBtn.addEventListener("click", ()=>{
  SubscribeBtn.style.display = "block";
  UnsubscribeBlk.style.display = "none";
  SubscribeCheckbox.checked = false;
})

// 
// Write-New
// 

let WriteNewBlk = document.querySelector(".write-new");

if(WriteNewBlk){
  let WriteNewInput = WriteNewBlk.querySelector("input");
  
  WriteNewInput.addEventListener("click", ()=>{
    WriteNewBlk.classList.add("input-active")
  })


}

document.addEventListener("click", (e)=>{
  obj = e.path

  if(!CheckExistClass(obj, "write-new")){
    console.log("close");
    WriteNewBlk.classList.remove("input-active");
  }
  
})

// 
// Etc
// 

let moreBlk = document.querySelectorAll(".more");

if(moreBlk.length >0){
  
  for (let i = 0; i < moreBlk.length; i++) {
    
    moreBlk[i].addEventListener("click", ()=>{
      moreBlk[i].classList.add("more-option-active")
    })
    
  }
  


}

document.addEventListener("click", (e)=>{
  obj = e.path

  if(!CheckExistClass(obj, "more")){
    for (let i = 0; i < moreBlk.length; i++) {
      moreBlk[i].classList.remove("more-option-active");
    }
    
  }
  
})

// 
// Raiting
// 

let raitingBlk = document.querySelectorAll(".raiting-block");

if(raitingBlk.length > 0){

  for (let i = 0; i < raitingBlk.length; i++) {
    
    let raitingUp = raitingBlk[i].querySelector(".up");
    let raitingScore = raitingBlk[i].querySelector(".raiting");
    let raitingDown = raitingBlk[i].querySelector(".down");

    let startAmount = raitingScore.innerHTML

    raitingUp.addEventListener("click", ()=>{

      if(!raitingUp.classList.contains("active")){
        raitingScore.innerHTML =  Number.parseInt(startAmount) + 1;
        raitingUp.classList.add("active")
        raitingDown.classList.remove("active")
      }
      else{
        raitingScore.innerHTML =  startAmount;
        raitingUp.classList.remove("active");
      }
      
    })

    raitingDown.addEventListener("click", ()=>{

      if(!raitingDown.classList.contains("active")){
        raitingScore.innerHTML =  Number.parseInt(startAmount) - 1;
        raitingDown.classList.add("active")
        raitingUp.classList.remove("active")
      }
      else{
        raitingScore.innerHTML =  startAmount;
        raitingDown.classList.remove("active");
      }
    })

  }
  

}
