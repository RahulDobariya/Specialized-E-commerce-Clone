import React, { useState } from 'react';
import './Login.css';
import InputControl from '../InputControl/InputControl';
import {Link,useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../../../firebase'
// import { UserAuth } from '../../Context/AuthContext';

const Login=()=>{
    // const {googleSignIn}=UserAuth();
    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        pass:""
    });

    const [errorMsg,setErrorMsg]=useState('');
    const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

    const handleSubmission=()=>{
        if(!values.email||!values.pass){
            setErrorMsg("Fill all fields")
            return;
        }
        setErrorMsg("");
        
        setSubmitButtonDisabled(true);

        signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            setSubmitButtonDisabled(false);
            console.log(res);
            const user=res.user;
            await updateProfile(user,{
                displayName:values.name,
            });
            navigate("/");
        }).catch((err)=>{
            setSubmitButtonDisabled(false)
            console.log(err)
            setErrorMsg(err.message);
        });
    };

    // const handleGoogleLogin=async()=>{
    //     try {
    //         await googleSignIn();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return <div className={"logincontainer"}>
        <div className={"innerBox"}>
            <h1 className={"heading"}>Login</h1>
            <InputControl label="Email" type="email" placeholder="Enter email address" onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} />
            <InputControl label="Password" type="password" placeholder="Enter Password" onChange={(event)=>{setValues((prev)=>({...prev,pass:event.target.value}))}}/>

            <div className='loginfooter'>
                <b className='errorMsg'>{errorMsg}</b>
                <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                <p>Don't have an account?{" "}
                    <span>
                        <Link to="/signup">Sing Up</Link>
                    </span>
                </p>
            </div>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="googleLogo" onClick={handleGoogleLogin}/> */}
        </div>
    </div>
}

export default Login;