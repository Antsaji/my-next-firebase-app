"use client"
import Card from "./card";
import UserCard from "./UserCard";
function App() {
    const personas=[
    {nombre:'Antonio', apellido:'Lope',edad:'74'}, 
    {nombre:'Marika', apellido:'Gonzale',edad:'5'}, 
    {nombre:'Valentin', apellido:'Ioputa',edad:'105'} 
    ];
    return ( 
        <div>
            <Card titulo="GigaNigga" descripcion="Giganigga es un tio fuerte y moreno" foto="./descarga.jpg"/>
            <UserCard usuarios={personas}/>
        </div>
     );
}

export default App;