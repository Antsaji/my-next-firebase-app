"use client"

import {useState} from 'react';
function DropDown({list}) {
    const [opciones,setOpciones]=useState(list);

    const listaOpciones= opciones.map(opcion=> <Opcion key={opcion.id}id={opcion.id}nombre={opcion.nombre}/>);

    return ( 
        <div>
            <select name="select">
                {listaOpciones}
            </select>
        </div>
     );
     
}
export function Opcion({id,nombre}) {
    
    return ( 
        <option value={nombre}>{nombre}</option>
     );
}
export default DropDown;