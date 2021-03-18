//Creamos el archivo id, pero next no sabe que ese id va a cambiar el piensa que literalmete queremos ir a /id
//Para eso lo envolvemos en corchetes al archivo
//Next no sabe cuantas paginas generar a partir del id, por eso tenemos que especificarle la cantidad de paginas con el getStaticPaths

export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map( d => {
        return {
            params: {id: d.id.toString()}
        }
    })

    return{
        //Se le pasa un arreglo de objetos y cada objeto es una ruta dependiendo del id con la estructura de arriba
        paths: paths,
        //Si alguien trata de visitar un ruta con un id que no existe mostrará 404
        fallback: false
    }
}

//La funcion se ejecuta dependiendo de la cantidad de objetos que haya en paths en este caso 10
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props:{ person: data }
    }

}


const Details = ( {person} ) => {
    return ( 
        <div>
            <h1>{person.name}</h1>
            <p>{person.email}</p>
            <p>{person.website}</p>
            <p>{person.address.city}</p>

        </div>
     );
}
 
export default Details;