//Resumen - Operador de Incremento y Decremento

//Operadores aritméticos
let x = 0;
let y = 2;
console.log(x)
console.log(y)

//Operador de incremento
x++;

//Operador de decremento
y--;

//Ejemplos
console.log("Valor de x después de incremento:", x);
console.log("Valor de y después de decremento:", y);
console.log("")

//Advertencia del orden en la asignación
let a = 5;
console.log("a:", a)
console.log("b = a++")
let b = a++; //El incremento se dará después de la asignación
/*
b=a++
1) b=a  La asignación tiene mayor jerarquía - peso, que el incremento
2) a++
2 + 5 * 2
*/
console.log("Valor de a después de incremento con asignación:", a); //a = 6
console.log("Valor de b después de incremento con asignación:", b); //b = 5


//Resumen - Operadores Lógicos

//Operadores lógicos
let expresion1 = true;
let expresion2 = false;

//Operador 'y' lógico
let resultadoY = expresion1 && expresion2;

//Operador 'o' lógico
let resultadoO = expresion1 || expresion2;

//Operador 'not' lógico
let resultadoNot = !expresion1;

//Ejemplos
console.log("Resultado de expresion1 && expresion2:", resultadoY);
console.log("Resultado de expresion1 || expresion2:", resultadoO);
console.log("Resultado de !expresion1:", resultadoNot);