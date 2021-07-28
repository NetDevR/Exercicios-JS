function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfinal')
    var passos = document.getElementById('txtpassos')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('ERRO! Dados estão comprometidos')
    } else{
        res.innerHTML = ('Contando: ')
        let inicio_num = Number(inicio.value)
        let fim_num = Number(fim.value)
        let passsos_num = Number(passos.value)

        for(var c = 1; c <= fim_num ; c += p){
            res.innerHTML += `${c} `
        }

    }

}

