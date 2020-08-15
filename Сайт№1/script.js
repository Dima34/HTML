menu.onclick = function myFunction(){
    var x = document.getElementById('myTopnav')

    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var btn = document.getElementById("topbutton")

window.addEventListener('scroll', function() {
    var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop>500){
        btn.className += " show";
    }
    else{
        btn.className = "topbutton";
    }
});