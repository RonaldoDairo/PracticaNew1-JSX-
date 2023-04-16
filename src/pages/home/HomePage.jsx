import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
const navigate = useNavigate();

const ProfilePage = () => {
    navigate('/profile')
}
const navigateProps = () => {
    navigate('/online-state', { state: { online: true }, replace: true, search: '?online=true' });
  };
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={navigateProps}> 
                    Go To Page with State / Query Params
            </button>
            <button onClick={ProfilePage}> 
                    Go To Profile 
            </button>
            
        </div>
    );
}


export default HomePage;
