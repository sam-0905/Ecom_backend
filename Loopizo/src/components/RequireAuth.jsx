import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Context/Auth-context";

const RequireAuth = ({children}) => {
    const {login} = useAuth();
    const location = useLocation();

    return  login ? children : <Navigate to="/login" state={{from:location}} replace/>    
}

export default RequireAuth;