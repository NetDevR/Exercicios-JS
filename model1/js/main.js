function carregar(){
    var msg = window.document.getElementById("msg")
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom diaaa
        img.src = 'img/foto_manha.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tardee
        img.src = 'img/foto_tarde.png'
    } else{
        // Boa noitee
        img.src = 'img/foto_noite.png'
    }
    
}