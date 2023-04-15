import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProfilePage = ({user}) => {
const navigate = useNavigate();
const GoHome = ()=>{
    navigate('/')

}
const Tasks = () =>{
    navigate('/tasks')
}
    return (
        <div>
            <h1>
                Your Profile
            </h1>
            <button onClick={Tasks}>Tasks</button>
            <button onClick={GoHome}>
                Go Home
            </button>
        </div>
    );
}

export default ProfilePage;
