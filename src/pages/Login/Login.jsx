import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
   const captchaRef = useRef(null)
   const [disabled,setDisabled] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handelLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        const regult = { email, password }
        // console.log(regult)
    }

    const handleValeDateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value; 
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="text-center  lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='capcha' placeholder="type the captcha above" className="input input-bordered" />
                            <button onClick={handleValeDateCaptcha} className="btn btn-xs  btn-outline mt-3">VALIDATE</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;