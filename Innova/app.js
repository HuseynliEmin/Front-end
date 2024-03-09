let icon = document.querySelector('.burger');
let nav = document.querySelector('.nav-burger');

icon.addEventListener("click",function(){
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    }
    else{
        nav.style.display = 'none'
    }
})
