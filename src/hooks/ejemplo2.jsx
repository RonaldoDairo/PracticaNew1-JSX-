/**
 * Ejemplos de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    //Vamos a crear dos contadores distintos 
    //Cada uno en un estado diferente
    const [Contador1, setContador1] = useState(0);
    const [Contador2, setContador2] = useState(0);
    //Vamos a crear una referencia con UseRef() para asociar una variable
    //con un elemento del DOM de componente (vista HTML)
     const myRef = useRef();
     function Incrementar1() {
            setContador1(Contador1+1)
     }
     function Incrementar2() {
        setContador2(Contador2+1)
     }

     /**
      *  TRABAJANDO CON useEffect
      */

     /**
      * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
      * cada vez que haya una cambio en el estado del componente
      * se ejecuta aquello que este dentro del useEffect()
      */
     //useEffect(() => {
         //console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        //console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM:')
       // console.log(myRef);
     //});
     /**
      * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
      * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
      * En caso de que cambie contador2,no habra ejecucion
      */
     //useEffect(() => {
         //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 ');
        //    console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM:')
       //      console.log(myRef);  
     //}, [Contador1]);
     /**
      * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
      * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
      * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
      */
      useEffect(() => {
              console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
            console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM:')
             console.log(myRef);  
     }, [Contador1, Contador2]);
    return (
        <div>
             <h1>***Ejemplo de UseState(), useRef() y useEffect() ***</h1>
             <h2>CONTADOR 1: {Contador1}</h2>
             <h2>CONTADOR 2: {Contador2}</h2>
             {/*Elemento Referenciado */}
             <h4 ref={myRef}>
                Ejemplo de Elemento Referenciado
             </h4>
             {/*Botones para cambiar los contadores */}
             <div>
                <button onClick={Incrementar1}>incrementar 1</button>
                <button onClick={Incrementar2}>incrementar 2</button>
             </div>
        </div>
    );
}

export default Ejemplo2;
 