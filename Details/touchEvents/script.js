let blk = document.querySelector(".blk-1");

blk.addEventListener("touchstart", touchStart);
blk.addEventListener("touchmove", touchMove);
blk.addEventListener("touchstart", touchEnd);
let moveArr = [];

function touchStart(event){
    moveArr =[];
}

function touchMove(event){
    moveArr.push(event.touches[0].clientX)
    // console.log( event.touches[0].clientX)
    // console.log( (Object.values(event.touches)))
    // console.log(moveArr)
}

function touchEnd(event){
    
    if(moveArr[0] < moveArr[moveArr.length]){
        console.log("moveLeft")
    }
    if(moveArr[0] > moveArr[moveArr.length]){
        console.log("right")
    }
}


