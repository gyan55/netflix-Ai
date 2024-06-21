import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../store/user";
import { onAuthStateChanged } from "firebase/auth";
function Header(){


const user  = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignout(){
        signOut(auth).then(() => {
            // Sign-out successful.
            
          }).catch((error) => {
            // An error happened.
          });
    }

    
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = auth.currentUser;
              
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate("/browse");
              
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
              
            }
          });
       //unsubscribe when component unmounts
       return () => unsubscribe();

    },[navigate]);

 return (
    <div class="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
    <img 
      style= {{width:180}}
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
    />
 
   { user && <button onClick={handleSignout} class="bg-red-700 text-white px-4 py-2 rounded">Sign Out</button> }
  </div>
)};

export default Header;