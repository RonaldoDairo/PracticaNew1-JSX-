import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
const navigate = useNavigate();

const ProfilePage = () => {
    navigate('/profile')
}
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={ProfilePage}> 
                    Go To Profile 
            </button>
            
        </div>
    );
}

export default HomePage;
