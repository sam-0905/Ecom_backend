import { Navigate } from "react-router";
import { useAuth } from "../Context/Auth-context";

const RequireAuth = ({children}) => {
    const {login} = useAuth();
    return  login ? children : <Navigate to="/login" replace/>    
}

export default RequireAuth;