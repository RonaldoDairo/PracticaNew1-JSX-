/**
 * Componente que va a contener un formulario para 
 * autenticacion de usuarios.
 */
import React,{useState} from 'react';

const LoginForm = () => {
   
   const initialCredentials =[

            {
                use: '',
                password: ''
            }
   ];
   const [credentials,setCredentials] = useState(initialCredentials);
   
   
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
