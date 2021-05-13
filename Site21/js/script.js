console.log('%cDeveloped by Djigit', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34',
  'color: #c434c4; background: #eee; font-size: 30px '
);


// 
// Timer
// 

let timerGroup = document.querySelector(".timer-group");

if(timerGroup){

  let timerH = timerGroup.querySelector(".timeH");
  let timerM = timerGroup.querySelector(".timeM");
  let timerS = timerGroup.querySelector(".timeS");

  let dateBlock = timerGroup.querySelector(".timer-data")

  let date = new Date();

  initTimer();

  if(!document.querySelector(".timer").classList.contains("ended")){
    setInterval(updateTimer, 1000);
  }
  

  function initTimer(){
    
    timerGroup.setAttribute("day", convertDay(date.getDay()));

    let dayBlock = GetCurrentDateblock(date.getDay());

    let timeList = [];

    dayBlock.querySelectorAll("span").forEach((el)=>{

      let hours = el.innerText.slice(0, el.innerText.indexOf(":"));
      let minutes = el.innerText.slice(el.innerText.indexOf(":")+1);

      timeList.push({hours:hours,minutes});

    });

    let nearTime = getNearTime(timeList);


    if(nearTime.hours != undefined){

      timeLeft = getLeftTime(nearTime);

      setTimerByList(timeLeft);

    } else{

      setTimer("00", "00", "00")
      document.querySelector(".timer").classList.add("ended")
    }
    
  }

  function updateTimer(){
    date = new Date();

    let currentDate = {};

    currentDate.H = Number(timerH.textContent);
    currentDate.M = Number(timerM.textContent);
    currentDate.S = Number(timerS.textContent);

    console.log("update");

    // console.log(`CurrentH - ${currentDate.H}`);
    // console.log(`CurrentM - ${currentDate.M}`);
    // console.log(`CurrentS - ${currentDate.S}`);
    // console.log("----");

  }

  function GetCurrentDateblock(dayNum){
    return dateBlock.querySelectorAll(".day")[dayNum]
  }

  function convertDay(dayNum){

    let dayArr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    return dayArr[dayNum];

  }

  function setTimerByList(timeObj){
    let date = new Date;
    
    if(timeObj.hours > 0 && timeObj.hours <= 9){

      timerH.innerText = `0${timeObj.hours}`;

    } else{

      timerH.innerText = timeObj.hours;

    }

    timerM.innerText = timeObj.minutes;

    if(60 - date.getSeconds() <= 9){

      timerS.innerText = `0${60 - date.getSeconds()}`;

    } else{

      timerS.innerText = 60 - date.getSeconds();

    }
    
  }

  function setTimer(H, M, S){

    timerH.innerText = H;
    timerM.innerText = M;
    timerS.innerText = S;

  }

  function getNearTime(timeArray){
    let currentH = date.getHours();
    let currentM = date.getMinutes();

    let nearTime = {hours : undefined, minutes : undefined};
   
    for (let i = 0; i < timeArray.length; i++) {
      

      if(timeArray[i].hours - currentH >= 0){
        

        if(timeArray[i].hours == currentH){

          if(timeArray[i].minutes > currentM){
            // console.log("We have a ",timeArray[i].hours, ":", timeArray[i].minutes );

            nearTime = {hours : timeArray[i].hours, minutes : timeArray[i].minutes};
            break;
          }

        } else{
          // console.log("We have a ",timeArray[i].hours, ":", timeArray[i].minutes );

          nearTime = {hours : timeArray[i].hours, minutes : timeArray[i].minutes};
          break;
        }

      }
    }        
   
    return nearTime;
  }

  function getLeftTime(timeObject){
    let date = new Date;
    
    let leftMinutes = timeObject.minutes - date.getMinutes();
    let leftHours = timeObject.hours - date.getHours();

    if(leftMinutes < 0){

      leftMinutes = 60+ (leftMinutes);
      leftHours--;

    }

    // console.log(" ");
    // console.log("----------------GET LEFT TIME DEBUG-------------------");
    // console.log(` Input time - ${timeObject.hours}:${timeObject.minutes}`);
    // console.log(` Current time - ${date.getHours()}:${date.getMinutes()}`);
    // console.log(` Differance - ${leftHours}:${leftMinutes}`);
    // console.log("------------------------------------------------------");
    // console.log(" ");

    return {hours : leftHours, minutes : leftMinutes}
  }

}



// 
// Runline
// 

let Runline = document.querySelector(".run-line");

if(Runline){

  let runWrapper = Runline.querySelector(".run-wrapper");
  let WrapperText = runWrapper.querySelector("p").cloneNode(true);
  let TextWidth = getComputedStyle(runWrapper.querySelector("p")).width.slice(0,-2)


  for (let i = 0; i < 5; i++) {
    runWrapper.appendChild(WrapperText.cloneNode(true))
  }
 
  currentX = 0;

  setInterval(()=>{
    
    currentX--;
    runWrapper.style.transform = `translateX(${currentX}px)`;

    if(-currentX >=  TextWidth*3){
      currentX = 0;
    }

  }, 20)  

}