"use client"
import {useState} from 'react';
function ToDoList() {
    const [nombreTarea,setNombreTarea]= useState("");
    const agregarTarea =()=>{
        
    }
    const [tareas,setTareas]=useState([
        {id:1,nombre:'Lidiar con el vacío',estado:true},
        {id:2,nombre:'Pelearme con la alba',estado:true},
        {id:3,nombre:'Raparme mientras lloro',estado:true},
        {id:4,nombre:'Despreciar compañeros',estado:true},
        {id:5,nombre:'Mentir con unas tetas',estado:true},
        {id:6,nombre:'No limpiar el movil',estado:true},
    ]
    );
    
    function onBorrarTarea(itemBorrar){
        let listaTemporal=tareas;
        let indiceBorrar=listaTemporal.findIndex((item)=>itemBorrar.id===item.id);
        listaTemporal.splice(indiceBorrar,1);
        console.log(listaTemporal);
        setTareas(listaTemporal);
       
    }
     const listTareas= tareas.map(tarea=> <Tarea key={tarea.id} id={tarea.id}nombre={tarea.nombre}
        estado={tarea.estado} onBorrarTarea={onBorrarTarea}
        />);
    return ( 
        <form>
            <input type="text" placeholder="Insertar terea nueva" value={nombreTarea} onChange={agregarTarea}/>
            <ul>
                {listTareas}
            </ul>
        </form>
        
     );
}



export function Tarea({id,nombre,estado,onBorrarTarea}) {
    const handleClick =(e)=>{
        e.preventDefault();
        onBorrarTarea({id:id,nombre:nombre,estado:estado})
    }
    return ( 
        <li>
            <p>{nombre}</p>
            <p>{estado?"Completado":"No completado"}</p>
            <button onClick={handleClick}>Borrar Tarea</button>
        </li>
     );
}


export default ToDoList;