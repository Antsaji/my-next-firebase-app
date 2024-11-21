"use client"
import {useState} from 'react';
function LoguinControl() {
    const[logueado,setLogueado]=useState(0)

    function iniciar(){
        setLogueado(1);
    }
    function cerrar(){
        setLogueado(0);
    }

    return (
        <div> 
        {logueado? (<button onClick={cerrar}>CerrarSesión</button>):(<button onClick={iniciar}>IniciarSesion</button>)}
        </div>
     );
}



export default LoguinControl;