import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import SignIn from "./SignIn";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../store/user";




function Hero(){

    const Approuter = createBrowserRouter([
        {
            path:"/",
            element:  <SignIn/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    const dispatch = useDispatch();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              const email = user.email;
              const displayName = user.displayName;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              
            }
          });
    })


    return(
    <div>
        <RouterProvider router ={Approuter} />
    </div>
    );
}
export default Hero;