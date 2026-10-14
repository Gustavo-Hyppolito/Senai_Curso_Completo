#-*- coding: UTF-8 -*-

nota1 = float(input("Digite sua primeira nota"))
nota2 = float(input("Digite sua segunda nota"))
nota3 = float(input("digite sua terceira nota"))
faltas = float(input(" digite seu número de faltas"))
media = (nota1 + nota2 + nota3)/3


if media >= 7.0 and faltas < 20:
    print("Parabéns aprovado")
elif media >= 7.0 and faltas > 20:
    print("Reprovado por faltas")
elif media < 7.0 and faltas < 20:
    print("Reprovado por causa de nota")
    


    
