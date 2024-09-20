function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var Idade = ano - Number(fano.value);
        var gênero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        img.style.height = '250px';
        img.style.width = '250px';
        img.style.borderRadius = '50%';



        if (fsex[0].checked) { 
            // Homem
            gênero = 'Homem';
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos um ${gênero} com ${Idade} anos`;
            if (Idade > 1 && Idade <= 12) {
                //Criança
                img.setAttribute('src', 'criança-menino.jpg');
            } else if (Idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-homem.jpg');
            } else if (Idade < 60) {
                //Adulto
                img.setAttribute('src','adulto-homem.jpg');
            } else {
                //Idoso
                img.setAttribute('src','idoso-homem.jpg');
            }
        } else if (fsex[1].checked) { 
            // Mulher
            gênero = 'Mulher';
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos uma ${gênero} com ${Idade} anos`;
            if (Idade > 1 && Idade <= 12) {
                //Criança
                img.setAttribute('src', 'criança-menina.jpg');
            } else if (Idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-mulher.jpg');
            } else if (Idade < 60) {
                //Adulta
                img.setAttribute('src','adulta-mulher.jpg');
            } else {
                //Idosa
                img.setAttribute('src','idosa-mulher.jpg');
            }
        }
        res.appendChild(img); 
    }
}