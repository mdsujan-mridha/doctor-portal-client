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

    const handleLoginSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    let sendingElement;
    if (sending) {
        sendingElement =
            toast('sending');
    }

let errorElement;
if(error){
    errorElement=
    <div class="alert alert-warning shadow-lg">
    <div>
   <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
   <span> {error?.message} </span>
  </div>
 </div>
}

let loadingElement;
if(loading){
    loadingElement =
    <button class="btn btn-secondary loading">loading</button>
}


    return (
        <div className='flex justify-center items-center h-screen'>

            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 class="font-bold text-center text-xl mt-6 mb-9"> Login </h2>
                    <div className="form-area">

                        <form onSubmit={handleLoginSubmit} className='grid grid-cols-1 gap-5'>

                            <input ref={emailRef} type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-full border-2" required />
                            <input ref={passwordRef} type="password" name='password' placeholder="password" class="input input-bordered w-full max-w-full border-2" required />
                            <button onSubmit={sendPasswordResetEmail} className='text-left text-secondary font-semibold font-xl'> Forgot Password ? </button>
                            
                            <input type="submit" value="Login" class="btn btn-accets w-full max-w-full text-white-100 font-medium mt-9 border-2" />

                        </form>
                            
                        <p className='mt-3 text-base font-semibold'> New to Doctors Portal? <Link to="/register" className='no-underline text-secondary '>Create new account</Link></p>
                        <p> {sendingElement} </p>
                            <p> {errorElement} </p>
                            <p> {loadingElement} </p>
                    </div>
                    <div class="divider">OR</div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>


        </div>
    );
};

export default Login;


