document.addEventListener ("DOMContentLoaded" , ()=>{
    let header = document.querySelector(".header");
    let toggle = document.querySelector(".header__toggle");
    let line1 = document.querySelector(".toogle__line--1");
    let line2 = document.querySelector(".toogle__line--2");
    let line3 = document.querySelector(".toogle__line--3");
    let line4 = document.querySelector(".toogle__line--4");

toggle.addEventListener("click", ()=>{
    let visible = document.querySelector(".visible");
    if(!visible) {
        header.classList.add("visible");
        header.style.height = "330px";
        line1.style.top = "50%";
        line1.style.opacity = "0";
        line4.style.top = "50%";
        line4.style.opacity = "0";
        line2.style.transform = "rotate(45deg)";
        line3.style.transform = "rotate(-45deg)";
        
    }else{
        header.classList.remove("visible");
        header.style.height = "73.97px";
        line1.style.top = "5px";
        line1.style.opacity = "1";
        line4.style.top = "25px";
        line4.style.opacity = "1";
        line2.style.transform = "rotate(0deg)";
        line3.style.transform = "rotate(0deg)";
    };
});

});