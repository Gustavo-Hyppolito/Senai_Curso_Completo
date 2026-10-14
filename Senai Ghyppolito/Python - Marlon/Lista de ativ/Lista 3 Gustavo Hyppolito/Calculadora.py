# -*- coding: UTF-8 -*-


print(" Ola digite dois numeros para eu fazer o calculo")

num1=float(input('Me de o primeiro numero'))
num2=float(input('Me de o segundo numero'))
operação=str(input("escolha a operação que irá usar '+','-','/','*' os sinais de cada operação"))

def conta(num1, num2):
    resultado=0
    if operação =="+":
       resultado= num1+num2
     
       print(resultado)

    elif operação== "-":
        
         resultado=num1-num2
         print(resultado)
    elif operação== "*":
          resultado=num1*num2
          print(resultado)
    elif operação=='/':
        resultado= num1/num2
        print (resultado)

conta (num1, num2)
