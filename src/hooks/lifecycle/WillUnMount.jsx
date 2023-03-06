/**
 * Ejemplo de uso del metodo Componente WillUnMount para componente clase 
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer) 
 */
import React, { Component,useEffect } from 'react'

export  class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div>
        <h1>componentWillUnmount</h1>
      </div>
    )
  }
}


export  function WillUnMountHook() {
    useEffect(() => {
        // aqui no ponemos nada , si no que en el propio retur
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);

  return (
    <div>
      <h1>componentWillUnmount</h1>
    </div>
  )
}

