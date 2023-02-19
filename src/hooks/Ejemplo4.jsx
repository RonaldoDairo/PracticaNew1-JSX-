/**
 * Ejemplos para entender el use de props.children
 */
import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2> Nombre : { props.nombre }</h2>
            {/** props.nombre pintara por defecto aquello que se encuentre entre las etiquetas de a
            apertura y cierre de este componente desde el componente de orden superior */}
            { props.children }
        </div>
    );
}

export default Ejemplo4;
