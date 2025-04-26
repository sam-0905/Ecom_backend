import { use, useState } from "react";
import { useNavigate } from "react-router";
import Signup from './Signup';

const Login = () =>{

    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);

    const navigate = useNavigate()

    function handleLogin() {
        if (password === "4242"){
            navigate("/Signup")
        }else{
            setPassword("");
            setError(true)
        }
    }

    const onChangeHandler = (e) => setPassword(e.target.value)
    // console.log(onChangeHandler)
    return (
        <>  
            <h1>Login page</h1>
            <div>
                <p>Enter your password</p>
                <input type="password" value={password} onChange={onChangeHandler} />
                <button onClick={handleLogin}>Login</button>
                {error && <div> please enter the correct password</div>}
            </div>
        </>
    )

}

export default Login;