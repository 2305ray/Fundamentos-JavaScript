let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, lista) {
    return lista.indexOf(Number(n)) != -1;
}

function adicionar() {  
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`; // Use crases aqui
        lista.appendChild(item);
        res.innerHTML = ''; // Limpa resultados anteriores
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Foca novamente no campo de entrada
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) maior = valores[pos];
            if (valores[pos] < menor) menor = valores[pos];
        }
        media = soma / tot;
        res.innerHTML = ''; // Limpa resultados anteriores
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`; // Use crases aqui
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`; // Use crases aqui
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`; // Use crases aqui
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`; // Use crases aqui
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`; // Use crases aqui
    }
}
