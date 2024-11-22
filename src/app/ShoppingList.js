"use client"

import {useState} from 'react';
function ShoppingList({list}) {
    const [lista,setLista]= useState(list);

    const listaProductos= lista.map(producto=> <Producto key={producto.id}id={producto.id}nombre={producto.nombre}onBorrarProducto={onBorrarProducto}/>);

    function onBorrarProducto(itemBorrar){
        setLista(lista.filter(a=>a.id!==itemBorrar.id))
       
    }

    return ( 
        <div>
            <ul>
                {listaProductos}
            </ul>
        </div>
     );
}
export function Producto({id,nombre,onBorrarProducto}) {
    const handleClick =(e)=>{
        e.preventDefault();
        onBorrarProducto({id:id,nombre:nombre})
    }
    return ( 
        <li>
            <h3>{id}</h3>
            <p>{nombre}</p>
            <button type='button' onClick={handleClick}>Borrar Producto</button>
        </li>
     );
}
export default ShoppingList;