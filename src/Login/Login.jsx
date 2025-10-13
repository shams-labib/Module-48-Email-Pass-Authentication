import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/_firebase.init';
import { FaEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const Login = () => {

    const [error, setError] = useState('')
    const [succes, setSucces] = useState(false);
    const [showPassword, setShowpassword] = useState(false)

    const handleSubmit = (e)=>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log('Register', email, password);

        //  reset error or succes set-up
        setError(null);
        setSucces(false);

        //   RegEx Password Check
        const lengthCheck = /^.{6,}$/;
        if(!lengthCheck.test(password)){
            setError("Password must be in 6 Characters");
            return;
        }

          createUserWithEmailAndPassword(auth, email, password).then(result => {
            console.log(result.user)
            setSucces(true);
            e.target.reset();
          }).catch(err =>{
            console.log(err.message);
            setError(err.message)
          })
    }

    const handleShowPassword = (e)=>{
        e.preventDefault();
        setShowpassword(!showPassword)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={(e)=> handleSubmit(e)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email'
           type='email'
            className="input" 
            placeholder="Email" />
          <label className="label">Password</label>
         <div className='relative'>
             <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" />
             <button onClick={(e)=> handleShowPassword(e) } className="btn btn-xs absolute top-2 right-7">{showPassword ? <FaEye></FaEye> : <LuEyeClosed></LuEyeClosed>}</button>
         </div>
         <div className='mt-1'>
          <label class="label">
    <input type="checkbox" class="checkbox" />
    Accept Our Terms And Condition
  </label>
         </div>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        {
            succes && <p className='text-green-500'>Account Created Success</p>
        }

        {
            error && <p className='text-red-600'>{error}</p>
        }
        
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;