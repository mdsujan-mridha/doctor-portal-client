import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';


const SocialLogin = () => {

    // login with google 
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);



    if (loading1) {
        return <button class="btn loading">loading</button>
    }
    let errorElement;
    if (error1) {
        errorElement=
        <div class="alert alert-warning shadow-lg">
       <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span> {error1?.message} </span>
     </div>
    </div>
           
    }
    return (

        <> 
        <p>{errorElement}</p>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accets border-2"> CONTINUE WITH GOOGLE </button>
        </>

    );
};

export default SocialLogin;