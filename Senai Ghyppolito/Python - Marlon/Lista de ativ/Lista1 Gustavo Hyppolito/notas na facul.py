#-*- coding: UTF-8 -*-

nota1 = float(input("Digite sua primeira nota"))
nota2 = float(input("Digite sua segunda nota"))
media = (nota1 + nota2 )/2

if media >= 7.0 and media <= 10.0:
    print("Parabéns aprovado sua nota foi:", media)
elif media <=2.9:
    print("Reprovado sua nota foi:", media)
elif media >= 3.0:
    print("Recuperação sua nota foi",media)
elif media >= 11:
    print("Error notas não foram corretamente digitadas")
