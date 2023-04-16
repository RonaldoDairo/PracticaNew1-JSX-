import React from 'react';

const AsyncExample = () => {
    
    async function generateNunmber(){
            return 1 ;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNunmber()
        .then((response)=> alert(`Response: ${response}`))
        .catch((error)=> alert(`Something went wrong: ${error}`))
    }
    function obtainPromiseNumber() {
        generatePromiseNumber().then((response)=> alert(`Response: ${response}`))
        .catch((error)=> alert(`Something went wrong: ${error}`))
    }
    
    async function saveSessionStorage(key, value){
       sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }
    
    function showStorage() {
        saveSessionStorage('name', 'Dairo')
        .then((response)=>{
            let value = response;
            alert (`Saved Name: ${value}`);
        }).catch((error)=> {
            alert(`Something went wrong: ${error}`)
        }).finally(()=> {
            alert('Name Saved and retreived sucessfully')
        })
    }
    async function obtainMessage() {
        let promise = new Promise((resolve , reject)=>{
           setTimeout(()=> resolve('Hello World'),2000)
        });

        let message = await promise;
        await alert(`Message received: ${message}`)

    }
    const returnError = async()=>{
        await Promise.reject(new Error('Oooooops'))
    }
    const consumeError = ()=>{
        returnError()
        .then((response)=> alert(`Everything is Ok ${response}` ))
        .catch((error)=> alert(`Something went wrong: ${error}`))
        .finally(()=> alert('Finally executed'))
    }
    const urlNotFound = async ()=>{
        try{
            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)
        }catch (err){
                alert(`Something went wrong with your URL: ${err} (check your console)`)
        }
    }
    const multiplePromise = async ()=>{
        let results = await Promise.all(
        [
                fetch('https://regres.in/api/users'),
                fetch('https://regres.in/api/users?page=2'),
        ]
    ).catch((err)=> alert(`Something went wrong with your URL: ${err} (check your console)`))
    
}


    return (
        <div>
        <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save Name and Show</button>
            <button onClick={obtainMessage}>Receive message in two seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknow URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
