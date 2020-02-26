class Carta{
    constructor(palos,valor=[],letras){
      this.palos=palos;
      this.valor=valor;
      this.letras=letras;
      
    }
  }
  class Palo{
    constructor(figura){
      this.figura=figura;
    }
  }
  var palos = [new Palo("espadas"),new Palo("trebol"),new Palo("rojo"),new Palo("picas")];
  var letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
   var  valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   
  class Fabrica {
        mazo=[];
       Mezcalr=[];
        elemento;
    crearBarajas() {
      // insertar los valores al array
      palos.forEach(function (elementPalo) {
      letras.forEach(function (elementLetra, index) {
          if (index === 0) {
            this.mazo.push(new Carta(elementPalo, [1, 11], elementLetra));
            
        } else if (index => 9) {
            this.mazo.push(new Carta(elementPalo, [9], elementLetra));
        } else {
            this.mazo.push(new Carta(elementPalo, [index], elementLetra));
        }
    },this)
  },this)
        

  }
  mezclar(){
    while (this.Mezcalr.length < 52) {
      let valor = Math.floor(Math.random() * (52));
      this.elemento = this.Mezcalr.find(element => element == valor)
      let condicion = (this.elemento == undefined) ? this.Mezcalr.push(valor) : valor;
  }
  
  for (let i = 0; i < this.mazo.length - 1; i++) {
      this.elemento = this.mazo[this.Mezcalr[i]]
      this.mazo[this.Mezcalr[i]] = this.mazo[i]
      this.mazo[i] = this.elemento;
  }
  return this.mazo   
  }
  }
  class Juego extends Fabrica { 
    nuevaBaraja=[]
    contador=0;
    pedir(){
      this.nuevaBaraja.push(this.mazo[this.contador].valor+this.mazo[this.contador].palos.figura);
          this.contador++;
           this.validar()
          return this.nuevaBaraja;
          
    }
    verificar() {
      let filtro = this.nuevaBaraja.reduce(
        function(antes, ahora) {
            if (typeof(antes) == 'object') {
                if (antes > 10) {
                    return antes[0] + ahora;
                } else {
         return antes[1] + ahora;
                }
            } else {
                return antes + ahora;
            }
  
        })
  
    if (filtro == 21) {
        console.log('Ganaste! :)');
        document.getElementById("resultado").innerHTML="Ganaste,Felicidades!!";
    } else if (filtro < 21) {
        console.log('Pide otra vez, aun no llegas al 21');
        document.getElementById("resultado").innerHTML="Pide otra vez, aun no llegas al 21";
    } else if (filtro > 21) {
        console.log('Perdiste! :(');
        document.getElementById("resultado").innerHTML="Perdiste!!";
        alert("Perdiste la partida");
  
    }
    console.log('el valor de la suma es'+filtro);
    document.getElementById("suma").innerHTML=filtro;
      
    }
  }
 
  class Img extends Fabrica{
    constructor(img=[]) {
      this.img= img;
      img.push("asEspadas.png");
      img.push('2Espadas.png');
      img.push('3Espadas.jpg');
      img.push('4Espadas.png');
      img.push('5Espadas.jpg');
      img.push('6Espadas.jpg');
      img.push('7Espadas.png');
      img.push('8Espadas.png');
      img.push('9Espadas.png');
      img.push('10Espadas.png');
      img.push('JEspadas.jpg');
      img.push('QEspadas.jpg');
      img.push('KEspadas.jpg');
  
  }
  
  lanzarBrillo() {
      let aleatorio = Math.floor( Math.random() * this.img.length);
      let casilla = document.getElementById("carta");
      casilla.addEventListener('click', 
          casilla.innerHTML = '<img src="img/espadas/' + this.img[aleatorio]);
      return casilla;
  }
  }