import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid Email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
)


export const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
const navigate = useNavigate();

const toProfile =()=>{
    navigate('/profile')

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
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                // We save the data in the localstorage
                await localStorage.setItem('credentials', values)
                 navigate('/profile')
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
        </div>
    );
}


