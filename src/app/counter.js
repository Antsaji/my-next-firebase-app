"use client"
import { useState } from "react";
function Counter() {
    const [contador,setContador]=useState(0);
    const handleClick =()=>{
        setContador(contador+1);
    }
    return ( 
        <div>
            <button onClick={handleClick}>Has pulsado {contador} veces</button>
        </div>
     );
}

export default Counter;