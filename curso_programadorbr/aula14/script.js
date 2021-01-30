var x = 7;

console.log(x);

function speak() {
    console.log(this.sound);
}

let dog = {
    sound: 'au au',
    speak: function () {
        console.log(this.sound);
    }   
}

let cat = {
    sound: 'miau',
    speak: function () {
        console.log(this.sound);
    }   
}

dog.speak();
cat.speak();

let binded = speak.bind(dog);

binded();

function dobro(x){
    return (x*2);
}

let dobrar = function(x){
    return (x*2);
}

let metade = x => x / 2;

let expo = function (){
    return this.x * this.x;
}

let numero = {
    x: 25,
    d: expo
}

document.write(dobro(5)+'</br>');
document.write(dobrar(8)+'</br>');
document.write(metade(8)+'</br>');
document.write(numero.d()+'</br>');


// callback


function ola(){
    return ('olá')
}



function saudacao(s, nome){
    return s() + " " + nome;
}

document.write(saudacao(ola, "Gilcemar")+'</br>');
