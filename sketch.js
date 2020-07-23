var xAvatar = 225
var yAvatar = 600
let xTotal = 450
let xMetade = 225
let menuTela = true
let fase1Tela = false
let instTela = false
let creditosTela = false
var xo1 = 0
var yo1 = 30
var xo2 = 0
var yo2 = 30
var xo3 = 0
var yo3 = 30
var xt = 0
var yt = 0
var tiro = false
var vidas = 3
var pontos = 0
var barreiradenivel = 5
var nivel = 1
var raioQ = 20
var raioB = 20
var selection = 480
let indice1 = 0
let indice2 = 0
let indice3 = 0
let bg
let avatar
let menuImage
let menuImage2

proparoxitonas = ["ÂNCORA", "ANÊMONA", "ÂNGULO", "ÂNIMO",
  "ANÔNIMO", "ANORÉXICO", "ANTÍDOTO", "ARQUÉTIPO", "ARQUIPÉLAGO",
  "ARTÍSTICO"
]
oxitonas = ["CAJU","TATU","PAJÉ","PATÊ"]
paroxitonas = ["ACÓRDÃO","BÊNÇÃO","ÍMÃ","ÓRFÃ","ÓRFÃO","ÓRGÃOS","SÓTÃO"]


function setup() {
  createCanvas(450, 650);
}
function preload() {
  avatar = loadImage('images/avatar.gif')
  bg = loadImage('images/bg.jpg')
  menuImage = loadImage('images/menu.jpg')
  menuImage2 = loadImage('images/menu2.jpg')

}

function draw() {
  imageMode(CORNER)
  background(menuImage2);
  if (menuTela == true) {
    menu()
  }
  if (fase1Tela == true) {
    fase1()
  }
  if (instTela == true) {
    inst()
  }
  if (creditosTela == true) {
    creditos()
  }
  if (vidas <= 0) {
    gameover()
  }
}

function menu() {
  imageMode(CORNER)
  background(menuImage)
  rectMode(CENTER)
  stroke(0, 0, 0, 0)
  stroke('blue')
  noFill()
  rect(xMetade, selection, 200, 40, 10)
}

function fase1() {
  //background
  imageMode(CORNER)
  background(bg)
  //avatar
  imageMode(CENTER)
  image(avatar, xAvatar, yAvatar, 80, 80)
  //status
  fill('blue')
  rectMode(CORNER)
  rect(0, 0, xTotal, 30)
  textSize(15)
  textAlign(LEFT)
  fill('white')
  text('Vidas: ' + vidas, 10, 20)
  text('Pontos: ' + pontos, 250, 20)
  text('Dificuldade: ' + nivel, 340, 20)
  //palavras
  noStroke()
  fill('white')
  textStyle(BOLD)
  textAlign(CENTER)
  text(proparoxitonas[indice1], xo1, yo1)
  text(oxitonas[indice2],xo2,yo2)
  text(paroxitonas[indice3],xo3,yo3)
  yo1 += 2
  yo2 += 2
  yo3 += 2
  if (yo1 > 640) {
    xo1 = random(80, 370)
    yo1 = 30
    indice1 = parseInt(random(0, 9))
  }
  if (yo2 > 640) {
    xo2 = random(80, 370)
    yo2 = 30
    indice2 = parseInt(random(0, 3))
  }
  if (yo3 > 640) {
    xo3 = random(80, 370)
    yo3 = 30
    indice3 = parseInt(random(0, 6))
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAvatar += 4
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAvatar -= 4
  }

  if (keyIsDown(CONTROL) && tiro == false) {
    xt = xAvatar
    yt = yAvatar
    tiro = true
  }
  if (tiro) {
    ellipse(xt, yt, 4, 4)
    yt = yt - 10
  }
  if (yt < 0) {
    tiro = false
  }
  if (dist(xo2, yo2, xt, yt) < 20) {
    pontos = pontos + 1
    xt = 0
    yt = 0
    xo2 = random(80, 370)
    yo2 = 30
    indice2 = parseInt(random(0, 3))

  }
  if (dist(xo1, yo1, xt, yt) < 20) {
    vidas -= 1
    xt = 0
    yt = 0
    xo1 = random(80, 370)
    yo1 = 30
    indice1 = parseInt(random(0, 9))

  }
  if (dist(xo3, yo3, xt, yt) < 20) {
    vidas -= 1
    xt = 0
    yt = 0
    xo3 = random(80, 370)
    yo3 = 30
    indice3 = parseInt(random(0, 6))

  }
  if (pontos > barreiradenivel) {
    nivel += 1
    barreiradenivel += 10
  }
  if (dist(xAvatar, yAvatar, xo1, yo1) < 30) {
    vidas -= 1
    xAvatar = xMetade
    xo1 = random(80, 370)
    yo1 = 30
    indice1 = parseInt(random(0, 9))
  }
  if (dist(xAvatar, yAvatar, xo2, yo2) < 30) {
    pontos = pontos + 1
    xo2 = random(80, 370)
    yo2 = 30
    indice2 = parseInt(random(0, 3))
  }
  if (dist(xAvatar, yAvatar, xo3, yo3) < 30) {
    vidas = vidas - 1
    xAvatar = xMetade
    xo3 = random(80, 370)
    yo3 = 30
    indice3 = parseInt(random(0, 6))
  }
}

function inst() {
  imageMode(CORNER)
  background(menuImage2)
  fill('white')
  noStroke()
  textStyle(BOLD)
  textSize(32)
  text("Instruções", xMetade, 100)
  textSize(20)
  textStyle(NORMAL)
  text("3° Ano do Fundamental\nPortuguês: EF03LP06",xMetade,150)
  textSize(14)
  textSize(20)
  textAlign(CENTER)
  text("\nResumo: No jogo você controlará um \n personagem que tenta acertar as palavras \n oxítonas com seu projétil, mas tendo \n que desviar das palavras paroxítonas e \n proparoxítonas.\n\nPara controlá-lo use as setas \n esquerda e direita e para atirar use\nCTRL.",xMetade,200)
  textSize(14)
  text("Pressione 'v' para voltar", xMetade, 610)
}

function creditos() {
  imageMode(CORNER)
  background(menuImage2)
  fill('white')
  noStroke()
  textSize(32)
  textAlign(CENTER)
  textStyle(BOLD)
  text("Créditos", xMetade, 100)
  textSize(14)
  textStyle(NORMAL)
  text("Pressione 'v' para voltar", xMetade, 610)
  textSize(20)
  text("Programador:\nLuiz Henrique Cavalcante da Silva",xMetade,225)
  text("Educador:\nEdilma Santos Teixeira",xMetade,350)
}


function gameover() {
  imageMode(CORNER)
  background(menuImage2)
  fill('white')
  textSize(27)
  textAlign(CENTER)
  text("GAME OVER", xMetade, 180)
  textSize(22)
  text("SCORE: " + pontos, xMetade, 210)
  textSize(14)
  text("Pressione 'r' para voltar", xMetade, 610)
}

function keyPressed() {
  if (key == "w" && selection > 480) {
    selection -= 50
  }
  if (key == "s" && selection < 550) {
    selection += 50
  }
  if (key == "Enter" && menuTela == true) {
    if (selection == 480) {
      menuTela = false
      fase1Tela = true
      instTela = false
      creditosTela = false
    }
    if (selection == 530) {
      menuTela = false
      fase1Tela = false
      instTela = true
      creditosTela = false
    }
    if (selection == 580) {
      menuTela = false
      fase1Tela = false
      instTela = false
      creditosTela = true
    }
  }
  if (vidas <= 0 && key === 'r') {
    menuTela = true
    fase1Tela = false
    instTela = false
    creditosTela = false
    vidas = 3
    pontos = 0
    nivel = 0
    barreiradenivel = 5
  }
  if (key === 'v') {
    if (instTela == true) {
      menuTela = true
      fase1Tela = false
      instTela = false
      creditosTela = false
      selection = 480
    }
    if (creditosTela == true) {
      menuTela = true
      fase1Tela = false
      instTela = false
      creditosTela = false
      selection = 480
    }
  }
}
//https://youtu.be/JlPFqKDSdfo, video 1
//https://youtu.be/8T_HE62OqO0, video 2
//https://youtu.be/CemDS59gRRU, video 3  