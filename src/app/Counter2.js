"use client"
import {useState} from 'react';
function Counter2() {
    const[valor,setValor]=useState(0)
    function mas(){
        setValor(valor+1);
    };
    function menos(){
        setValor(valor-1);
    };

    return ( 
        <div>
            <button onClick={mas}>Mas</button>
            <h3>{valor}</h3>
            <button onClick={menos}>Menos</button>
        </div>
     );
}

export default Counter2;