const burger=document.querySelector(".hamburger_menubar")
const menu=document.querySelector(".navbar_content-2")
const icon=document.querySelector(".fa-bars")
burger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    icon.classList.toggle("fa-times")
})
