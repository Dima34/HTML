document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        document.querySelector(".generator__right").classList.add("loaded")
    },1000)
    
})

const machineBlock = document.querySelector(".generator__main");

if(machineBlock){
    const machine = machineBlock.querySelector(".generator__machine");
    const screen = machineBlock.querySelector(".generator__screen video");
    const presets = machineBlock.querySelectorAll(".right-preset");
    
    let states = [
        "./video/0-1.mp4",
        "./video/1-2.mp4",
        "./video/2-3.mp4",
        "./video/3-4.mp4",
        "./video/4-5.mp4",
        "./video/5-0.mp4",
    ]

    function writeState(state){
        machineBlock.dataset.state = state;
    }

    function getState(){
        return Number(machineBlock.dataset.state)
    }

    function nextState(state, stateLength = states.length){
        if(state < stateLength-1){
            state++
            writeState(state, machine)
        } else{
            writeState(0, machine)
        }
    }

    function setVideo(){
        let videoURL = states[getState()]
        screen.setAttribute("src",videoURL);
    }  
    
    function playVideo(){
        screen.play();
    }

    function activePreset(){
        presets.forEach((el)=>{
            el.classList.remove("active");
            if(Number(el.dataset.num) == getState()){
                el.classList.add("active");
            }
        })
    }

    

    machine.addEventListener("click", ()=>{
        machine.play();
        nextState(getState());
        setVideo()
        playVideo()
        activePreset()
    })
}