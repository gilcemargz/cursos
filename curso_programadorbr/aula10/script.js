function calcular(){
    /**@type {HTMLInputElement} */
    var adultos = Number(document.querySelector("#adulto").value);
    /**@type {HTMLInputElement} */
    var criancas = Number(document.querySelector("#crianca").value);
    /**@type {HTMLInputElement} */
    var duracao = Number(document.querySelector("#duracao").value);
    /**@type {HTMLDivElement */
    var div = document.querySelector("#main");

    var resultado = document.getElementsByTagName("p")

    console.log(resultado)

    for (let index = 0; index < resultado.length; ) {
        const element = resultado[index];
        div.removeChild(element)
        
    }
    
    /*resultado.forEach(element => {
        document.removeChild(element)
    });*/

    var valores = []

    var carne
    var cerveja
    var bebida
    var pessoas = adultos + (criancas * 0.5)
    

    carne = (duracao < 6 ? pessoas * 0.4 : pessoas * 0.65).toFixed(2)
    cerveja =Math.ceil((duracao < 6 ? adultos * 1200 : adultos * 2000) / 355)
    bebida = Math.ceil((duracao < 6 ? pessoas * 1000: pessoas * 1500) / 2000)

    valores.push(['carne', carne, 'Kg de carne'])
    valores.push(['cerveja', cerveja, 'latas de cerveja'] )
    valores.push(['bebida', bebida, 'garrafas de 2l de bebida'])
    
    for (let index = 0; index < valores.length; index++) {
        var resultado = document.createElement("p")

        resultado.id = valores[index][0]
        resultado.innerHTML = `${valores[index][1]} ${valores[index][2]}  <br>`
        div.appendChild(resultado)
        
    }

}