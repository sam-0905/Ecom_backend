import { useState } from "react";
import "./Signup.css"; 
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/Auth-context";
const Signup = () => {

    const {login} = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
        login()
      };

      const navigate = useNavigate();
    return (
        <>
          <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Signup</h2>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="**************"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
        </>
    )
}

export default Signup;



