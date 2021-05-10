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

  SetTimer();

  setInterval(updateTimer, 1000);

  function SetTimer(){
    
    timerGroup.setAttribute("day", convertDay(date.getDay()));

    let dayBlock = GetCurrentDateblock(date.getDay());

    let timeList = [];

    dayBlock.querySelectorAll("span").forEach((el)=>{

      let hours = el.innerText.slice(0, el.innerText.indexOf(":"));
      let minutes = el.innerText.slice(el.innerText.indexOf(":")+1);

      timeList.push({hours:hours,minutes});

    });


    console.log(getNearTime(timeList)); 

  }

  function getNearTime(timeArray){

    let currentH = date.getHours();
    let currentM = date.getMinutes();
    let currentS = date.getSeconds();

    let nearTime;
    x = 0;


    // while(nearTime == undefined || x >= timeArray.length){

    //   if((timeArray[x].hours - currentH) >= 0){

    //     if(timeArray[x].minutes - currentM > 0){

    //       console.log("time array minutes - ",timeArray[x].minutes);
    //       nearTime = x;
    //       break;

    //     }
        
    //   } else{
    //     if(timeArray.length > x){

    //       x++;

    //     }
    //   }
    // }

   
    return nearTime;
  }

  function updateTimer(){
    date = new Date();

  }

  function GetCurrentDateblock(dayNum){
    return dateBlock.querySelectorAll(".day")[dayNum]
  }


  function convertDay(dayNum){

    let dayArr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    return dayArr[dayNum];

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