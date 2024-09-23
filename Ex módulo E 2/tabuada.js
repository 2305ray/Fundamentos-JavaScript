function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    // Verifica se o campo está vazio
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''; // Limpa o conteúdo anterior

        // Gera a tabuada
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`; // Usa 'n' ao invés de 'num'
            tab.appendChild(item);
            c++;
        }
    }
}