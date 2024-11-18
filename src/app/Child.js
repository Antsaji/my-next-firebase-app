"use client"
function Child({mensajeDelPadre,onRecibirMensaje}) {
    const mensajeParaPadre ="Esto es un mensaje desde el hijo"
    function enviarAPadre(){
        onRecibirMensaje(mensajeParaPadre);
    }
    return ( 
        <div>
        <h2>Este es el componente hijo</h2>
        <p>Este es el mensajed el padre : {mensajeDelPadre}</p>
        <button onClick={enviarAPadre} >Enviar Mensaje Al Padre</button>
        </div>
     );
}

export default Child;