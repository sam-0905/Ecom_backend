
//Nav link
import { NavLink } from 'react-router-dom';
// import AppIcon from "../assets/images/AppIcon.svg"
import Logo from "../assets/Icon/Logo.png"
import { useAuth } from '../Context/Auth-context';

const getActiveLink = ({ isActive, isPending }) => ({
  margin: '1rem 0',
  color: isActive ? 'yellow' : isPending ? 'pending' : 'cornsilk',
});

export const Title = () => (
    <div>
      <a href="/" className='logo-container'>
        <span className='logo-heading'>Loopizo</span>
        <img className="logo" src={Logo} alt="logo" />
        <span className='Nav' style={{marginRight:"5rem",marginTop:"0.5rem"}}><NavLink style={getActiveLink} to="/products">
        <a className="fa fa-product-hunt container"> Products</a>
        </NavLink></span>
      </a>
         
    </div>
  );

const Header = () => {    
    const {login,setLogin} = useAuth()
   return (
    <>   
    <div className="header">
         <Title/>
    <nav className="Nav link ">
        <NavLink style={getActiveLink} to="/">
        <a className="fa fa-home container"> Home  </a>
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
        <a className="fa fa-heart container"> Wishlist</a>
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
        <a className="fa fa-cart-arrow-down container"> Cart</a>
        </NavLink>
        <NavLink 
  style={getActiveLink} 
  to="/login" 
  onClick={() => setLogin((prev) => !prev)}
  
>
  <a className="fa fa-sign-in container">  {login ? "Logout" : "Login"}
  </a>
</NavLink>

        <NavLink style={getActiveLink} to="/address">
        <a className="fa fa-cart-arrow-down container"> address</a>
        </NavLink>
      </nav>
    </div>
    </>
   )
}

export default Header;