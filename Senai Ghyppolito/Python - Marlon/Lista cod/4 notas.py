# -*- coding: UTF-8 -*-

L = [0,0,0,0]
s = 0
x = 0

while x < 4:
    L[x] = float(input("n %d: "% x))
    s += L[x]
    x += 1
x = 0
while x < 4:
    print("L %d: %6.2f" % (x,L[x]))
    x += 1
print ("A média: %5.2f" % (s/ x))
    
