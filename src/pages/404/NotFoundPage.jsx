import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

const navigate = useNavigate();   
    
const GoHome = ()=>{
        navigate('/')
} 
    return (
        <div>
            <h1>404 -Page Not Found</h1>
            <div>
            <button onClick={GoHome}>
                Go Home
            </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
