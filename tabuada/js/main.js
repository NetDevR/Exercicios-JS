function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfinal')
    var passos = document.getElementById('txtpassos')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('ERRO! Dados estão comprometidos')
        res.innerHTML('Impossivel contar')
    } else{
        res.innerHTML = ('Contando: <br>')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0){
            window.alert('Passo inválido. Considerando passo 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for( let c = 1; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }else{
            //Contagem Decrescente
            for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            

        }
        res.innerHTML += `\u{1F6A9}`

    }
}
