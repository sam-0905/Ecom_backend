import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/Auth-context";

const RequireAuth = ({children}) => {
    const {isLoggedIn} = useAuth();
    const location = useLocation();

    return  isLoggedIn ? children : <Navigate to="/login" state={{from:location}} replace/>    
}

export default RequireAuth;