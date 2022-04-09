let header = document.querySelector('header')
let click = false
menu.onclick=()=>{ 
    if(header.clientHeight <= 100){    
     click = true 
     colums.style.animation = 'none'
     colums.style.animation = 'appear 0.5s forwards normal'    
     header.style.animation = 'none'
     header.style.animation = 'header 0.5s forwards normal'
     
    }
     else{
        click = false
        colums.style.animation = 'none'
        colums.style.animation = 'disappear 0.5s forwards normal'        
        header.style.animation = 'none'
        header.style.animation = 'alt-header 0.5s forwards normal'
     }

}
menu.onmouseenter = ()=> path.style.fill = 'white'
menu.onmouseleave = ()=>{ if(!click){path.style.fill = '#787878'}}
let array = document.getElementsByClassName('mx-3 mb-md-0')
for (let iterator of array) {
    iterator.addEventListener('mouseenter', function(){iterator.style.color = 'white'})
    iterator.addEventListener('mouseleave', function(){iterator.style.color = '#787878'})
    
}
window.onresize = ()=>{
    if(window.screen.width >= 768 && window.screen.width <= 775){
        location.reload()
    }
}