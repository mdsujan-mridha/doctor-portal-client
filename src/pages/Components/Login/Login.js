import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    //  login with user name and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
// handle password reset 
const [sendPasswordResetEmail, 
    sending, 
    error2] = useSendPasswordResetEmail(
    auth
  );



       const emailRef = useRef();
       const passwordRef = useRef();
const handleLoginSubmit = e =>{
     e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password);
}

let sendingElement;
if(sending){
    sendingElement=
    toast('sending');
}


    return (
        <div className='flex justify-center items-center h-screen'>

            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 class="font-bold text-center text-xl mt-6 mb-9"> Login </h2>
                    <div className="form-area">

                        <form onSubmit={handleLoginSubmit} className='grid grid-cols-1 gap-5'>

                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-full border-2" required />
                        <input type="password" name='password' placeholder="password" class="input input-bordered w-full max-w-full border-2" required/>
                        <button onSubmit={sendPasswordResetEmail} className='text-left text-secondary font-semibold font-xl'> Forgot Password ? </button>
                           <p> {sendingElement} </p>
                            <input type="submit" value="Login" class="btn btn-accets w-full max-w-full text-white-100 font-medium mt-9 border-2" />

                        </form>
                    </div>
                    <div class="divider">OR</div>
                        <SocialLogin></SocialLogin>
                          <ToastContainer/>
                </div>
            </div>


        </div>
    );
};

export default Login;
/*

 <div className="login-section"> 
              
              <div className="login-area">
                  <h1> Login </h1>
                  <div className="form-area">
                      <form>

                      <input type="email" name="email" id="1" placeholder='Enter Your eamil' />
                      <input type="name" name="name" id="2" placeholder='Enter Your name' />
                      <input type="submit" value='Login' id="3" />

                      </form>
                  </div>
              </div>
              
               
            </div> 
            */


