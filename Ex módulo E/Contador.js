function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    // Verifica se os campos estão preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        return; // Sai da função se os dados estiverem faltando
    }

    // Configura a contagem
    res.innerHTML = 'Contando...';
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    // Verifica se o passo é válido
    if (p <= 0) {
        window.alert('Passo inválido!');
    }

    // Realiza a contagem
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`;
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`;
        }
    }
    
    res.innerHTML += `\u{1F3C1}`; // Adiciona a bandeira ao final
}