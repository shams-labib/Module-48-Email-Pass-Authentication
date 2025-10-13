import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/_firebase.init';

const Login = () => {

    const handleSubmit = (e)=>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log('Register', email, password);

          createUserWithEmailAndPassword(auth, email, password).then(result => {
            console.log(result.user)
          }).catch(err =>{
            console.log(err)
          })
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
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;