"use client"
import {useState} from 'react';
function ToggleSwitch() {
    const [encendido,setEncendido]= useState('ON');

    const handleClick =()=>{
        if(encendido==='ON'){
            setEncendido('OFF');
        }
        if(encendido==='OFF'){
            setEncendido('ON');
        }
        
    }
    return ( 
        <div>
            <button onClick={handleClick}>{encendido}</button>
        </div>
     );
}

export default ToggleSwitch;