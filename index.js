const menu = document.getElementById('hamburger')

const list = document.getElementById('menu')


menu.onclick = ()=> {
    if(list.classList.contains('inactive')){
        list.classList.remove('inactive')
        list.classList.add('active')
    
    }else{
        list.classList.remove('active')
        list.classList.add('inactive')
    }
}

