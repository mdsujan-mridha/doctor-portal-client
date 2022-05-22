import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';


const SocialLogin = () => {

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);


  console.log(user1);

    return (
      
            <>
                <button onClick={()=>signInWithGoogle()} class="btn btn-outline btn-accets border-2"> CONTINUE WITH GOOGLE </button>
            </>
      
    );
};

export default SocialLogin;