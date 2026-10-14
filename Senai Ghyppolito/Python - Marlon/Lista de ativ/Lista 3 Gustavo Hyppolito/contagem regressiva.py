# -*- coding: UTF-8 -*-

tempo = int(input("Vamos fazer a contagem regressiva de um evento, me de a quatidade de tempo (segundos)"))

def contagem (tempo):
     for segundos in range(tempo, -1, -1):
         print (segundos)
contagem(tempo)
print('Feliz ano novo')

