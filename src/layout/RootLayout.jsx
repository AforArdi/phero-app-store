import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
    return ( 
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </div>
     );
}
 
export default RootLayout;