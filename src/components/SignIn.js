import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


function SignIn(){

const [isSignUp,setIsSignUP] = useState(false);
const [errorMsg,setErrorMsg] = useState(null);
const email = useRef(null);
const password = useRef(null);





const toggleSignIn = () => {
   setIsSignUP(!isSignUp);
};

const handleAuth = () => {
    //validate the form data
   const msg = setErrorMsg(checkValidate(email.current.value,password.current.value));
    if(msg) return;

    //signin/signUp 
    if(isSignUp){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user",user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+errorMessage);
    // ..
  });

    }
    else{
        console.log("login")
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    console.log("logged in user",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+errorMessage);
  });
    }

}

    return (
        <>
       <Header /> 
       <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
          
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/cecb9d9e-e0b7-44ea-ba10-3d96fea393dd/AU-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="background"
          />
          <form  onSubmit={(e)=>e.preventDefault()} className="relative    w-1/4 bg-black bg-opacity-80 text-white p-8 rounded-lg z-10"  >
            <h1 className="text-3xl p-2 mb-4">{isSignUp ? "Sign Up" :"Sign In"}</h1>
           { isSignUp &&  <input
              type="text"
              placeholder="Username"
              className="w-full p-4 my-1 mb-4 bg-gray-800 rounded border border-gray-700"
            />}
            <input
              type="text"
              ref={email}
              placeholder="Email address"
              className="w-full p-4 my-1 mb-4 bg-gray-800 rounded border border-gray-700"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-4  mb-4 bg-gray-800 rounded border border-gray-700"
            />
            <p className="text-red-500 font-bold">{errorMsg}</p>
            <button className="w-full my-3 bg-red-700 p-4 rounded" onClick={handleAuth}>{isSignUp ? "Sign Up" :"Sign In"}</button>
            <p className=" py-2 hover:opacity-50 cursor-pointer" onClick={toggleSignIn}>{isSignUp ? "already registered,Login Now" : "New to Netflix,Sign Up here"}</p>
          </form>
        </div>
        </>
      );
      
};

export default SignIn;