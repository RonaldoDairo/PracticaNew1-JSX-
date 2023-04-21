import React from 'react';
import { login, getAllUser, getAllPagedUser, getUserById, createUser, updateUser, deleteUserById } from '../../services/axiosCRUDservice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
const AxiosCRUDExample = () => {





    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid Email format')
                    .required('Email is required'),
            password: Yup.string()
                    .required('Password is required')
        }
    )

    const initialCredentials = {
        email: '',
        password: ''
    }
    
    const authUser = (values) => {
        login(values.email,values.password)
        .then((response)=>{
            if(response.data.token){
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem('token',response.data.token)
        }else{
                sessionStorage.removeItem('token');
                throw new Error (' Login Failure');
            }
            
        })    
        .catch((error)=>{
            alert(`Something went wrong: ${error}`)
            sessionStorage.removeItem('token');
        })
        .finally(()=>{
            console.log('Login done')
        })
    }
//CRUD EXAMPLE
const obtainAllUsers =()=>{
    getAllUser()
    .then((response)=>{
        if(response.data.data && response.status === 200){
            alert(JSON.stringify(response.data.data))
        }else{
            throw new Error ('User not found')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
    .finally(()=>{
        console.log('Login done')
    })

}

const obtainAllPageUsers =(paged)=>{
    getAllPagedUser(paged)
    .then((response)=>{
        if(response.data.data && response.status === 200){
            alert(JSON.stringify(response.data.data))
        }else{
            throw new Error (`User not found in paged ${paged}`)
        } 
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
    .finally(()=>{
        console.log('Login done')
    })

}

const obtainUserById = (id)=>{
    getUserById(id)
    .then((response)=>{
        if(response.data.data && response.status === 200){
            alert(JSON.stringify(response.data.data))
        }else{
            throw new Error ('User not found')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
    .finally(()=>{
        console.log('Login done')
    })

    
}
   
const createNewUser = (name, job)=>{
        createUser(name, job)  
        .then((response)=>{
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error ('User not created')
            }
        })
        .catch((error)=>{
            alert(`Something went wrong: ${error}`)
        })
        .finally(()=>{
            console.log('Login done')
        })  
}
const updateThisUserById = (id, name, job)=>{
    updateUser(id, name, job)
    .then((response)=>{
        if(response.data && response.status === 200){
            alert(JSON.stringify(response.data))
        }else{
            throw new Error ('User not found & not update none')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
    .finally(()=>{
        console.log('Login done')
    })

    
}
const deleteThisUserById = (id)=>{
    deleteUserById(id)
    .then((response)=>{
        if(response.status === 204){
            alert(` User with id: ${id} successfully delete`)
        }else{
            throw new Error ('User not found & no delete done')
        }
    })
    .catch((error)=>{
        alert(`Something went wrong: ${error}`)
    })
    .finally(()=>{
        console.log('Login done')
    })

    
}

    return (
        <div>
            <h4>Login Formik</h4>
        <Formik
            /** Initial values that the form will take */
            initialValues={ initialCredentials }
            //*** Yup Validation Schema */
            validationSchema={loginSchema}
            //** onSubmit Event */
            onSubmit={async (values) => {
                authUser(values)
            }}       
         >
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur})=>(
                    <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />
                            {/* Emails Errors */}
                            {
                                errors.email && touched.email &&
                                (
                                
                                    <ErrorMessage component={'div'} name="email" />
                                    
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password &&
                                (
                                  
                                         <ErrorMessage component={'div'} name="password" />
                                     
                                )
                            }
                        <button type="submit">Login</button>
                        {isSubmitting ?(<p>Login your credentials...</p>): null}
                    </Form>    

            )}
           </Formik> 
        {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                            Get All Users with Axios

                </button>
                <button onClick={()=> obtainAllPageUsers(1)}>
                            Get All Users (Page 1) with Axios
                </button>
                <button onClick={()=> obtainUserById(1)}>
                            Get User 1
                </button>
                <button onClick={()=> createNewUser('morpheus','leader')}>
                                Create User  
                </button>
                <button onClick={()=> updateThisUserById('morpheus','developer')}>
                                Update User  
                </button>
                <button onClick={()=> deleteThisUserById(1)}>
                                delete User  
                </button>
                
               

            </div>

        </div>
    );
}

export default AxiosCRUDExample;
