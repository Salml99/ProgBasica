var valores = [true, 5, false, "hola", "adios", 2];

// Cual de los 2 elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
function comparacion(){
    var resultado = valores[3] > valores[4];
    alert(valores[3]+" > "+valores[4]+" = "+resultado);
}
// Combinar valores booleanos
    var valor1 = valores[0];
    var valor2 = valores[2];

function comparar_or(){

    // Obtener un resultado TRUE
    var resultado = valor1 || valor2;
    alert(valor1+" OR "+valor2+" =  "+resultado);
}

// Obtener un resultado FALSE
function comparar_and(){
    var resultado = valor1 && valor2;
    alert(valor1+" AND "+valor2+" =  "+resultado);
}

// Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];
function suma(){
    var suma = num1 + num2;
    alert(num1+" + "+num2+" =  "+suma);
}
function resta(){
    var resta = num1 - num2;
    alert(num1+" - "+num2+" =  "+resta);
}
function multiplicacion(){
    var multiplicacion = num1 * num2;
    alert(num1+" * "+num2+" =  "+multiplicacion);
}
function division(){
    var division = num1 / num2;
    alert(num1+" / "+num2+" =  "+division);
}
function modulo(){
    var modulo = num1 % num2;
    alert(num1+" % "+num2+" =  "+modulo);
}
