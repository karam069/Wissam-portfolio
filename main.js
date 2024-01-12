let topBtn = document.getElementById("top-scroll");
let a1 = document.getElementById("a1");

window.onscroll = function(){
    if(window.scrollY >= 1400){
        topBtn.style.display = "block";
    } 
    else{
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth",
    });
}