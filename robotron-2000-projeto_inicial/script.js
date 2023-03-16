var imagens = ["img/robotron-preto.png", "img/robotron-azul.png", "img/robotron-amarelo.png", "img/robotron-rosa.png", "img/robotron-vermelho.png", "img/robotron-branco.png"];
var indice = 0;

var foto = document.querySelector('.robo');

function avancar() {
  foto.src = imagens[indice]
  indice++;
  if (indice >= imagens.length) {
    indice = 0;
  }

}

function regredir() {
  if (indice == 0) {
    indice = 6;
  }
  indice--;
  foto.src = imagens[indice];

}
