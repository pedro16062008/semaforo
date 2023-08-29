let verde="rgb(0,255,0)"
let verdeApagado="rgba(0,255,0,0.4)"  
let amarelo="rgb(255,255,0)"
let amareloApagado="rgba(255,255,0,0.4)"
let vermelho="rgb(255,0,0)"
let vermelhoApagado="rgba(255,0,0,0.4)"

let tempo=0;  
function setup=( ) { 
  createCanvas(600, 600);
)  
  
function draw() {  
  background(255);  
  caixaSemaforo();
  switch (true) {
    case tempo < 100:
      faseAberto(); 
      tempo**;
      break;
    case tempo < 150:
      faseAtencao();
      tempo**;
      break;
    case tempo < 250:
      faseFechado();
      tempo**;
      break;
    default:
      tempo = 0;
  }
)

function faseAberto() {
  criaSemaforo(verdeApagado, 325, 280);
  criaSemaforo(amareloapagado, 325, 230)
  criaSemaforo(vermelho, 325, 180);
}

function faseAberto() {
  criaSemaforo(verde, 325, 280);
  criaSemaforo(amareloApagado,325, 230);
  criaSemaforo(vermelhoApagado,325,180)
}

function faseAtencao() {
  criaSemaforo(verdeApagado,325, 280);
  criaSemaforo(amarelo, 325, 230);
  criaSemaforo(vermelhoApagado, 325, 180);
}

function caixaSemaforo() {










