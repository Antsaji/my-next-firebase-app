"use client"
import Child from "./Child";
import {useState} from 'react';
function Parent() {
    const [mensajeHijo,setMensajeHijo]= useState("");
    function mostrarRespuesta(mensajeDesdeElHijo){
        setMensajeHijo(mensajeDesdeElHijo)
    }
    return ( 
        <div>
        <h2>Este es el componente padre</h2>
        <Child mensajeDelPadre='Esto es un mensaje desde Parent' onRecibirMensaje={mostrarRespuesta}/>
        <p>Este es el mensaje del hijo : {mensajeHijo}</p>
        </div>

     );
}

export default Parent;