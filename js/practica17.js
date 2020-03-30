function validaFechaMenor(campo){
        var bRet = false;
        if (campo.value == "")
          alert("Faltan datos");
        else{
         bRet=validaFecha(campo.value)
        }
        return bRet;
      }

        function validaFecha(valor){
        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
                    nDia = parseInt(valor.substring(8,10), 10);
                    nMes = parseInt(valor.substring(5,7), 10);
                    nAnio = parseInt(valor.substring(0,4), 10);

                    if(nDia<1)
                        nDia=nDia*(-1);
                    else if(nMes<1)
                        nMes=nMes*(-1);
        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
                    //Compara que sea menor que l fecha actual
                     var dHoy = new Date();
                    if (dConvertida != null && dConvertida < dHoy){
                    creasigno(nDia,nMes);
                    return true;
                    }else{
                        alert("La fecha debe ser menor a la fecha actual");
                    }
        		}//formato válido
        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }
function creasigno(nDia,nMes){
 //var newDiv = document.createElement("div");
 var fondo;
  var letra="black";
  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
  var newContent = document.createTextNode("SIGNO ARIES  NÚMERO DE LA SUERTE: 5");
   fondo="#cb3234";
  }else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    var newContent = document.createTextNode("SIGNO TAURO NÚMERO DE LA SUERTE: 12");
     fondo="green";
  }else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
      var newContent = document.createTextNode("SIGNO GEMINIS NÚMERO DE LA SUERTE: 3");
       fondo="yellow";
    }else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
        var newContent = document.createTextNode("SIGNO CANCER  NÚMERO DE LA SUERTE: 2");
         fondo="#C0C0C0";
      }else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
          var newContent = document.createTextNode("SIGNO LEO   NÚMERO DE LA SUERTE: 9");
           fondo="#EABE3F";
        }else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
            var newContent = document.createTextNode("SIGNO VIRGO   NÚMERO DE LA SUERTE: 17");
             fondo="brown";
          }else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
              var newContent = document.createTextNode("SIGNO LIBRA   NÚMERO DE LA SUERTE: 6");
               fondo="#ff0090";
            }else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                var newContent = document.createTextNode("SIGNO ESCORPIO   NÚMERO DE LA SUERTE: 8");
                fondo="#8B0000";
              }else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                  var newContent = document.createTextNode("SIGNO SAGITARIO  NÚMERO DE LA SUERTE: 4");
                   fondo="#cf3476";
                }else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                    var newContent = document.createTextNode("SIGNO CAPRICORNIO  NÚMERO DE LA SUERTE: 23");
                     fondo="black";  letra="white";
                  }else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                      var newContent = document.createTextNode("SIGNO ACUARIO NÚMERO DE LA SUERTE: 0");
                       fondo="gray";
                    }else if ((nDia>22) && (nMes==2) || (nDia <=23) && (nMes==3)){
                        var newContent = document.createTextNode("SIGNO PICIS  NÚMERO DE LA SUERTE:  7");
                         fondo="#572364";
                      }


        //var newContent = document.createTextNode("SIGNO");
        //newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("divs");
        currentDiv.style="border: 3px solid #999999; background-color:"+fondo+"; color:"+letra+"; width: 200px ;height:150px ";
        currentDiv.appendChild(newContent);
        var nuevo = currentDiv.childNodes;
        currentDiv.replaceChild(newContent, nuevo[0]);
}

