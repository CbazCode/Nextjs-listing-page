import Link from 'next/link'
//Esta funcion corre antes de que el componente se renderice

export const getStaticProps = async () =>{
    //No corre ningun codigo en el navegador
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();

    return {
        //Dentro de props va lo que quiero que sea accesible para el componente
        props: { people: data }
    }
}

import styles from '../../styles/People.module.css';

const People = ( { people } ) => {
    return ( 
        <div>
            <h1>Ninjas</h1>
            {
                people.map( p => {
                    return (
                        <Link href={`/people/${p.id}`}key= {p.id}>
                            <a className={styles.single}>
                                <h3>{p.name}</h3>
                            </a>
                        </Link>
                    )
                } )
            }
        </div> 
    );
}
 
export default People;