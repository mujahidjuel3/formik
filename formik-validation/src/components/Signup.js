import React from "react";
// eslint-disable-next-line no-unused-vars
import * as yup from 'yup';

import {useFormik} from "formik";

//username,email,phone,password,confirmpassword
const Signup = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmpassword: ""
        },
        validationSchema: yup.object({
            username:yup.string().min(6,"name must have atleast 2 characters").required() ,
            email:yup.string().email().required()  ,
            phone:yup.string().min(11).required()  ,
            password: yup.string().min(7,"password must have atleast 7 characters").required() ,
            confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required') 
        }),
        onSubmit: (values, {resetForm}) =>{
            console.log(values);
            resetForm({values: ""});
        }

    });

    const usernameRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const phoneRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const confirmPasswordRef = React.useRef(null);

    

    const renderForm = (<form onSubmit={formik.handleSubmit }>
    <div> 
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} ref={usernameRef} required />
        <br />
    {formik.touched.username && formik.errors.username && <span style={{color: "red"}}>
    {formik.errors.username}</span>}

    </div>

    <div> 
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} ref={emailRef}  required /> 
        <br />
        {formik.touched.email && formik.errors.email && <span style={{color: "red"}}>
        {formik.errors.email}</span>}
    </div>

    <div> 
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} ref={phoneRef}  required />
        <br />
        {formik.touched.phone && formik.errors.phone && <span style={{color: "red"}}>{formik.errors.phone}</span>}
    </div>

    <div> 
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} ref={passwordRef}  required />
        <br />
        {formik.touched.password && formik.errors.password && <span style={{color: "red"}}>{formik.errors.password}</span>}
    </div>

    <div> 
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input type="password" id="confirmpassword" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} ref={confirmPasswordRef}  required />
        <br />
        {formik.touched.confirmpassword && formik.errors.confirmpassword && <span style={{color: "red"}}>{formik.errors.confirmpassword}</span>}
    </div>
    <button type="submit">Sign Up</button>
</form>
);

    return <div>
        <h2>Signup Form</h2>
        {renderForm}
        
    </div>
}

export default Signup;