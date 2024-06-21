import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Browse from "./BrowseContainer/Browse";
import SignIn from "./SignIn";




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
   

    return(
    <div>
        <RouterProvider router ={Approuter} />
    </div>
    );
}
export default Hero;