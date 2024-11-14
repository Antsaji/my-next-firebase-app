"use client"
import Product from "./product.js";
function ProductList() {
    const productos=[
       {nombre:'mesa',precio:'20€',descripcion:'Una puta mesa'},
       {nombre:'silla',precio:'10€',descripcion:'Una puta silla'},
       {nombre:'lapiz',precio:'1€',descripcion:'Un puto lapiz'},
       {nombre:'grapadora',precio:'5€',descripcion:'Una puta grapadora'},
       {nombre:'caja',precio:'0,5€',descripcion:'Una puta caja'}
    ];
    const listProducts= productos.map(producto=> <Product key={producto.nombre}nombre={producto.nombre}
        precio={producto.precio}
        descripcion={producto.descripcion}/>);
    return (<ul>{listProducts}</ul>);
}

export default ProductList;