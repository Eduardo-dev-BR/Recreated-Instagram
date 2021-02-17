window.onload = function(){
    console.log('sem erro')

    var a = document.querySelector('#screen-button')
    var b = document.querySelector('#circle')
    a.addEventListener('click',clicar)

    function clicar (){
    a.className = 'screen-button2'
    b.className = 'circle2'
    }

}


