function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfinal')
    var passos = document.getElementById('txtpassos')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('ERRO! Dados estão comprometidos')
    } else{
        res.innerHTML = ('Contando: ')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        for( let c = 1; c <= f; c += p){
            res.innerHTML += `${c} `
        }

    }

}

