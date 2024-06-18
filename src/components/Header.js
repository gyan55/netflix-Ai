import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
function Header(){

const user  = useSelector((store) => store.user);
const navigate = useNavigate();
    function handleSignout(){
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
 return (
    <div class="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
    <img 
      style= {{width:180}}
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
    />
   { console.log("user",user)}
   { user && <button onClick={handleSignout} class="bg-red-700 text-white px-4 py-2 rounded">Sign Out</button> }
  </div>
)};

export default Header;