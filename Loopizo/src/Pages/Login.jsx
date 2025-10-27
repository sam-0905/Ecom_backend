import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../Context/Auth-context";
import "./Login.css";
import { useAlert } from "../Context/Alert-context";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useAuth();
  const {showAlert,alert,hideAlert} = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  // Reset the form on page reload
  useEffect(() => {
    setEmail("");
    setPassword("");
    setRemember(false);
  }, []);

  const handleLogin = () => {
    if (password === "4242") {
      setIsLoggedIn(true);
      // Save credentials in localStorage if "Remember Me" is checked
      if (remember) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }
      showAlert("Logged in successfully!", "success");
      navigate(location.state?.from?.pathname || "/");
    } else {
      setError(true);
      setPassword("");
      showAlert("Incorrect password!", "error");
    }
  };

  const handleSetCredentials = () => {
    setEmail("test@example.com");
    setPassword("4242");
    setRemember(true); // Automatically check "Remember Me"
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>
        
        <label className="login-label">
          <p className="login-label-text">Email address</p>
          <input
            className="login-input"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        
        <label className="login-label">
          <p className="login-label-text">Password</p>
          <input
            className="login-input"
            type="password"
            placeholder="**************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="login-row">
          <label className="remember-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me 
          </label>

          <button className="set-cred-btn" onClick={handleSetCredentials}>
            Set Credentials
          </button>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        {error && <p className="login-error">Incorrect password. Try 4242.</p>}
        <p className="create-account-link">
            Don't have an account? <Link to="/signup">Create a new account</Link>
        </p>
      </div>
      {alert && (
                     <Alert
                       message={alert.message}
                       type={alert.type}
                       onClose={hideAlert}
                      />
                     )}
    </div>
  );
};

export default Login;
