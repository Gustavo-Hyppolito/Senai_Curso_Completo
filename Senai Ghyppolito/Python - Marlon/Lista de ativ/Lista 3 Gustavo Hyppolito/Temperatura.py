# -*- coding: UTF-8 -*-

print("Olá usuário, me de a temperatura em Celsius e eu vou retornar a temperatura em Fahrenheit, ou Vice-versa.")

temp_atual = float(input("Me de a temperatura "))
temp_CF = input("Me de a temperatura em Celsius ou Fahrenheit, C ou F ")
def conta(temp_atual,temp_CF):
    if temp_CF == "C":
        conta = (temp_atual - 32) * 5 / 9
        print("A temperatura em Celsius é de", conta)
    elif temp_CF == "F":
        conta = 9 / 5 * temp_atual  + 32
        print("A temperatura em Fahrenheit é de", conta)

conta(temp_atual,temp_CF)
