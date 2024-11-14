"use client"
function Product({nombre,precio,descripcion}) {
    return (
        <li> 
        <h3>{nombre}</h3>
        <h4>{precio}</h4>
        <p>{descripcion}</p>
        </li>
     );
}

export default Product;