function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        txt.innerHTML = `Bom dia!`
    } else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde.png'
        txt.innerHTML = `Boa tarde!`
        document.body.style.background = '#b9846f'
    } else{
        //Boa noite
        img.src = 'noite.png'
        txt.innerHTML = `Boa noite!`
        document.body.style.background = '#515154'
    }
    
}