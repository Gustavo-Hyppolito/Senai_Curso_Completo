# -*- coding: UTF-8 -*-

 
raio = 0
altura = 0
raio = float(input("Me de o raio do seu circulo"))
altura = float(input("Me de a altura do seu circulo"))
resultado_r = raio * raio 
pi = 3.14
def volume (resultado_r, altura, pi):
    return ( resultado_r * altura * pi)

total = (volume(resultado_r, altura, pi))
print (f"O valor total é: {total:.2f}")
