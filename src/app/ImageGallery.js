"use client"
import {useState} from 'react';
function ImageGallery() {

    const [fotos,setFotos]=useState([
        {id:1,url:'./foto1.jpg',},
        {id:2,url:'./foto2.jpg',},
        {id:3,url:'./foto3.jpg',},
        {id:4,url:'./foto4.jpg',},
        {id:5,url:'./foto5.jpg',}
    ]
    );
    const listaFoto= fotos.map(foto=> <Foto key={foto.id}id={foto.id}url={foto.url}/>);

    return ( 
        <div>
            {listaFoto}
        </div>
     );
}
export function Foto({id,url}) {
    
    return ( 
        <div>
            <h2>Imagen nº {id}</h2>
            <img src={url}></img>
        </div>
     );
}
export default ImageGallery;