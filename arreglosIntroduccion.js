//Arreglo = Array
const dinero = []   //Arreglo vacío
const edadFamilia = [50, 47, 16, 9, 3]      //Arreglo de integer (Entero)
const pesoFamilia = [45.7, 30.1, 15.9, 9.8, 3.01]     //Arreglo de Float (Decimales)
const nombresFamilia = ["Hector", "Cecilia", "Joaquin", "Jaim", "Mocca"]    //Arreglo de String o Cadena (Texto)
const cosasMias = ["Joaquin", 8, true, 14.87, ["Luna", "Joseph"]]  
document.write(nombresFamilia.length)
document.write(" ")
document.write(edadFamilia.length)
document.write(" ")
let papa = `Mi papá se llama ${nombresFamilia[0]}, él tiene ${edadFamilia[0]} años y pesa aprox. ${pesoFamilia[0]} kilos.`
document.write(papa)


for(let i = 0; i < nombresFamilia.length; i++){
    console.log(`${nombresFamilia[i]} tiene ${edadFamilia[i]} años y pesa aprox. ${pesoFamilia[i]} kilos.`)
}

let palabra = "ABCDEFGHIJKLMNOPQ"

console.log(palabra[5])

let serie = "devil may cry"
serie[0]  //Trae el valor | Brings the value
serie[0] = "D"  //Cambia el valor del primer elemento | Changes the value of the first element
serie  //Muestra el valor de la variable "serie", no se refleja el cambio | Shows the value of the variable "serie", doesn't change
serie = "Devil May Cry"
serie

let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0]
shopping[0] = "apples"
shopping
shopping[3] = "causa rellena"
shopping