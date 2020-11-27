let ticker_slider = document.querySelector(".ticker_slider");
let slide = document.querySelectorAll(".slide");
let ticker_slider1 = document.querySelector(".ticker_slider1");
let slide1 = document.querySelectorAll(".slide1");

let transition = 0;
let transition1 = 0;

let FirstLineSpeed = 20;
let SecondLineSpeed = 20;



function cropToInt(string){
    stringLength = string.length;
    return parseInt(string.slice(0,stringLength))
}

function tickerForward(slider,slides, speed){
    moveToAmount = (cropToInt(window.getComputedStyle(slides[0]).width) + cropToInt(window.getComputedStyle(slides[0]).marginRight)) * 2;

    transition = -moveToAmount;
    setInterval(function() {
        
        slider.style.left = transition + "px";
        transition++;
        if(Math.abs(transition) == 0){
            transition = -moveToAmount;
        }
        
        
    },speed);
}

function tickerBackward(slider1,slides1, speed1){
    moveToAmount1 = (cropToInt(window.getComputedStyle(slides1[0]).width) + cropToInt(window.getComputedStyle(slides1[0]).marginRight)) * 3;

    setInterval(function() {
        
        slider1.style.left = transition1 + "px";
        transition1--;
        if(Math.abs(transition1) == moveToAmount1){
            transition1 = 0;
        }
        
        
    }, speed1);
}

tickerForward(ticker_slider,slide,FirstLineSpeed)
tickerBackward(ticker_slider1,slide1,SecondLineSpeed);


