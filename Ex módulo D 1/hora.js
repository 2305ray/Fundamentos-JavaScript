
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes()
    var sec = data.getSeconds()
    
    // Adicionando formatação para dois dígitos
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`

   

    if (hora >= 0 && hora < 12) {
        img.src="manhã.jpg";
        // Bom dia!
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg';
        document.body.style.background = '#D2691E'
         document.body.style.transitionDuration = "3s"
        // Boa tarde!
    } else {
        img.src = 'noite.jpg';
        document.body.style.background = "#515154"
         document.body.style.transitionDuration = "3s"
        // Boa noite!
    }
}