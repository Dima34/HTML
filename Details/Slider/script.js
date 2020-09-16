var sliderCard = document.querySelectorAll(".slider__card");
var sliderPoints = document.querySelector(".slider__points");
    
var sliderPoint = document.querySelectorAll(".slider__point");

var startCard = 0;


let arr = sliderCard.length;

    let inner = document.querySelector('.slider__points');

    arr.forEach((i,index) => {
        inner.innerHTML += `<div class = "slider__point" onclick="func(${index})">${i}</div>`;
    })

    let func = (index) => {
        console.log(index)
    }