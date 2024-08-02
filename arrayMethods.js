/*
const peliculasFavoritas = ["Wall-E","Luca","Encanto"]
console.log(peliculasFavoritas)
console.log("Longitud del arreglo:", peliculasFavoritas.length)
console.log(peliculasFavoritas[0])
console.log(peliculasFavoritas[1])
console.log(peliculasFavoritas[2])
console.log("****************************************")
for(let i = 0; i < peliculasFavoritas.length; i++) {
    console.log(peliculasFavoritas[i])
}
console.log("")
//Agregar un elemento al final del elemento - push
console.log('peliculasFavoritas.push("Elemental")')
peliculasFavoritas.push("Elemental")
console.log(peliculasFavoritas)
console.log("****************************************")
for(let i = 0; i < peliculasFavoritas.length; i++) {
    console.log(peliculasFavoritas[i])
}
//Agregar un elemento al inicio del elemento - unshift
console.log('peliculasFavoritas.unshift("UP")')
peliculasFavoritas.unshift("UP")
console.log(peliculasFavoritas)
console.log("")
peliculasFavoritas.push("Dragon Ball")
peliculasFavoritas.unshift("Naruto")
console.log(peliculasFavoritas)

//Eliminar el último elemento - pop
console.log("peliculasFavoritas.pop()", peliculasFavoritas.pop())
console.log(peliculasFavoritas)

//Eliminar el primer elemento
console.log("peliculasFavoritas.shift()", peliculasFavoritas.shift())
console.log(peliculasFavoritas)

//Verificar si existe en el arreglo - includes
console.log('peliculasFavoritas.includes("La Sirenita")', peliculasFavoritas.includes("La Sirenita"))
console.log('peliculasFavoritas.includes("UP")', peliculasFavoritas.includes("UP"))

const fruits = ['apple', 'banana'];
console.log("fruits", fruits)
const veggies = ['asparagus', 'brussel sprouts'];
console.log("veggies", veggies)
const food = ['apple', 'banana', 'asparagus', 'brussel sprouts'];

//Concatenar arreglos - concat | Crea un nuevo arreglo
const food02 = fruits.concat(veggies)

console.log("fruits.concat(veggies) | food02", food02)
console.log("fruits", fruits)

const food03 = veggies.concat(fruits)
console.log("veggies.concat(fruits) | food03", food03)
*/

//.forEach()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach((numero) => {
    console.log(numero * 2);
})

console.log("numeros", numeros);
console.log("")


//.map()
const cuadrados = numeros.map((numero) => numero * numero)
console.log("numeros", numeros);
console.log("cuadrados", cuadrados);

console.log("")
const cubos = numeros.map((numero) => numero * numero * numero)
console.log("numeros", numeros);
console.log("cubos", cubos);
console.log("")


//.filter()
const multiplosDeTres = numeros.filter((num) => {
    return num % 3 === 0;
})
console.log("numeros", numeros);
console.log("multiplosDeTres", multiplosDeTres);
console.log("")
const paresFilter = numeros.filter((num) => {
    return num % 2 === 0
})
console.log("numeros", numeros);
console.log("paresFilter", paresFilter);
console.log("")


//.find() - Devuelve el primer valor encontrado, no un arreglo
const paresFind = numeros.find((num) => num % 2 === 0)
console.log("paresFind", paresFind);

const paresFind2 = multiplosDeTres.find((num) => num % 2 === 0)
console.log("paresFind2", paresFind2);

const paresFind3 = cubos.find((num) => num % 2 === 0)
console.log("paresFind3", paresFind3);
console.log("")


//.findIndex()
const indice = cubos.findIndex((num) => {
    return num == 216;
})
console.log("indice", indice)
console.log("")


//.indexOf()
const nuevoIndexOf = paresFilter.indexOf(8)
console.log("nuevoIndexOf", nuevoIndexOf)
console.log("")

const amigos = ["Luna", "Joseph", "Dani", "Leo", "Yuly", "Joseph"]
const josephIndexOf = amigos.indexOf("Joseph")
console.log("josephIndexOf", josephIndexOf)
const nuevoJosephIndexOf = amigos.indexOf("Joseph", 2) //El número que se agrega es a partir del índice que empieza a buscar el elemento
console.log("nuevoJosephIndexOf", nuevoJosephIndexOf)
const jaimIndexOf = amigos.indexOf("Jaim")
console.log("jaimIndexOf", jaimIndexOf) //Si el resultado es -1, quiere decir que el valor solicitado no existe o no se encuentra en el arreglo
console.log("")


//.lastIndexOf()
const josephIndexOf1 = amigos.indexOf("Joseph")
const josephIndexOf2 = amigos.lastIndexOf("Joseph")
console.log("josephIndexOf1", josephIndexOf1)
console.log("josephIndexOf2", josephIndexOf2)
console.log("")

const daniIndexOf1 = amigos.indexOf("Dani")
const daniIndexOf2 = amigos.lastIndexOf("Dani")
console.log("daniIndexOf1", daniIndexOf1)
console.log("daniIndexOf2", daniIndexOf2)
console.log("")

/*
const numeros = [13,17,21,43,64]
console.log(numeros.some((num) => num % 2 === 0))
console.log(numeros.some((num) => num % 5 === 0))
console.log(numeros.some((num) => num % 3 === 0))



const nombres = ["Héctor", "Cecilia", "Aarón", "Joaquín"]
console.log(nombres.every((nombre) => nombre.length > 4))



let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
console.log(animals.includes("cat"))
console.log(animals.includes("bear"))
console.log(animals.includes("bird"))


animals.pop()
animals.pop()
animals.pop()
animals.pop()
animals.pop()
animals.pop()
animals.pop()


let numeros2string = numeros.toString()
console.log(numeros2string)
console.log(typeof numeros2string)


let nombres2string = nombres.toString()
console.log(nombres2string)



let numerosStr = numeros.join()
console.log(numerosStr)

let numerosStr2 = numeros.join("")
console.log(numerosStr2)



const vary = [3, true, "Joaquín", ["Héctor", "Cecilia", "Jaim"]]
vary.fill("*")
console.log(vary)


const genre = ["pop", "indie", "jazz", "rock", "baladas"]
const rooms = ["Bedroom", "Hall", "Kitchen", "Pool", "Atic"]

console.log(genre.fill("&", 2))
console.log(rooms.fill("%", 1, 3))
*/

const numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 23, 29, 31]
numerosPrimos  //console.log
numerosPrimos.copyWithin(5)  //console.log | El arreglo original SI es modificado
numerosPrimos  //console.log



const vowels = ["a", "e", "i", "o", "u"]
vowels  //console.log
const vowelsSlice01 = vowels.slice(2)
vowelsSlice01  //console.log
vowels  //console.log


const vowelsSlice02 = vowels.slice(1, 3)
vowelsSlice02  //console.log


/*
array.splice(start)
- Borra los elementos a partir del índice indicado hasta el final.
*/
const months = ["January", "February", "July", "August", "September", "October", "November", "December"]
const arregloBorrado = months.splice(4)
arregloBorrado  //console.log
months  //console.log
//OJO con months.splice(0) => Borra TODO el arreglo, y devuelve el arreglo VACIO


/*
array.splice(start, deleteCount)
- Ubica en el índice con valor start y elimina tantos elementos como deleteCount indique.
*/
const family = ["Héctor", "Cecilia", "Joaquín", "Jaim"]
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const hatedDay = weekdays.splice(0, 1)
hatedDay  //console.log
weekdays  //console.log | Ha sido modificado
const weekend = weekdays.splice(4, 2)
weekend  //console.log
weekdays  //console.log | Sigue modificado


/*
array.splice(start, deleteCount, item1, item2,... , itemN)

Primer paso:
- Ubicarse en el índice start.
Segundo paso:
- Borrar tantos elementos como deleteCount diga a partir del índice start.
Tercer paso:
- Ingresa o agrega todos los item desde el índice start.

*/
const terceraGeneracion = ["Joaquín", "Superman", "Wonder Woman", "Jaim"]
const cambio = terceraGeneracion.splice(1, 2, "Thiago", "Danilo", "Samir")
cambio  //console.log
terceraGeneracion  //console.log