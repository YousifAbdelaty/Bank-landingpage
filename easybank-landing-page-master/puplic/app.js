const nav_bar=document.querySelector(".header-nav");
const bar=document.querySelector(".bar");
const close=document.querySelector(".close");
bar.addEventListener("click",()=>{
nav_bar.classList.add("move-bar");
bar.style.display = "none";
close.style.display = "block";
})
close.addEventListener("click",()=>{
nav_bar.classList.remove("move-bar");
close.style.display = "none";
bar.style.display = "block";
})