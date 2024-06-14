import { useState } from "react";
import Header from "./Header";

function SignIn(){

const [isSignUp,setIsSignUP] = useState(false);

const toggleSignIn = () => {
   setIsSignUP(!isSignUp);
};

    return (
        <>
       <Header /> 
       <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
          
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/cecb9d9e-e0b7-44ea-ba10-3d96fea393dd/AU-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="background"
          />
          <form className="relative    w-1/4 bg-black bg-opacity-80 text-white p-8 rounded-lg z-10"  >
            <h1 className="text-3xl p-2 mb-4">{isSignUp ? "Sign Up" :"Sign In"}</h1>
           { isSignUp &&  <input
              type="text"
              placeholder="Username"
              className="w-full p-4 my-1 mb-4 bg-gray-800 rounded border border-gray-700"
            />}
            <input
              type="text"
              placeholder="Email address"
              className="w-full p-4 my-1 mb-4 bg-gray-800 rounded border border-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4  mb-4 bg-gray-800 rounded border border-gray-700"
            />
            <button className="w-full my-3 bg-red-700 p-4 rounded">{isSignUp ? "Sign Up" :"Sign In"}</button>
            <p className=" py-2 hover:opacity-50 cursor-pointer" onClick={toggleSignIn}>{isSignUp ? "already registered,Login Now" : "New to Netflix,Sign Up here"}</p>
          </form>
        </div>
        </>
      );
      
};

export default SignIn;