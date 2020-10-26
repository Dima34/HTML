let blk = document.querySelector(".blk-1");

blk.addEventListener("touchstart", touchStart);
blk.addEventListener("touchmove", touchMove);
blk.addEventListener("touchstart", touchEnd);
let moveArr = [];

function touchStart(event){
    moveArr =[];
}

let first = 0, last = 0;

function touchMove(event){
    moveArr.push(event.touches.clientX)
    // console.log(event.touches[0].clientX)
    // console.log( (Object.values(event.touches)))
    // console.log("Arr ",moveArr)

    // console.log("first-",moveArr[0])
    // console.log("last-",moveArr[moveArr.length-1])
    // console.log("--------------------")
    first = moveArr[0];
    last = moveArr[moveArr.length-1];
}

function touchEnd(event){
    console.log(first);
    console.log("EventLast")
    

    if(moveArr[0] < moveArr[moveArr.length]){
        console.log("moveLeft")
    }
    if(moveArr[0] > moveArr[moveArr.length]){
        console.log("right")
    }
}


