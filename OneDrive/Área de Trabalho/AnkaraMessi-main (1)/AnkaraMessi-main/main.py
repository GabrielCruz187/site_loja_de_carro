import pygame
import random
from tkinter import simpledialog
from funcoes import start

pygame.init()

relogio = pygame.time.Clock()
icone  = pygame.image.load("Recursos/Icone.jpg")
iron = pygame.image.load("Recursos/AnkaraMessi.png")
fundo = pygame.image.load("Recursos/Bernabeu.jpg")
fundoStart = pygame.image.load("Recursos/start.jpg")
fundoVitoria = pygame.image.load("Recursos/MDM.webp") 
fundoDead = pygame.image.load("Recursos/Messifim.jpg")
BolaDeouro = pygame.image.load("Recursos/Bola.png")
missel = pygame.image.load("Recursos/Cassilas.png")
pygame.mixer.music.load("Recursos/Ankara Messi Kara Messi.mp3")
musica_vitoria = "Recursos/musica_vitoria.mp3"


fundo_movel = pygame.image.load("Recursos/RonaldoBDO.png")


objeto_que_cai = pygame.image.load("Recursos/Bola.png")

screen_width = 800
screen_height = 600
tela = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Iron Man do Marcão")
pygame.display.set_icon(icone)
fonte = pygame.font.SysFont("comicsans", 28)
fonteStart = pygame.font.SysFont("comicsans", 55)
fonteMorte = pygame.font.SysFont("arial", 120)

branco = (255, 255, 255)
preto = (0, 0, 0)
amarelo = (255, 255, 0)

def jogar(nome):
    pygame.mixer.music.play(-1)
    posicaoXPersona = 350
    posicaoYPersona = 400
    movimentoXPersona  = 0
    movimentoYPersona  = 0
    posicaoXMissel = 400
    posicaoYMissel = -240
    velocidadeMissel = 4
    pontos = 0
    larguraPersona = 90 
    alturaPersona = 190
    larguraMissel = 150
    alturaMissel = 83
    dificuldade = 20
    
    raio_bolinha = 30
    crescendo = True

    
    posicaoXFundoMovel = 0
    velocidadeFundoMovel = 2

    
    larguraObjeto = objeto_que_cai.get_width()
    alturaObjeto = objeto_que_cai.get_height()
    posicaoXObjeto = random.randint(0, screen_width - larguraObjeto)
    posicaoYObjeto = -alturaObjeto
    velocidadeObjeto = 5

    while True:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                quit()
            elif evento.type == pygame.KEYDOWN and evento.key == pygame.K_RIGHT:
                movimentoXPersona = 10
            elif evento.type == pygame.KEYDOWN and evento.key == pygame.K_LEFT:
                movimentoXPersona = -10
            elif evento.type == pygame.KEYUP and evento.key == pygame.K_RIGHT:
                movimentoXPersona = 0
            elif evento.type == pygame.KEYUP and evento.key == pygame.K_LEFT:
                movimentoXPersona = 0
                
        posicaoXPersona = posicaoXPersona + movimentoXPersona            
        posicaoYPersona = posicaoYPersona + movimentoYPersona            
        
        if posicaoXPersona < 0:
            posicaoXPersona = 0
        elif posicaoXPersona > screen_width - larguraPersona:
            posicaoXPersona = screen_width - larguraPersona
            
        if posicaoYPersona < 0:
            posicaoYPersona = 0
        elif posicaoYPersona > screen_height - alturaPersona:
            posicaoYPersona = screen_height - alturaPersona
        
        tela.fill(branco)
        tela.blit(fundo, (0, 0))
        
      
        posicaoXFundoMovel += velocidadeFundoMovel
        if posicaoXFundoMovel > screen_width or posicaoXFundoMovel < -fundo_movel.get_width():
            velocidadeFundoMovel = -velocidadeFundoMovel
        tela.blit(fundo_movel, (posicaoXFundoMovel, 0))

        tela.blit(iron, (posicaoXPersona, posicaoYPersona))
        
        posicaoYMissel = posicaoYMissel + velocidadeMissel
        if posicaoYMissel > screen_height:
            posicaoYMissel = -alturaMissel
            velocidadeMissel += 1
            posicaoXMissel = random.randint(0, screen_width - larguraMissel)
            
        tela.blit(missel, (posicaoXMissel, posicaoYMissel))
        
        
        posicaoYObjeto += velocidadeObjeto
        if posicaoYObjeto > screen_height:
            posicaoXObjeto = random.randint(0, screen_width - larguraObjeto)
            posicaoYObjeto = -alturaObjeto

        tela.blit(objeto_que_cai, (posicaoXObjeto, posicaoYObjeto))

       
        hitbox_persona = pygame.Rect(posicaoXPersona, posicaoYPersona, larguraPersona, alturaPersona)
        hitbox_objeto = pygame.Rect(posicaoXObjeto, posicaoYObjeto, larguraObjeto, alturaObjeto)
        
        if hitbox_persona.colliderect(hitbox_objeto):
            pontos += 1
            posicaoXObjeto = random.randint(0, screen_width - larguraObjeto)
            posicaoYObjeto = -alturaObjeto
        
        texto = fonte.render(nome + " - Pontos: " + str(pontos), True, branco)
        tela.blit(texto, (10, 10))
        
        
        hitbox_missel = pygame.Rect(posicaoXMissel, posicaoYMissel, larguraMissel, alturaMissel)
        
        if hitbox_persona.colliderect(hitbox_missel):
            dead(nome, pontos)
        
        if crescendo:
            raio_bolinha += 1
            if raio_bolinha >= 50:
                crescendo = False
        else:
            raio_bolinha -= 1
            if raio_bolinha <= 30:
                crescendo = True
        
        pygame.draw.circle(tela, amarelo, (750, 50), raio_bolinha)
        
        if pontos == 10:
            pygame.image.load("Recursos/MDM.webp")

        pygame.display.update()
        relogio.tick(60)   
        
        pygame.display.update()
        relogio.tick(60)                
        
def dead(nome, pontos):
    pygame.mixer.music.stop()
   
    jogadas  = {}
    try:
        arquivo = open("historico.txt", "r", encoding="utf-8")
        jogadas = eval(arquivo.read())
        arquivo.close()
    except:
        arquivo = open("historico.txt", "w", encoding="utf-8")
        arquivo.close()
 
    jogadas[nome] = pontos   
    arquivo = open("historico.txt", "w", encoding="utf-8") 
    arquivo.write(str(jogadas))
    arquivo.close()
    
    while True:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                quit()
            elif evento.type == pygame.KEYDOWN and evento.key == pygame.K_RETURN:
                jogar(nome)
            elif evento.type == pygame.MOUSEBUTTONDOWN:
                if buttonStart.collidepoint(evento.pos):
                    jogar(nome)
                    
        tela.fill(branco)
        tela.blit(fundoDead, (0, 0))
        buttonStart = pygame.draw.rect(tela, preto, (35, 482, 750, 100), 0)
        textoStart = fonteStart.render("RESTART", True, branco)
        tela.blit(textoStart, (400, 482))
        textoEnter = fonte.render("Press enter to continue...", True, branco)
        tela.blit(textoEnter, (60, 482))
        pygame.display.update()
        relogio.tick(60)

def ranking():
    estrelas = {}
    try:
        arquivo = open("historico.txt", "r", encoding="utf-8")
        estrelas = eval(arquivo.read())
        arquivo.close()
    except:
        pass
    
    nomes = sorted(estrelas, key=estrelas.get, reverse=True)
    print(estrelas)
    while True:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                quit()
            elif evento.type == pygame.MOUSEBUTTONDOWN:
                if buttonStart.collidepoint(evento.pos):
                    start()

        tela.fill(preto)
        buttonStart = pygame.draw.rect(tela, preto, (35, 482, 750, 100), 0)
        textoStart = fonteStart.render("BACK TO START", True, branco)
        tela.blit(textoStart, (330, 482))
        
        posicaoY = 50
        for key, nome in enumerate(nomes):
            if key == 13:
                break
            textoJogador = fonte.render(nome + " - " + str(estrelas[nome]), True, branco)
            tela.blit(textoJogador, (300, posicaoY))
            posicaoY = posicaoY + 30
        
        pygame.display.update()
        relogio.tick(60)



start(tela, ranking, preto, branco, fundoStart, fonteStart, fonte, relogio, jogar)