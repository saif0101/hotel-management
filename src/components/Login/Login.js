import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firbase.config';
import { getAuth, signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';




const app = initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext)

//    redirect to book page   
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
 
   const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email, photoURL, password } = result.user;
                const signInuser = {name :displayName,email:email}
                setLoggedInUser(signInuser);
                navigate(from, { replace: true });

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            })

            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>

        </div>
    );
};

export default Login;