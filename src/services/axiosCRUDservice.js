import axios from 'axios';

/**
 * Login Method to regres endpoint
 * @param {string} email 
 * @param {string} password 
 */

export const login = (email, password )=>{
    let body ={
        email : email,
        password : password
    }

    // Returns the response with a Promise 
    return axios.post('https://reqres.in/api/login', body);
}



// TODO: Obtain All user
export const getAllUser = ()=>{
    return axios.get('https://reqres.in/api/users');
}
// TODO: Obtain All paged users
export const getAllPagedUser = (paged)=>{
    return axios.get(`https://reqres.in/api/users?page=${paged}`);
}

// TODO: Obtain user by id
export const getUserById = (id)=>{
    return axios.get(`https://reqres.in/api/users/${id}`);
}

// TODO: Create User
export const createUser = (name, job)=>{
    let body ={
        name : name,
        job : job
    }

    // Returns the response with a Promise 
    return axios.post('https://reqres.in/api/users', body);

}

// TODO: Update User

export const updateUser = (id, name, job)=>{
    let body ={
        name : name,
        job : job
    }

    // Returns the response with a Promise 
    return axios.put(`https://reqres.in/api/users/${id}`, body);
    
}


// TODO:  User
export const deleteUserById = (id)=>{
    return axios.delete(`https://reqres.in/api/users/${id}`);
}