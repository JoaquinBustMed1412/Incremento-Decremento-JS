/*
valor inicial de VARIABLE: 0
VARIABLE++
valor final de VARIABLE: 14 (Acá se decide la condición)
Acción: console.log("VARIABLE-Hola Joaquín!")
for( [initialization];  [condition];  [updating]) {for Loop Body}
*/

/*
for( let i = 0;  i < 15;  i++) {
  console.log(`${i}-Hola Joaquín!`)
}
*/

//PELIGRO - Destruye tu PC
/*
for(let i = 0; i <= 2; i++){
    console.log(`Hello Javascript`)
    i--;
  }
*/

/*
Tabla del 5
variable i = 1 (Valor inicial)
i++
i <= 10 (Valor final - CONDICIÓN)
Acción:
console.log(`${i} * 5 = ${i * 5}`)
*/

/*
for( let i = 1;  i <= 10 ;  i++) {
    console.log(`${i} * 5 = ${i * 5}`)
}
*/


/*
Números pares del 2 al 20
variable i = 2 (Valor inicial)
(1)i++ i++
(2)i+=2 [i = i + 2]
i <= 20 (Valor final - CONDICIÓN)
Acción:
console.log(`i`)
*/

/*
for( let i = 2;  i <= 20 ;  i+=2) {
    console.log(i)
}
*/

/*
for( let i = 2;  i <= 20 ;  i+=2) {
    console.log(i)
}


for( let i = 1;  i <= 10 ;  i++) {
    console.log("+", 2 * i)
}


for( let i = 2;  i <= 20 ;  i++) {
    console.log("-", i)
  i++
}
*/

/*
//TAREA - Contar solo números impares del 1 al 15

for (var i = 1; i <= 15; i += 2) {
  console.log("Número impar: " + i);
}


//TAREA - Factorial de un número (1 y 10) que el usuario ingrese por consola (prompt)

var numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
var factorial = 1;

for (var i = 1; i <= numero && numero >= 1 && numero <= 10; factorial *= i, i++) {}

console.log("El factorial de " + numero + " es: " + factorial);
*/
