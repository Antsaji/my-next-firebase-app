"use client"
import {useState} from 'react';


function ContactForm() {
const [correo,setCorreo]= useState("");
const [contra,setContra]= useState("");
const [iniciado,setIniciado]= useState(false);

function onChangeCorreo(e){
    setCorreo(e.target.value)
}
function onChangeContra(e){
    setContra(e.target.value)
}
function enviar(){
    if(correo!==""&&contra!==""){
        setIniciado(true);
    }
}
    return ( 
        <form>
            <input type="text" placeholder="Inserta tu correo" defaultValue={correo} onChange={e=>onChangeCorreo(e)}/>
            <input type="text" placeholder="Inserta tu contraseña" defaultValue={contra} onChange={e=>onChangeContra(e)}/>

            <button type='button' onClick={enviar}>ENVIAR</button>  
            {iniciado? (<h2>HAS INICIADO SESION</h2>):(<h2>No has iniciado sesion</h2>)}
            
        </form>
     );
}

export default ContactForm;