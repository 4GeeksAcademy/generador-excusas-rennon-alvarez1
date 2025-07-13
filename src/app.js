import "bootstrap";
import "./style.css";



import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarExcusas() {
  const sujetos = ["Mi compañero", "Mi hermano", "Mi profesor", "Mi perro"];
  const accion = ["perdio", "rompio","entrego", "vio"];
  const objeto =["el carro", "la tarea","la pelicula","el ordenador"];
  const cuando = ["la semana pasada", "el lunes","en el aula de clases", "el mes pasado"];

  const randomsujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const randomacciones = accion[Math.floor(Math.random() * accion.length)];
  const randomobjetos = objeto[Math.floor(Math.random() * objeto.length)];
  const randomcuandos = cuando[Math.floor(Math.random() * cuando.length)];

  const excusas = `${randomsujeto} ${randomacciones} ${randomobjetos} ${randomcuandos}`;
  document.getElementById("excusas").textContent = excusas;
  
  console.log(randomsujeto, randomacciones, randomobjetos, randomcuandos);
}
  
  console.log("Hello Rigo from the console!");

