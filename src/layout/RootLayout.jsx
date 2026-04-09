import { Outlet } from "react-router";
import Home from "../pages/Home/Home";

const RootLayout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </div>
     );
}
 
export default RootLayout;