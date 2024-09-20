function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var Idade = ano - Number(fano.value)
        var gênero = ""
        if (fsex[0].checked) {
        gênero = 'Homem'
         res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${gênero} com ${Idade} anos`
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma ${gênero} com ${Idade} anos`
    }
    
    }
}
