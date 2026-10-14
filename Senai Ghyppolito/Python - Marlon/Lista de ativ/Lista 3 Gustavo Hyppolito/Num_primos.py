# -*- coding: UTF-8 -*-

print("Olá usuário, me de um número e eu vou analisar se ele é primo ou não.")
num = int(input("Me de um número"))
def primo(num):
    for pares in range(2, num):
        if num % pares == 0:
            print("O número", num, "não é primo")
            break
        else:
            print("O número", num, "é primo")
            break
primo(num)
