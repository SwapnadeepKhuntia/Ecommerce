// sun light and dark light process
const body=document.querySelector("body");
const nav1=document.querySelector(".nav1");
const dark_light=document.querySelector(".dark_light");

dark_light.addEventListener("click",()=>{
    dark_light.classList.toggle("active");
    body.classList.toggle("dark");
})
