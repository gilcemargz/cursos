function mostraControls(){
    var imagens = document.getElementsByClassName("btn_control")

    for (let index = 0; index < imagens.length; index++) {
        const element = imagens[index];
        element.hidden = false;
    }

}
function escondeControls(){
    var imagens = document.getElementsByClassName("btn_control")

    for (let index = 0; index < imagens.length; index++) {
        const element = imagens[index];
        element.hidden = true;
    }
}

function mudarTempo(acao){
    /** @type {HTMLVideoElement} */
    let video = document.querySelector("video");
    let time = video.currentTime;
    
    if (acao==='+') {
        time += 15;
    } else {
        time -= 15;
    };

    video.currentTime = time;
}

function voltar(){
    mudarTempo('-')
}

function avancar(){
    mudarTempo('+')
}

function mudarVolume(acao){
    /** @type {HTMLVideoElement} */
    let video = document.querySelector("video")
    let volume = video.volume

    console.log(volume)
    if (acao==='up') {
        volume += 0.05
    } else {
        volume -= 0.05
    }

    if (volume > 1) {
        volume = 1
    } else if (volume < 0) {
                volume = 0
            }

    video.volume = volume
}

function aumentarVolume(){
    mudarVolume('up')
}

function diminuirVolume(){
    mudarVolume('down')
    setTimeout(function() {
        // You are now in a hold state, you can do whatever you like!
      }, 500);
}

function play(){
    
    /** @type {HTMLVideoElement} */
    let video = document.querySelector("video")

    video.play()

}

function pause(){
    /** @type {HTMLVideoElement} */
    let video = document.querySelector("video")

    video.pause()
    
    
    
}


