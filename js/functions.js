window.onload = function(){
    console.log('sem erro')

    bdy = document.querySelector('#body')
    a = document.querySelector('#screen-button')
    b = document.querySelector('#circle')
    group = document.querySelector('.group')
    group2 = document.querySelector('.group2')
    getapp = document.querySelector('.get-app')
    logo = document.querySelector('.instagram-logo')

    a.addEventListener('click',clicar)

    function clicar (){
    bdy.className = 'body2'
    a.className = 'screen-button2'
    b.className = 'circle2'
    group.style.background = 'none'
    group2.style.background = 'none'
    getapp.style.color = "#ccc"
    logo.className = 'instagram-logo2'
    }
}


