import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;


// ? Estilos para usuario logueado
const loggedStyle ={
    backgroundColor: `rgb(${red},${green},${blue})`,
    color : 'white',
    fontWeight : 'bold'
}

//? Estilo para usuario no logueado 
const unloggedStyle ={
    backgroundColor: 'tomato',
    color : 'white',
    fontWeight : 'bold'
}

// Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) =>{
    return (
        <button style={ propStyle } onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({ logoutAction, propStyle }) =>{
    return (
        <button style={ propStyle } onClick={ logoutAction}>Logout</button>
    )
}
// ? (Expresion True) && expresion => se renderiza la expresion 
// ? (Expresion false) && expresion => no se renderiza la expresion


const OptionalRender = () => {
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessage] = useState(0);
    // const updateAccess = () => {
    //     setAccess(!access);
    // }
    const loginAction = ()=>{
        setAccess(true)
    }

    const logoutAction = ()=>{
        setAccess(false)
    }
    let optionalButton;

    // if (access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }
    if (access){
        optionalButton = <LogoutButton propStyle={ unloggedStyle} logoutAction={logoutAction}/> 
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}/>
    }
    // Unread Messages
    let addMessages = ()=>{
        setNMessage(nMessages + 1)
    }


    return (
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* N Messagges unread*/}
            {/* { nMessages > 0 && nMessages ===1 && <p> You have {nMessages} new Messages...</p> }
            { nMessages > 1 && <p>You have {nMessages} new Messages...</p> }
            { nMessages === 0 && <p>There are no new messages</p>} */}
            {/* Ternay Operator */}
            { access ? (
                <div>
                    { nMessages > 0 ?
                    <p> You have {nMessages} new Message{ nMessages > 1 ? 's' : null }...</p> : 
                    <p>There are no new messages</p> 
                    }
                    <button onClick={addMessages}>{nMessages === 0 ? ' Add your first message': 'Add new Message' }</button>
                </div>) : null } 
                        
                
            
        </div>
    );
}

export default OptionalRender;
