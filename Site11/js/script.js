let blog_blk = document.querySelector(".blog");
let blog_blks = document.querySelectorAll(".blog .blog__blks_blk");



//
//  First line
//
let first_line_blks = document.createElement('div');
first_line_blks.className = "blog__first-line-blks";

// First line small block append
let first_line_blks_s = document.createElement('div');
first_line_blks_s.className = "blog__blks-small";
first_line_blks_s.append(blog_blks[0])

first_line_blks.append(first_line_blks_s);

// First line big block append
let first_line_blks_b = document.createElement('div');
first_line_blks_b.className = "blog__blks-big";
first_line_blks_b.append(blog_blks[1])

first_line_blks.append(first_line_blks_b);

//
//  All another blocks
//

let new_blog_blks = document.createElement('div')
new_blog_blks.className = "blog__blks";

let new_blog_blks_b = document.createElement('div');
new_blog_blks_b.className = "blog__blks-big";

let new_blog_blks_s = document.createElement('div');
new_blog_blks_s.className = "blog__blks-small";

for(let i = 2; i < blog_blks.length; i++){

    if(i%2==0){
        new_blog_blks_b.append(blog_blks[i]);
    }
    else{
        new_blog_blks_s.append(blog_blks[i]);
    }

}

new_blog_blks.append(new_blog_blks_b)
new_blog_blks.append(new_blog_blks_s)

blog_blk.append(first_line_blks);
blog_blk.append(new_blog_blks);


//
// Ticker block duplicator
//

let blockAmount = 10;
let Slider1 = document.querySelector(".ticker_slider");
let Slide1 = document.querySelector(".slide");
console.log(Slider1)
console.log(Slide1)

let Slider2 = document.querySelector(".ticker_slider1");
let Slide2 = document.querySelector(".slide1");

for(let i = 0; i < blockAmount-1; i++){
    copy = Slide1.cloneNode(true);
    Slider1.append(copy)
    copy = Slide2.cloneNode(true);
    Slider2.append(copy)
}

//
// Auto margin bottom
//

let block_containers = document.querySelectorAll(".ways__right_block")

console.log(block_containers)

for(let i = 0; i < block_containers.length; i+=5){
    block_containers[i].style.margin = "0 0 57px 0px";
}
for(let i = 1; i < block_containers.length; i+=5){
    block_containers[i].style.margin = "0px";
}
for(let i = 2; i < block_containers.length; i+=5){
    block_containers[i].style.margin = "0 0 37px 0px";
}
for(let i = 3; i < block_containers.length; i+=5){
    block_containers[i].style.margin = "0 0 19px 0px";
}
