function iniciarChat(){

window.location="asistente.html";

}

function responder(){

let pregunta=document.getElementById("pregunta").value.toLowerCase();

let respuesta="";

if(pregunta.includes("arduino")){

respuesta="Arduino es una plataforma electrónica de código abierto utilizada para crear proyectos interactivos.";

}

else if(pregunta.includes("led")){

respuesta="Un LED es un diodo emisor de luz que necesita una resistencia para protegerlo.";

}

else if(pregunta.includes("sensor")){

respuesta="Un sensor detecta cambios del entorno como luz, temperatura o movimiento.";

}

else if(pregunta.includes("robot")){

respuesta="Un robot es una máquina programable capaz de realizar tareas automáticamente.";

}

else{

respuesta="Muy buena pregunta. En una próxima versión RoboIA responderá utilizando Inteligencia Artificial.";

}

document.getElementById("respuesta").innerHTML=respuesta;

}
