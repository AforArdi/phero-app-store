import { NavLink } from "react-router";

const MyNavLinks = ({to, className, children}) => {
    return (
        <div>
            <NavLink to={to}
                className={({ isActive }) =>
                    `font-bold pb-1 ${isActive ? 'border-b border-purple-500 text-purple-500' : ''}`
                }>{children}
            </NavLink>
        </div>
    );
}

export default MyNavLinks;