function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =  new Date()
    var hora =  data.getHours()
    var minuto = data.getMinutes()
    var diaSem = data.getDay()
    
    switch (diaSem){
        case 0:
            msg.innerHTML = `Hoje é domingo, e são exatamente: ${hora} horas e ${minuto} minutos` 
        break
      
        case 1:
            msg.innerHTML = `Hoje é Segunda, e são exatamente: ${hora} horas e ${minuto} minutos`
        break

        case 2:
            msg.innerHTML = `Hoje é terça, e são exatamente: ${hora} horas e ${minuto} minutos`
        break

        case 3:
            msg.innerHTML = `Hoje é quarta, e são exatamente: ${hora} horas e ${minuto} minutos`
        break

        case 4:
            msg.innerHTML = `Hoje é quinta, e são exatamente: ${hora} horas e ${minuto} minutos`
        break

        case 5:
            msg.innerHTML = `Hoje é sexta, e são exatamente: ${hora} horas e ${minuto} minutos`
        break

        case 6:
            msg.innerHTML = `Hoje é sábado, e são exatamente: ${hora} horas e ${minuto} minutos`
        break

        default:
            'Dia inválido'

    }

    if(hora < 5){
        img.src = 'madruga.png'
        document.body.style.background = '#000'
    } else if (hora < 12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#c66b3a'
    } else if(hora <= 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#8d4336'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#012748'
    }
    

}