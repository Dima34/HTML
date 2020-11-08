(function(){
    let inputList1 = document.querySelectorAll(".group1 input");
    let slider1 = document.querySelector(".slider1")
    let blockWidth1 = window.getComputedStyle(document.querySelector(".group1 label")).width
    let blockMargin1 = window.getComputedStyle(document.querySelector(".group1 label")).marginRight
    blockWidth1 = Number(blockWidth1.substr(0, blockWidth1.length-2)) + Number(blockMargin1.substr(0, blockWidth1.length-2));



    for(let i = 0; i < inputList1.length; i++){
        if(inputList1[i].checked == true){
            slider1.style.left = i * blockWidth1 + "px";
        }
        inputList1[i].addEventListener("click", ()=>{
            if(inputList1[i].checked == true){
                slider1.style.left = i * blockWidth1 + "px";
            }
        })
    }

    let inputList2 = document.querySelectorAll(".group2 input");
    let slider2 = document.querySelector(".slider2")
    let blockWidth = window.getComputedStyle(document.querySelector(".group1 label")).width
    let blockMargin = window.getComputedStyle(document.querySelector(".group1 label")).marginRight
    blockWidth = Number(blockWidth.substr(0, blockWidth.length-2)) + Number(blockMargin.substr(0, blockWidth.length-2));



    for(let i = 0; i < inputList2.length; i++){
        if(inputList2[i].checked == true){
            slider2.style.left = i * blockWidth + "px";
        }
        inputList2[i].addEventListener("click", ()=>{
            if(inputList2[i].checked == true){
                slider2.style.left = i * blockWidth + "px";
            }
        })
    }

    // Calc step

    let calcPage = document.querySelectorAll(".calc_step");
    let currentPage = 0;
    let nextBtn = document.querySelector(".next1");
    let steps = document.querySelectorAll(".calculator__step-header span");


    function ChangeStage(pageNum, steplist){
        for(let i = 0; i < steplist.length; i++){
                if(i == pageNum){
                    steplist[i].classList.add("text-active");
                }
                else{
                    steplist[i].classList.remove("text-active");
                }

        }
    }
    

    function ChangePage(pageNum, pageList){
        for(let i = 0; i < pageList.length; i++){
            if(i == pageNum){
                pageList[i].classList.add("visible");
            }
            else{
                pageList[i].classList.remove("visible");
            }
        }
        
    }
    ChangePage(currentPage,calcPage);
    ChangeStage(currentPage,steps)

    nextBtn.addEventListener("click", ()=>{
        currentPage ++;
        ChangePage(currentPage,calcPage)
        ChangeStage(currentPage,steps)
    })

    // Add serv

    let addServBlk = document.querySelector(".calculator__add-serv");
    let addServBtn = document.querySelector(".add-serv-btn");
    let addServeCloseBtn = document.querySelector(".add-serv_close");
    

    addServBtn.addEventListener("click", ()=>{addServBlk.classList.add("visible-fixed")});
    addServeCloseBtn.addEventListener("click", ()=>{addServBlk.classList.remove("visible-fixed")});


    // Dropdowns

    let about_header = document.querySelectorAll(".about_dropdown_header")
    let about_main = document.querySelectorAll(".about_dropdown_main")

    for(let i = 0; i < about_header.length; i++){
        about_header[i].addEventListener("click",() => {
            classlist = Object.values(about_main[i].classList)
            if(classlist.indexOf("about_dropdown_main-active") != -1){
                about_main[i].classList.remove("about_dropdown_main-active");
                about_header[i].classList.remove("dropdown_header_arrow-active");
            }
            else{
                about_main[i].classList.add("about_dropdown_main-active");
                about_header[i].classList.add("dropdown_header_arrow-active");
            }
        })
    }

    let qa_header = document.querySelectorAll(".qa_dropdown_header")
    let qa_main = document.querySelectorAll(".qa_dropdown_main")

    for(let i = 0; i < qa_header.length; i++){
        qa_header[i].addEventListener("click",() => {
            classlist = Object.values(qa_main[i].classList)
            if(classlist.indexOf("qa_dropdown_main-active") != -1){
                qa_main[i].classList.remove("qa_dropdown_main-active");
                qa_header[i].classList.remove("dropdown_header_arrow-active");
            }
            else{
                qa_main[i].classList.add("qa_dropdown_main-active");
                qa_header[i].classList.add("dropdown_header_arrow-active");
            }
        })
    }

}())

