'use strict';
const validateString = (cad)=>{
    // Ternario->abreviación del if else
    let response = (cad.length>3) ? true : false;
    return response; 
}
const validateAvg = (num)=>{
    let response = (num>=0 && num<=5) ? true : false;
    return response
}

const checkAvg = (value) => {
    let result = (value >=3 && value <=5) ? "APROBADO" : "REPROBADO";
    return result;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const checkEdad = (value) => {
    let edad = (value >=20 && value <=70) ? "ES PROFESOR" : "NO ES PROFESOR";
    return edad;
}


export {validateString,validateAvg as vAvg, checkAvg, checkEdad as vEdad}
