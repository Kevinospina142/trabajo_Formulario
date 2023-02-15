import { checkAvg } from './validate.js';
'use strict';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];

const paintCardC = (typ) => {
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.getElementById('templateEstudiante').content;

    if (typ === 'ESTUDIANTE'){
        for (let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;

            fragment.appendChild(cloneTemp);
        }
    }
    else{

    }
    cardE.appendChild(fragment);
};

const addStudent = (name,lastName,avg) =>{
    // Objeto literal de JS
    let student = {
        nom : name,
        ape : lastName,
        prom : avg
    }
    students.push(student);
    modalAlert('Se agregó estudiante');
};

const modalAlert = (cad)=>{
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = './img/boton-x.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const cardP = document.getElementById('cardsProfesores');
const teachers = [];

const paintCardP = (typ) => {
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateProfesores = document.getElementById('templateProfesor').content;

    if (typ === 'PROFESOR'){
        for (let i of teachers){
            const cloneTemp = templateProfesores.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Profesor</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRES: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-edad').innerHTML = `EDAD: ${i.edad}`;
            fragment.appendChild(cloneTemp);
        }
    }
    else{

    }
    cardP.appendChild(fragment);
};

const addTeachers = (nameLastName,ape,edad) =>{
    // Objeto literal de JS
    let teacher = {
        nom : nameLastName,
        ape : ape,
        edad : edad
    }
    teachers.push(teacher);
    modalAlert('Se agregó profesor');
};

const modalAlert2 = (cad)=>{
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = './img/boton-x.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }

}
export {paintCardC,addStudent,modalAlert,addTeachers,paintCardP, modalAlert2}