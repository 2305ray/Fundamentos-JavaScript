var agora = new Date()
var diasem = agora.getDay()

/* é assim que o JS conta os dias da semana
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado

Se colocar o console.log(diasem) ele vai executar o dia da semana que você está só que como número
*/



// o switch foi usado pois é um caso mt específico, que se for tal dia, faz um bloco, se for outro, faz outro bloco.
switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
        // nesse caso é opcional colocar o default e o último break, pois, não tem mais código a ser lido.
}