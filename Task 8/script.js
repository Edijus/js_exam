/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(){
    this.sum = function(ANumber1, ANumber2){
        return ANumber1 + ANumber2;
    }

    this.subtraction = function(ANumber1, ANumber2){
        return ANumber1 - ANumber2;
    }

    this.multiplication = function(ANumber1, ANumber2){
        return ANumber1 * ANumber2;
    }

    this.division = function(ANumber1, ANumber2){
        return ANumber1 / ANumber2;
    }
}

let _Calc = new Calculator();
console.log(`Penki + dešimt = ${_Calc.sum(5, 10)}`);
console.log(`Dešimt - keturi = ${_Calc.subtraction(10, 4)}`);
console.log(`Dešimt * keturi = ${_Calc.multiplication(10, 4)}`);
console.log(`Dešimt / du = ${_Calc.division(10, 2)}`);
