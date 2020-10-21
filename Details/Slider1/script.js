const sliderItems = document.querySelectorAll(".slider-item")
const sliderContent = document.querySelector(".slider-content")

let inBlockAmount = 3;
let blockAmount = Math.ceil(sliderItems.length/inBlockAmount)


function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

wrap(sliderItems[2], document.createElement('div'));

for(let i = 0; i < blockAmount; i++){
    
}



