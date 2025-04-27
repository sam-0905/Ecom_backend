import { use, useState } from "react";
import { useNavigate } from "react-router";
import Signup from './Signup';
import { useAuth } from "../Context/Auth-context";

const Login = () =>{
    const {login,setLogin} = useAuth()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const navigate = useNavigate()

    function handleLogin() {
        if (password === "4242"){
            setLogin(true)
            navigate("/Signup")
        }else{
            setPassword("");
            setError(true)
        }
    }

    const onChangeHandler = (e) => setPassword(e.target.value);
    const onchangeHandler2 = (e) => setEmail(e.target.value)

    return (
        <>  
            <h1>Login page</h1>
            <div>
                <p>Enter your password</p>
                <input placeholder="email" onChange={onchangeHandler2} />
                <input type="password" value={password} onChange={onChangeHandler} />
                <button onClick={handleLogin}>Login</button>
                {error && <div> please enter the correct password</div>}
            </div>
        </>
    )

}

export default Login;