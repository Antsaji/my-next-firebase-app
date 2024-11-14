"user client"
function UserCard(props) {
    
    const listUsuarios = props.usuarios.map(usuario=><li key={usuario.nombre}>{usuario.nombre} {usuario.apellido} {usuario.edad}</li>);
    console.log(listUsuarios)
    return ( 
        <ul>
            {listUsuarios}
        </ul>
     );
}

export default UserCard;