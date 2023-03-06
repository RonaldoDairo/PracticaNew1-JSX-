/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * metodos de ciclo de vida
 */
import React from 'react';


import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

        constructor(props){
            super(props)
            console.log('CONSTRUCTOR: cuando se instancia el componente');
        }
        componentWillUnmount(){
            console.log('WILLMOUNT: Antes del montaje de componente' );
        }
        componentDidMount(){
            console.log('DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo');
        }
        componentWillReceiveProps(nextProps){
            console.log('WillReceiveProps: Si va a recibir nuevas Props');
        }
        shouldComponentUpdate(nextProps,nextState){
            /**
             * Controlar si el componente debe o no actualizarse
             */
            // return true/false
        }
        componentWillUpdate(nextProps, nextState){
            console.log('WillUpdate: Justo antes de actualizarse');
        }
        componentDidUpdate(prevProps, prevState){
            console.log('DidUpdate: Justo despues de actualizarse')
        }
        componentWillUnmount(){
            console.log('WillUnmount: Justo Antes de desaparecer')

        }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;

