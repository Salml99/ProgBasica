function valida(campo){
    var bRet = false;
    if (campo.value == "")
        document.getElementById('Resultado').innerHTML="Faltan datos";
    else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
        document.getElementById('Resultado').innerHTML="No tiene formato de RFC";
    else
        bRet = true;
    return bRet;
}