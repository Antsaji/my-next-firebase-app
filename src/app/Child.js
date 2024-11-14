function Child({props}) {
    const handleClick =()=>{
        
    }
    return ( 
        <div>
        <h2>{props}</h2>
        <button onClick={handleClick}>Boton de Child</button>
        </div>
     );
}

export default Child;props