let col = document.getElementsByClassName('flex-column')[0]
let header = document.querySelector('header')
let check = false
if(col.classList.contains('d-none') && window.screen.width >= 768){
    col.classList.remove('d-none')
    cart.style.bottom = 8+'px'
    cart.style.right = 10+'px'
}
menu.onclick=()=>{   
    if(col.classList.contains('d-none')){   
    col.classList.remove('d-none')
    header.style.height = 250+'px'
    menu.style.top = 20+'px'
    cart.style.top = 20+'px'
    }else{
        col.classList.add('d-none')
        header.style.height = 100+'px'
        menu.style.top = 40+'px'
        cart.style.top = 40+'px'
    }
}
window.onresize = ()=>{
    if(window.screen.width >= 768 && col.classList.contains('d-none')){
    col.classList.remove('d-none')
    header.style.height = 200+'px'
    }
    if(window.screen.width < 768 && !col.classList.contains('d-none') && header.style.height != '250px' ){
        header.style.height = '250px'
    }
    if(window.screen.width >= 768 ){
        cart.style.bottom = 8+'px'
        cart.style.top = 162+'px'
        header.style.height = 200+'px'
    }
    if(window.screen.width < 768 ){
        cart.style.bottom = 180+'px'
        cart.style.top = 40+'px'
    }
}