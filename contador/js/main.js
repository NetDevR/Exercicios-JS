function contar(){
    var inicio = document.getElementById('txtinicio')
    num_inicio = Number(inicio.value);
    var fim = document.getElementById('txtfinal')
    num_final = Number(final.value);
    var passos = document.getElementById('txtpassos')
    num_passos = Number(passos.value);

    if(inicio.value.lenth == 0 || fim.value.lenth == 0 || passos.value.lenth == 0){
        window.alert('ERRO! Dados estão comprometidos')
    } else{
        alert('Td ok!')
    }

}

