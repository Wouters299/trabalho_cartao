function hora() {
    
    //executa cada 1000 milissegundos
    interval = setInterval(() => {
    //Chamando os IDs do HTML por QuerysSelector 
        var tempo = document.querySelector ('div#tempo')
        var imagem = document.querySelector ('img#foto')
        var agora = document.querySelector ('div#dia')
        var dia_semana = document.querySelector('div#dia_sem')
    //Chamando a hora atual
        var instante = new Date()
        var hora = instante.getHours()
        var instante = new Date()
        var minuto = instante.getUTCMinutes()
        var instante = new Date()
        var segundo = instante.getSeconds()
        
    //Acrescentando o numero 0 enquanto minuto e segundo são representados por 1 caracter
        var hora_formatada = new String(hora)
        var minuto_formatado = new String(minuto)
        var segundo_formatado = new String(segundo)

        if(segundo_formatado.length == 1) segundo = "0" + segundo
        if(minuto_formatado.length == 1) minuto = "0" + minuto
        if(hora_formatada.length == 1) hora = "0" + hora 
    //Chamando a data atual
        var data = new Date()
        var dia = data.getDate()
        var data = new Date()
        var mes = data.getMonth() + 1
        var data = new Date()
        var ano = data.getUTCFullYear()
    //Acrescentando o numero 0 enquanto dia e mes são representados por 1 caracter
        var Dia_formatado = new String(dia);
        var Mes_formatado = new String(mes);

        if(Dia_formatado.length == 1) dia = "0" + dia
        if(Mes_formatado.length == 1) mes = "0" + mes
    //switch case para nomear os dias da semana
        var hoje  = new Date()
        var dia_sem = hoje.getDay()
    
        switch(dia_sem) {
            case 0:
                dia_sem = 'Domingo';
                break;
            case 1:
                dia_sem = 'Segunda-Feira';
                break;
            case 2:
                dia_sem = 'Terça-Feira';
                break;    
            case 3:
                dia_sem = 'Quarta-Feira';
                break;
            case 4:
                dia_sem = 'Quinta-Feira';
                break;
            case 5:
                dia_sem = 'Sexta-Feira';
                break;
            case 6:
                dia_sem = 'Sábado';
    }
    // Faz hora, data e dia da semana aparecer na tela
        tempo.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`;
        agora.innerHTML = ` dia ${dia}/${mes}/${ano}`;
        dia_semana.innerHTML = `Hoje é ${dia_sem}, `;
    // Altera as fotos da parte do dia conforme a hora
        if (hora >= 6 && hora <= 7) {
            imagem.src = 'img/manha.jpeg';
        } else if(hora >= 8 && hora <= 17) {
            imagem.src = 'img/dia.jpeg';
        } else if(hora >= 18 && hora <= 19){
            imagem.src = 'img/tarde.jpeg';
        } else{
            imagem.src = 'img/noite.jpeg';  
        }
    }, 1000);    
    
}
