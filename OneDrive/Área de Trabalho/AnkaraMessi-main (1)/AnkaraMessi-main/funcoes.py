import pygame
from tkinter import simpledialog

def start(tela, ranking, preto, branco, fundoStart, fonteStart, fonte, relogio, jogar):
    nome = simpledialog.askstring("Messi Melhor", "Nome Completo:")
    
    while True:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                quit()
            elif evento.type == pygame.MOUSEBUTTONDOWN:
                if buttonStart.collidepoint(evento.pos):
                    jogar(nome)
                elif buttonRanking.collidepoint(evento.pos):
                    ranking()

        tela.fill(branco)
        tela.blit(fundoStart, (0, 0))
        buttonStart = pygame.draw.rect(tela, preto, (35, 482, 750, 100), 0)
        buttonRanking = pygame.draw.rect(tela, preto, (35, 50, 200, 50), 0, 30)
        textoRanking = fonte.render("Ranking", True, branco)
        tela.blit(textoRanking, (90, 50))
        textoStart = fonteStart.render("START", True, branco)
        tela.blit(textoStart, (330, 482))

        pygame.display.update()
        relogio.tick(60)