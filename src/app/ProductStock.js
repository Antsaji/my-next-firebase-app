function ProductStock({inStock}) {
    return ( 
        <div>
            {inStock? (<h2>El producto está en stock</h2>):(<h2>NO NO ESTÁ EN STOCK</h2>)}
        </div>
     );
}

export default ProductStock;