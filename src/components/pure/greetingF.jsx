import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {
    //Breve introducion  a useState
    //const [variable, metodo para actualizarlo] = useState(valorInicial);
    const [age, setage] = useState(25);
    const birthday = () =>{
        // actualizamos el state
        setage(age +1);

        
    }
    return (
        <div>
                <h1>
                    Holaaaaa {props.name} desde componente funcional!
                </h1>
                <h2> Tu edad es {age}
                </h2>
            <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name : PropTypes.string

};


export default Greetingf;
