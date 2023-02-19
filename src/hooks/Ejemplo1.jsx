/**
 * Ejemplo de uso del hook useState
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y,ademas , poder modificarlo
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {
    //Valor inicial para un contador
    const valorInicial = 0;
    // Valor inicial para una persona
    const personaInicial ={
        nombre : 'Martin',
        email : 'dairo@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean
     * parte  del estado del componente para asi poder gestionar su cambio 
     * y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionparaCambiar]= useState(valorInicial)
     */
        const [contador, setContador] = useState(valorInicial);
        const [persona, setPersona] = useState(personaInicial);

        /**
         * Funcion para actualizar el estado privado que contiene el contador
         */
        function incrementarcontador (){
            //? funcionParaCambiar(NuevoValor)
                setContador(contador+1);
        }
        /**
         * Funcion para actualizar el estado de persona en el componente
         */
        function actualizarPersona(){
            setPersona(
                {
                        nombre: 'Pepe',
                        email: 'valrio@gmail.com'
                }
            )
        }

    return (
        <div>
            <h1>*** Ejemplo de useState()***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/*BLOQUE DE BOTONES PARA ACTUALIZAR EL ESTADO DEL COMPONENTE  */}
            <button onClick={incrementarcontador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
