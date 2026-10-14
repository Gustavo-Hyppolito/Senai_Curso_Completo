const{soma,subtrai,multiplica,divide,ehPar,raiz,media}=require("./calculadora");
 describe("soma",()=>{
    test("Soma com dois numeros positivos",()=>{
        expect(soma(2,3)).toBe(5);
    });
 });

 describe("raiz",()=>{test("Calcule a raiz de numero não exato com precisao",()=>{
    expect(raiz(2)).toBe(1.414);
 })})