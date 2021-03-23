
//detecter lorsquuon scolle 
window.onscroll = function() { sticky() };


//recuperer les Elements 
let header = document.getElementById("sticky-header");
let stickycomponent = header.offsetTop;

// faire la fonction
function sticky() {
    if(window.pageYOffset > stickycomponent){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky");
    }
}
