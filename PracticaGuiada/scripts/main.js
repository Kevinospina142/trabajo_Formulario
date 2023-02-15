'use strict';

import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCardC, addStudent, modalAlert, addTeachers, paintCardP} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');


/* Generar eventos 
    1. Colcando el metodo(evento) en el atributo onclik, onmouseover, onmouseout de la etiqueta
    2. Mediante propiedad
    3. mediante el addeventlisten
*/

btnAgregar.onclick = function (){
    // console.log('evento mediante propiedad');
    const op = document.getElementById('opcion').value;
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const edad = parseInt(document.getElementById('edad').value)


// console.log(`${name} ${lastName} ${avg} ${op}`);

    if(validateString(name) && validateString(lastName) && op === "estudiante"  ){
        if ((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastName,avg,edad);
            document.getElementById('form').reset();
        }else{
            document.querySelector('#promedio').value=" ";
            modalAlert("Promedio Inválido");
        }
    }else{
        modalAlert("Datos inválidos, revisar los datos");
    }
    if (validateString(name) && validateString(lastName) && op == "profesor"){
        addTeachers(name,lastName,edad)
        document.getElementById('form').reset();
    }else{
   
        }
    
}

btnMostrar.addEventListener("click", function(){
    paintCardC("ESTUDIANTE");
    paintCardP("PROFESOR")
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
