// Gallery
let gallery_img = document.querySelectorAll(".gallery-blk")
let gallery_blk = document.querySelector(".gallery");
let gallery_back = document.querySelectorAll(".gallery-back");
let gallery_inner = document.querySelector(".gallery__body");
let gallery_current_page = document.querySelector(".counter_current-page");
let gallery_max_page = document.querySelector(".counter_max-page");

console.log(gallery_img[1].childNodes[1].style)

gallery_max_page.innerHTML = gallery_img.length

for(let i = 0; i < gallery_img.length; i++){
    gallery_img[i].addEventListener("click", () => {
        gallery_blk.classList.add("gallery-active");
        imgClone = gallery_img[i].childNodes[1].cloneNode();
        imgClone.classList.remove("gallery-pic")
        gallery_inner.appendChild(imgClone);
        gallery_current_page.innerHTML = i+1;
    })
}
for(let i = 0; i < gallery_back.length; i++){
    gallery_back[i].addEventListener("click", () => {
        gallery_blk.classList.remove("gallery-active");
        gallery_inner.innerHTML = "";
    })
}