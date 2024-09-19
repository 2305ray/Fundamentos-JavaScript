
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 19

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src="manha1.png";
        // Bom dia!
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde1.png';
        document.body.style.background = '#D2691E'
        // Boa tarde!
    } else {
        img.src = 'noite1.png';
        document.body.style.background = "#515154"
        // Boa noite!
    }
}