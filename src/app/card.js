function Card({titulo,descripcion,foto}) {
    return ( <div>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <img src={foto}></img>
    </div> );
}

export default Card;