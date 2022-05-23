import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // update profile 
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSignUpForm =async e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        updateProfile({displayName:name})
        // console.log(name, email, password);
    }
    //    handle loading 
    let lodingElement;
    if (loading || updating) {
        lodingElement = <button class="btn btn-secondary loading">loading</button>
    }
    //  handle error 

    let errorElement;
    if (error || error2) {
        errorElement =
            <div class="alert alert-warning shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span> {error?.message || error2?.message} </span>
                </div>
            </div>

    }
    return (
        <div className='flex justify-center items-center h-screen'>

            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 class="font-bold text-center text-xl mt-6 mb-9"> Sign Up </h2>
                    <div className="form-area">

                        <form onSubmit={handleSignUpForm} className='grid grid-cols-1 gap-5'>

                            <input ref={nameRef} type="name" name='name' placeholder="name" class="input input-bordered w-full max-w-full border-2" required />
                            <input ref={emailRef} type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-full border-2" required />
                            <input ref={passwordRef} type="password" name='password' placeholder="password" class="input input-bordered w-full max-w-full border-2" required />
                            <p className='flex justify-center items-center'> {errorElement} </p>
                            <p> {lodingElement} </p>
                            <input type="submit" value="Singup" class="btn btn-accets w-full max-w-full text-white-100 font-medium mt-9 border-2" />

                        </form>
                        <p className='mt-3 text-base font-semibold'> Already have an account? <Link to="/login" className='no-underline text-secondary mr-4'>Login</Link></p>
                    </div>
                    <div class="divider">OR</div>
                    <SocialLogin></SocialLogin>

                </div>
            </div>


        </div>
    );
};

export default Register;