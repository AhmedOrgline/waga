let btn_menu = document.querySelector(".btn-menu");
let nav = document.querySelector("nav");

document.addEventListener('click' , function(e){
    if(e.target.className === "btn-menu none" || e.target.className === "btn-menu none open"){
        btn_menu.classList.toggle("open");
        if(e.target.className === "btn-menu none open"){
            nav.style.cssText = "height : auto ; opacity : 1 ; top: 95%";
            btn_menu.children[1].style.opacity='0';
            btn_menu.children[0].style.cssText = "transform: rotateZ(45deg)translate(8px,8px)";
            btn_menu.children[2].style.cssText = "transform: rotateZ(-45deg)translate(8px,-8px)";
        }
        else{
            nav.style.cssText = "height : 0 ; opacity : 0 ; top : calc(100% + 10px)";
            btn_menu.children[1].style.opacity='1';
            btn_menu.children[0].style.cssText = "transform: rotateZ(0deg)translate(0px,0px)";
            btn_menu.children[2].style.cssText = "transform: rotateZ(0deg)translate(0px,0px)";
        }
    }
    else{
        if(btn_menu.className === "btn-menu none open"){
            btn_menu.classList.remove("open");
            nav.style.cssText = "height : 0 ; opacity : 0 ; calc(100% + 10px)";
            btn_menu.children[1].style.opacity='1';
            btn_menu.children[0].style.cssText = "transform: rotateZ(0)translate(0,0)";
            btn_menu.children[2].style.cssText = "transform: rotateZ(0)translate(0,0)";
        }
    }
});