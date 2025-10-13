import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../Firebase/_firebase.init';

const LoginPage = () => {


    const [error, setError] = useState('');

    const emailRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        // se Error
        setError("")

        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password).then(result => {
          console.log(result.user);
          if(result.user.emailVerified === false){
            alert('Please Verify your email')
          }
        }).catch(err => {
            console.log(err.message)
            setError(err.message)
        });
    }

    const handleForgetPassword = ()=>{

      // ekhane ekta kahini hosce ami email er inp theke email er man ta paoyar jonno "useRef" name e ekta notun mal er sathe poricito hoiLam,eta ref er maddome email er inp te add kore nilei somossa solve

      const email = emailRef.current.value;
      console.log("verifyed", email)

      sendPasswordResetEmail(auth, email).then(()=>{
        alert("To reset password check your email please")
      }).catch(err => {
        console.log(err)
      })

    }

    return (
   <div className='mx-auto mt-10 max-w-sm space-y-5'>
     <h1 className="text-5xl text-center font-bold">Login now!</h1>
     <form onSubmit={handleSubmit}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
        
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
           ref={emailRef} 
           name='email' 
           type="email" 
           className="input" 
           placeholder="Email" />
          <label className="label">Password</label>
          <input 
          name='password' 
          type="password" 
          className="input" 
          placeholder="Password" />
          <div onClick={handleForgetPassword} ><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          {
    error && <p className='text-red-500 font-semibold text-md'>Wrong Credential</p>
   }
        </fieldset>
      </div>
    </div>


     <p className='text-center mt-8'>New to our website? <Link className='text-blue-600 font-semibold underline' to={'/Login'}>Register Now</Link></p>
     </form>
   </div>
    );
};

export default LoginPage;