import React, { useState } from 'react';
import './SignUp.css';
import InputControl from '../InputControl/InputControl';
import {Link,useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../../../firebase'
const SignUp=()=>{
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:"",
        email:"",
        pass:"",
        phoneNumber:"",
    });
    console.log(values.phoneNumber);
    const [errorMsg,setErrorMsg]=useState('');
    const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

    const handleSubmission=()=>{
        if(!values.name||!values.email||!values.pass||!values.phoneNumber){
            setErrorMsg("Fill all fields")
            return;
        }
        setErrorMsg("");
        
        setSubmitButtonDisabled(true);

        createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            setSubmitButtonDisabled(false);
            console.log(res);
            const user=res.user;
            await updateProfile(user,{
                displayName:values.name,
                phoneNumber:values.phoneNumber,
            });
            navigate("/");
        }).catch((err)=>{
            setSubmitButtonDisabled(false)
            console.log(err)
            setErrorMsg(err.message);
        });
    };
    return <div className={"signupcontainer"}>
        <div className={"innerBox"}>
            <h1 className={"heading"}>SignUp</h1>
            <InputControl label="Name" type="text" placeholder="Enter your name" onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))}/>
            <InputControl label="Email" type="email"  placeholder="Enter email address" onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}/>
            <InputControl label="Password" type="password" placeholder="Enter your password" onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>
            <InputControl label="Phone No" type="tel" placeholder="Enter your phone no" onChange={(event)=>setValues((prev)=>({...prev,phoneNumber:event.target.value}))}/>
            <div className='signUpfooter'>
                <b className='errorMsg'>{errorMsg}</b>
                <button onClick={handleSubmission} disabled={submitButtonDisabled}>SignUp</button>
                <p>Already have an account?{" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </div>
            {/* <div>
                {`Welcome to Specilized App ${user}`}
            </div> */}
        </div>
    </div>
}

export default SignUp;