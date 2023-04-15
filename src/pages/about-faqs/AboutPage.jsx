import React from 'react';

import { useLocation, useNavigate} from 'react-router-dom';
const AboutPage = () => {
    // const location = useLocation(); // to see the rutes 
    const navigate = useNavigate();
    // console.log('We are in Route', location.pathname) // '/about | /faqs'
const GoHome = ()=>{
    navigate('/')
}


    return (
        <div>
            <h1>
                About | FAQs 
            </h1>
            <div>
                <button onClick={GoHome}>Go To Home
               
                </button>
                <button onClick={GoHome} >
                   Go Back
                </button>
                


            </div>
        </div>
    );
}

export default AboutPage;
