/*
const arreglo = [50, 47, 16, 9, 3]
//"i" toma el valor de los índices del arreglo
//"arreglo[i]" es el valor de cada elemento del arreglo
for(let i = 0; i < arreglo.length; i++){
    console.log(`value: ${i} - ${arreglo[i]}`)
}

const arreglo02 = ["Hector", "Cecilia", "Joaquin", "Jaim", "Mocca"]
//"i" toma el valor de los índices del arreglo
//"arreglo[i]" es el valor de cada elemento del arreglo
for(let i = 0; i < arreglo02.length; i++){
    console.log(`index-name: ${i} - ${arreglo02[i]}`)
}
*/

/*
let numero = parseInt(prompt("Ingrese un número: "))
if(isNaN(numero)){
    alert(`Usted no ingresó ningún número`)
} else if(numero % 2 === 0) {
    alert(`El número ${numero} es PAR`)
} else if(numero % 2 !== 0) {
    alert(`El número ${numero} es IMPAR`)
} else{
    alert(`Usted no ingresó ningún número`)
}
*/

/*
Ejercicio:
El usuario ingresa un número mayor que 0
Lo que se tiene que hacer es mostrar por consola los números ingresados
Con las siguientes condiciones:
Si el número es múltiplo de 3, en vez de imprimir el número, debe de imprimir "BUZZ"
Si el número es múltiplo de 5, debe de imprimir "FUZZ"
Y si es múltiplo de 15, "FUZZBUZZ"
Cualquier otro caso, o número, que muestre dicho número ingresado.

Caso 1:
El usuario ingresa '7'
Debe de mostrar: 
1
2
BUZZ
4
FUZZ
BUZZ
7

Caso 2:
El usuario ingresa '15'
Debe de mostrar: 
1
2
BUZZ
4
FUZZ
BUZZ
7
8
BUZZ
FUZZ
11
BUZZ
13
14
FUZZBUZZ
*/

//Ejercicio:
/*
// Pide al usuario que ingrese un número mayor que 0
var numeroIngresado = prompt("Ingresa un número mayor que 0:");

// Convierte de string a number
var numero = parseInt(numeroIngresado);

// Se verifica si el número es mayor que 0
if (numero > 0) {
  // Mostrará los números desde 1 hasta el número ingresado
  for (var i = 1; i <= numero; i++) {
    // Commprueba las condiciones
    if (i % 15 === 0) {
      console.log("FUZZBUZZ");
    } else if (i % 3 === 0) {
      console.log("BUZZ");
    } else if (i % 5 === 0) {
      console.log("FUZZ");
    } else {
      console.log(i);
    }
  }
} else {
  // Si el número no es mayor que 0, muestra un mensaje de error
  console.log("Por favor, ingrese un número mayor que 0.");
}
*/


// Pide al usuario que ingrese un número mayor que 0
let numeroIngresado = prompt("Ingresa un número mayor que 0:");

// Convierte de string a number
let numero = parseInt(numeroIngresado);

// Se verifica si el número es mayor que 0
if (numero > 0) {
  // Mostrará los números desde 1 hasta el número ingresado
  for (let i = 1; i <= numero; i++) {
    // Commprueba las condiciones
    if (i % 5 === 0) {
      console.log("BUZZ");
    } else if (i % 3 === 0) {
      console.log("FUZZ");
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FUZZBUZZ");
    } else {
      console.log(i);
    }
  }
} else {
  // Si el número no es mayor que 0, muestra un mensaje de error
  console.log("Por favor, ingrese un número mayor que 0.");
}